import { BarChart } from "@/components/charts/BarChart";
import { AreaChart } from "@/components/charts/AreaChart";

type ChartDatum = { name: string; value: number };

interface ProjectChartProps {
  type?: "bar" | "area";
  title?: string;
  caption?: string;
  data: ChartDatum[];
  dataKey?: string;
  color?: string;
  height?: number;
}

export function ProjectChart({
  type = "bar",
  title,
  caption,
  data,
  dataKey = "value",
  color,
  height = 280,
}: ProjectChartProps) {
  return (
    <figure className="my-8 rounded-xl border border-border bg-muted/20 p-4 sm:p-6">
      {title && (
        <figcaption className="mb-1 text-sm font-semibold text-foreground">
          {title}
        </figcaption>
      )}
      {caption && (
        <p className="mb-4 text-xs text-muted-foreground">{caption}</p>
      )}
      <div style={{ height }} className="w-full">
        {type === "area" ? (
          <AreaChart data={data} dataKey={dataKey} color={color} />
        ) : (
          <BarChart data={data} dataKey={dataKey} color={color} />
        )}
      </div>
    </figure>
  );
}
