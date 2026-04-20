"use client";

import { useState, useMemo } from "react";
import { ApiItem, getCategoryById } from "@/data/apis";

interface ApiDetailProps {
  api: ApiItem;
  onClose: () => void;
}

type Tab = "response" | "curl" | "fetch" | "python";

function highlightJson(str: string): string {
  return str.replace(
    /("(?:\\.|[^"\\])*")\s*:/g,
    '<span class="json-key">$1</span>:'
  ).replace(
    /:\s*("(?:\\.|[^"\\])*")/g,
    ': <span class="json-string">$1</span>'
  ).replace(
    /:\s*(\d+\.?\d*)/g,
    ': <span class="json-number">$1</span>'
  ).replace(
    /:\s*(true|false)/g,
    ': <span class="json-boolean">$1</span>'
  ).replace(
    /:\s*(null)/g,
    ': <span class="json-null">$1</span>'
  ).replace(
    /([[\]{}])/g,
    '<span class="json-bracket">$1</span>'
  );
}

export default function ApiDetail({ api, onClose }: ApiDetailProps) {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseTime, setResponseTime] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<Tab>("response");
  const [copied, setCopied] = useState(false);

  const cat = getCategoryById(api.category);

  const callApi = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    setActiveTab("response");
    const start = performance.now();

    try {
      const res = await fetch(api.endpoint, {
        method: api.method,
        headers: api.id === "dad-joke" ? { Accept: "application/json" } : {},
      });
      const elapsed = Math.round(performance.now() - start);
      setResponseTime(elapsed);

      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("image")) {
        setResponse(`🖼️ Image URL: ${res.url}\n\nContent-Type: ${contentType}`);
      } else {
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          setResponse(JSON.stringify(data, null, 2));
        } catch {
          setResponse(text);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const snippets: Record<string, string> = {
    curl: `curl -X ${api.method} "${api.endpoint}"`,
    fetch: `fetch("${api.endpoint}")\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));`,
    python: `import requests\n\nresponse = requests.${api.method.toLowerCase()}("${api.endpoint}")\ndata = response.json()\nprint(data)`,
  };

  const tabs: { id: Tab; label: string; shortcut?: string }[] = [
    { id: "response", label: "Response" },
    { id: "curl", label: "cURL" },
    { id: "fetch", label: "JS" },
    { id: "python", label: "Python" },
  ];

  const currentContent = activeTab === "response"
    ? (response || "")
    : (snippets[activeTab] || "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-[2px]" onClick={onClose}>
      <div
        className="w-full max-w-2xl max-h-[80vh] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg flex flex-col overflow-hidden shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-base">{cat?.icon}</span>
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-[var(--color-text)]">{api.name}</h2>
              <p className="text-xs text-[var(--color-text-muted)]">{api.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors p-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Endpoint bar */}
        <div className="px-5 py-3 border-b border-[var(--color-border-light)] bg-[var(--color-surface)]">
          <div className="flex items-center gap-2">
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ${
              api.method === "GET" ? "text-[var(--color-accent)]" : "text-[var(--color-warn)]"
            }`}>
              {api.method}
            </span>
            <code className="flex-1 text-xs text-[var(--color-text-muted)] font-mono truncate">{api.endpoint}</code>
            <button
              onClick={callApi}
              disabled={loading}
              className="shrink-0 px-4 py-1.5 rounded-md text-xs font-medium text-[var(--color-bg)] bg-[var(--color-accent)] hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
            >
              {loading ? (
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                </span>
              ) : "Send"}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-0 px-5 border-b border-[var(--color-border-light)]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2.5 text-xs font-medium transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "text-[var(--color-text)] border-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] border-transparent hover:text-[var(--color-text)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
          {responseTime > 0 && activeTab === "response" && (
            <span className="ml-auto text-[11px] font-mono text-[var(--color-text-muted)]">{responseTime}ms</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5 min-h-0">
          {activeTab === "response" && !response && !error && !loading && (
            <div className="flex flex-col items-center justify-center h-full text-[var(--color-text-muted)] gap-2">
              <span className="text-2xl opacity-40">⌘</span>
              <p className="text-xs">Press Send to make a request</p>
            </div>
          )}

          {error && (
            <div className="p-3 rounded-md bg-red-500/5 border border-red-500/10 text-red-400 text-xs">
              <p className="font-medium mb-1">Error</p>
              <p className="text-red-400/70">{error}</p>
              <p className="text-[var(--color-text-muted)] mt-2">May be blocked by CORS. Try the cURL tab.</p>
            </div>
          )}

          {currentContent && (
            <div className="relative group/code">
              <button
                onClick={() => copyToClipboard(currentContent)}
                className="absolute top-2 right-2 p-1.5 rounded-md bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors opacity-0 group-hover/code:opacity-100"
              >
                {copied ? (
                  <svg className="w-3.5 h-3.5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
              {activeTab === "response" && response ? (
                <pre
                  className="p-4 rounded-md bg-[var(--color-surface)] text-[var(--color-text)] overflow-x-auto leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: highlightJson(currentContent) }}
                />
              ) : (
                <pre className="p-4 rounded-md bg-[var(--color-surface)] text-[var(--color-text-muted)] overflow-x-auto leading-relaxed">
                  {currentContent}
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
