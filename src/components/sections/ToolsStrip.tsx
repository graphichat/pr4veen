import {
  IconBrandFigma,
  IconBrandFramer,
  IconBrandNotion,
  IconBrandSlack,
} from "@tabler/icons-react";
import { Spline, Grid3X3, GitBranch, Layers, MousePointer2, FileText } from "lucide-react";

const tools = [
  { name: "Figma", icon: IconBrandFigma },
  { name: "FigJam", icon: Layers },
  { name: "Framer", icon: IconBrandFramer },
  { name: "Spline", icon: Spline },
  { name: "Notion", icon: IconBrandNotion },
  { name: "Linear", icon: GitBranch },
  { name: "Miro", icon: Grid3X3 },
  { name: "Maze", icon: MousePointer2 },
  { name: "Zeplin", icon: FileText },
  { name: "Slack", icon: IconBrandSlack },
];

export function ToolsStrip() {
  return (
    <div className="overflow-hidden border-y bg-muted/20 py-3 select-none">
      <div
        className="flex w-max animate-marquee gap-0"
        style={{ "--marquee-duration": "28s" } as React.CSSProperties}
      >
        {/* Duplicate list for seamless loop */}
        {[...tools, ...tools].map((tool, i) => {
          const Icon = tool.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-6 text-muted-foreground/70"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="text-xs font-medium whitespace-nowrap">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
