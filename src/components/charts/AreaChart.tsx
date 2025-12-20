import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AreaChartProps {
  data: Array<{ name: string; value: number }>;
  dataKey: string;
  color?: string;
}

export function AreaChart({ data, dataKey, color = "hsl(var(--chart-1))" }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="name"
          className="text-xs"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis className="text-xs" tickLine={false} axisLine={false} tickMargin={8} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--popover))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "calc(var(--radius) - 2px)",
          }}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          fill={`url(#color${dataKey})`}
          strokeWidth={2}
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}

