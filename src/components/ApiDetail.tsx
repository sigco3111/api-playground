"use client";

import { useState } from "react";
import { ApiItem, getCategoryById } from "@/data/apis";

interface ApiDetailProps {
  api: ApiItem;
  onClose: () => void;
}

type Tab = "response" | "curl" | "fetch" | "python";

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
      if (contentType.includes("json") || contentType.includes("javascript")) {
        const data = await res.json();
        setResponse(JSON.stringify(data, null, 2));
      } else if (contentType.includes("image")) {
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
    setTimeout(() => setCopied(false), 2000);
  };

  const curlSnippet = `curl -X ${api.method} "${api.endpoint}"`;

  const fetchSnippet = `fetch("${api.endpoint}")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`;

  const pythonSnippet = `import requests

response = requests.${api.method.toLowerCase()}("${api.endpoint}")
data = response.json()
print(data)`;

  const getSnippet = () => {
    switch (activeTab) {
      case "curl": return curlSnippet;
      case "fetch": return fetchSnippet;
      case "python": return pythonSnippet;
      default: return response || "";
    }
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "response", label: "Response" },
    { id: "curl", label: "cURL" },
    { id: "fetch", label: "Fetch" },
    { id: "python", label: "Python" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/50">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-2xl">{cat?.icon}</span>
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-white truncate">{api.name}</h2>
              <p className="text-sm text-slate-400">{api.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Endpoint & Send */}
        <div className="p-5 border-b border-slate-700/50 bg-slate-800/30">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wider ${
                api.method === "GET" ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {api.method}
            </span>
            <code className="flex-1 text-sm text-slate-300 bg-slate-800 px-3 py-2 rounded-lg overflow-x-auto">
              {api.endpoint}
            </code>
          </div>
          <button
            onClick={callApi}
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                요청 중...
              </>
            ) : (
              <>🚀 Send Request</>
            )}
          </button>
        </div>

        {/* Tabs & Response */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex items-center gap-1 px-5 pt-4 border-b border-slate-700/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-400 bg-slate-800/80 border-b-2 border-blue-400"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
            {responseTime > 0 && activeTab === "response" && (
              <span className="ml-auto text-xs text-slate-500">{responseTime}ms</span>
            )}
          </div>

          <div className="flex-1 overflow-auto p-5">
            {activeTab === "response" && !response && !error && !loading && (
              <div className="flex flex-col items-center justify-center h-full text-slate-500">
                <span className="text-4xl mb-3">📡</span>
                <p className="text-sm">Send Request 버튼을 눌러보세요</p>
              </div>
            )}

            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <p className="font-semibold mb-1">❌ Error</p>
                <p className="text-sm">{error}</p>
                <p className="text-xs text-slate-500 mt-2">CORS 정책으로 차단될 수 있습니다. cURL 탭에서 직접 테스트해보세요.</p>
              </div>
            )}

            {response && activeTab === "response" && (
              <div className="relative">
                <button
                  onClick={() => copyToClipboard(response)}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors z-10"
                >
                  {copied ? <span className="text-xs text-green-400">✓ Copied</span> : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
                <pre className="p-4 rounded-xl bg-slate-800/80 text-sm text-slate-200 overflow-x-auto font-mono leading-relaxed">
                  {response}
                </pre>
              </div>
            )}

            {(activeTab === "curl" || activeTab === "fetch" || activeTab === "python") && (
              <div className="relative">
                <button
                  onClick={() => copyToClipboard(getSnippet())}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors z-10"
                >
                  {copied ? <span className="text-xs text-green-400">✓ Copied</span> : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
                <pre className="p-4 rounded-xl bg-slate-800/80 text-sm text-slate-200 overflow-x-auto font-mono leading-relaxed">
                  {getSnippet()}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
