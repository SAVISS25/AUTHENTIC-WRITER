'use client';

import ReactMarkdown from 'react-markdown';

interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-gray-100 text-gray-900 rounded-bl-sm border border-gray-200'
        }`}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Writing Coach</span>
          </div>
        )}
        <div
          className={`prose prose-sm max-w-none ${
            isUser ? 'prose-invert' : ''
          }`}
        >
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-4 mb-2">{children}</ol>,
              li: ({ children }) => <li className="mb-1">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              code: ({ children }) => (
                <code className={`px-1 py-0.5 rounded text-sm ${isUser ? 'bg-blue-500' : 'bg-gray-200'}`}>
                  {children}
                </code>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-2">
                  <table className="min-w-full text-sm border-collapse border border-gray-300">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-gray-300 px-3 py-2 bg-gray-100 font-semibold text-left">{children}</th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-300 px-3 py-2">{children}</td>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
        {/* Inline tag highlights */}
        {(content.includes('[NEEDS SOURCE]') || content.includes('[USER DETAIL NEEDED]') || content.includes('[VERIFY]') || content.includes('[VAGUE]')) ? (
          <div className="mt-2 pt-2 border-t border-gray-200 flex flex-wrap gap-1">
            {content.includes('[NEEDS SOURCE]') && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                ⚠ Source needed
              </span>
            )}
            {content.includes('[USER DETAIL NEEDED]') && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                📝 Detail needed
              </span>
            )}
            {content.includes('[VERIFY]') && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                🔍 Verify
              </span>
            )}
            {content.includes('[VAGUE]') && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                ✏ Vague
              </span>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
