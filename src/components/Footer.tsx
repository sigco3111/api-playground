import { getApiCount } from "@/data/apis";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>📡</span>
            <span>API Playground</span>
            <span className="text-slate-700">•</span>
            <span>{getApiCount()}+ Free APIs</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Built with</span>
            <span className="text-blue-400">Next.js</span>
            <span>+</span>
            <span className="text-cyan-400">Tailwind CSS</span>
          </div>
          <a
            href="https://github.com/sigco3111/api-playground"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
          >
            GitHub ⭐
          </a>
        </div>
      </div>
    </footer>
  );
}
