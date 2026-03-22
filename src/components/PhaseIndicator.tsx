'use client';

interface Message {
  role: string;
  content: string;
}

interface PhaseIndicatorProps {
  messages: Message[];
}

const PHASES = [
  { id: 0, name: 'Intake', description: 'Gather context' },
  { id: 1, name: 'Plan', description: 'Outline & thesis' },
  { id: 2, name: 'Draft', description: 'Write sections' },
  { id: 3, name: 'Quality', description: 'Upgrade & refine' },
  { id: 4, name: 'Integrity', description: 'Verify & finalize' },
];

function detectCurrentPhase(messages: Message[]): number {
  const lastFewMessages = messages
    .slice(-6)
    .map((m) => m.content.toLowerCase())
    .join(' ');

  if (lastFewMessages.includes('phase 4') || lastFewMessages.includes('integrity')) return 4;
  if (lastFewMessages.includes('phase 3') || lastFewMessages.includes('quality upgrade') || lastFewMessages.includes('specificity check')) return 3;
  if (lastFewMessages.includes('phase 2') || lastFewMessages.includes('draft in controlled') || lastFewMessages.includes('section at a time')) return 2;
  if (lastFewMessages.includes('phase 1') || lastFewMessages.includes('thesis option') || lastFewMessages.includes('argument map') || lastFewMessages.includes('section outline')) return 1;
  return 0;
}

export default function PhaseIndicator({ messages }: PhaseIndicatorProps) {
  const currentPhase = messages.length > 0 ? detectCurrentPhase(messages) : 0;

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Workflow Phases</p>
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {PHASES.map((phase, index) => {
            const isCurrent = phase.id === currentPhase;
            const isCompleted = phase.id < currentPhase;

            return (
              <div key={phase.id} className="flex items-center">
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                      : isCompleted
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isCurrent
                        ? 'bg-blue-500 text-white'
                        : isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}
                  >
                    {isCompleted ? '✓' : phase.id}
                  </span>
                  <span>{phase.name}</span>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-0.5">
                      <span className="w-1 h-1 bg-blue-300 rounded-full animate-pulse" />
                    </span>
                  )}
                </div>
                {index < PHASES.length - 1 && (
                  <div className={`w-4 h-px mx-0.5 ${phase.id < currentPhase ? 'bg-green-300' : 'bg-gray-200'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
