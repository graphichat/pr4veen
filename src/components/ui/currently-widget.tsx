import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const items = [
  { emoji: "📖", label: "Reading", value: "Winning People Without Losing Yourself — Ankur Warikoo" },
  { emoji: "🛠️", label: "Working on", value: "IQHealth HIMS Platform — modular healthcare facility workflows" },
  { emoji: "🤔", label: "Thinking about", value: "Adding an AI companion to this portfolio — something that sits on the dock like a design co-pilot" },
];

export function CurrentlyWidget() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="h-4 w-4 text-primary" />
          Currently
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex gap-3">
            <span className="text-lg shrink-0 leading-snug">{item.emoji}</span>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
