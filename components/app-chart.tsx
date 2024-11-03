"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
} from "recharts";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type ChartProps = React.ComponentProps<typeof Card> & {
  params: {
    chartData: { xaxis: string; desktop: number }[];
    title: string;
    typeChart: string;
  };
};

export function ChartComponent({ className, params, ...props }: ChartProps) {

  // Determine the chart component based on typeChart
  const ChartToRender =
    params.typeChart === "bar" ? (
      <BarChart
        data={params.chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="xaxis"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis axisLine={false} />
        <Tooltip content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="desktop" fill={chartConfig.desktop.color} barSize={20} />
      </BarChart>
    ) : <></> || params.typeChart === "line" ? (
      <LineChart
        data={params.chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="xaxis"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis axisLine={false} />
        <Tooltip content={<ChartTooltipContent hideLabel />} />
        <Line
          type="linear"
          dataKey="desktop"
          stroke={chartConfig.desktop.color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    ) : (
      <></>
    );

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="text-lg">{params.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>{ChartToRender}</ChartContainer>
      </CardContent>
    </Card>
  );
}
