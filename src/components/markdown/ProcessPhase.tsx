interface ProcessPhaseProps {
  phase: string;
  output: string;
  icon?: string;
}

const phaseIcons: Record<string, string> = {
  Discover: "🔍",
  Define: "📌",
  Design: "✏️",
  Deliver: "🚀",
};

export function ProcessPhase({ phase, output, icon }: ProcessPhaseProps) {
  const emoji = icon || phaseIcons[phase] || "●";
  return (
    <div className="flex items-start gap-4 rounded-lg border bg-muted/30 px-4 py-3 my-3">
      <span className="text-xl shrink-0 mt-0.5">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-sm">{phase}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{output}</p>
      </div>
    </div>
  );
}
