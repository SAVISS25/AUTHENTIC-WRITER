'use client';

import ReactMarkdown from 'react-markdown';

interface SessionSummaryProps {
  onClose: () => void;
  onRequestSummary: () => void;
  isLoading: boolean;
  summaryContent: string;
}

export default function SessionSummary({
  onClose,
  onRequestSummary,
  isLoading,
  summaryContent,
}: SessionSummaryProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Session Summary</h2>
            <p className="text-sm text-gray-500">Drafting log, provenance map & next questions</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {!summaryContent && !isLoading && (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">📋</div>
              <p className="text-gray-600 mb-4">
                Generate a session summary to see your drafting log, provenance map, and next steps.
              </p>
              <button
                onClick={onRequestSummary}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Generate Summary
              </button>
            </div>
          )}

          {isLoading && (
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-2 text-gray-500">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span>Generating summary...</span>
              </div>
            </div>
          )}

          {summaryContent && !isLoading && (
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-lg font-bold text-gray-900 mt-4 mb-2">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-base font-semibold text-gray-900 mt-4 mb-2">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-sm font-semibold text-gray-900 mt-3 mb-1">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-700 mb-2">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc pl-4 mb-2 text-gray-700">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 text-gray-700">{children}</ol>,
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-2">
                      <table className="min-w-full text-sm border-collapse border border-gray-300">{children}</table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-gray-300 px-3 py-2 bg-gray-100 font-semibold text-left text-xs">{children}</th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-gray-300 px-3 py-2 text-xs">{children}</td>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                }}
              >
                {summaryContent}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {summaryContent && (
          <div className="px-6 py-4 border-t border-gray-200 flex gap-2">
            <button
              onClick={onRequestSummary}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Refresh Summary
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
