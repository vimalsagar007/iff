import React, { useState } from 'react';
import { FreedomFighter, StructuredFighterItem } from '../types';
import { X, Copy, Check, Download, FileJson, Search } from 'lucide-react';

interface JsonExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  allFighters: FreedomFighter[];
  filteredFighters: FreedomFighter[];
}

export const JsonExportModal: React.FC<JsonExportModalProps> = ({
  isOpen,
  onClose,
  allFighters,
  filteredFighters,
}) => {
  const [exportScope, setExportScope] = useState<'all' | 'filtered'>('all');
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const targetList = exportScope === 'all' ? allFighters : filteredFighters;

  // Format exactly to user requested structure
  const structuredData = {
    fighters: targetList.map((f): StructuredFighterItem => ({
      name: f.name,
      years: f.years,
      region: f.region,
      contribution: f.contribution,
      events: f.events,
      bio: f.bio,
      photo_url: f.photo_url,
    })),
  };

  const jsonString = JSON.stringify(structuredData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `freedom_fighters_1857_1947_${exportScope}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="json-export-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        id="json-export-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-stone-900 text-stone-100 rounded-2xl shadow-2xl border border-stone-700 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Tricolor top line */}
        <div className="h-1.5 w-full tricolor-stripe shrink-0" />

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:px-6 bg-stone-850 border-b border-stone-800 gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <FileJson className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Structured JSON Database (1857–1947)</span>
              </h2>
              <p className="text-xs text-stone-400 font-mono">
                Schema compliant with historical figures database project
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {/* Scope selection buttons */}
            <div className="flex rounded-lg bg-stone-800 p-1 border border-stone-700 text-xs font-medium">
              <button
                id="btn-export-scope-all"
                onClick={() => setExportScope('all')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  exportScope === 'all'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                All Fighters ({allFighters.length})
              </button>
              <button
                id="btn-export-scope-filtered"
                onClick={() => setExportScope('filtered')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  exportScope === 'filtered'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Filtered ({filteredFighters.length})
              </button>
            </div>

            <button
              id="btn-close-json-modal"
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar: Stats + Action Buttons */}
        <div className="px-6 py-2.5 bg-stone-950 border-b border-stone-800 flex flex-wrap items-center justify-between text-xs gap-3 shrink-0">
          <div className="flex items-center gap-4 text-stone-400 font-mono">
            <span>
              Records: <strong className="text-amber-400">{structuredData.fighters.length}</strong>
            </span>
            <span>
              Format: <span className="text-emerald-400">RFC 8259 JSON</span>
            </span>
            <span className="hidden sm:inline">
              Approx Size: ~{(jsonString.length / 1024).toFixed(1)} KB
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-copy-json-clipboard"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-300" />
                  <span>Copy JSON</span>
                </>
              )}
            </button>

            <button
              id="btn-download-json-file"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .JSON</span>
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="relative flex-1 overflow-auto bg-stone-950 p-4 sm:p-6 font-mono text-xs leading-relaxed">
          <pre className="text-stone-300 selection:bg-amber-800 selection:text-white">
            <code>{jsonString}</code>
          </pre>
        </div>

        {/* Bottom Footer Info */}
        <div className="px-6 py-2 bg-stone-900 border-t border-stone-800 text-[11px] text-stone-400 flex items-center justify-between shrink-0">
          <span>Ready for integration into external APIs, database seeders, or academic datasets.</span>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white underline text-xs"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
