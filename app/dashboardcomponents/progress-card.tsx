'use client';
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const calculateCompoundData = (initialAmount: number, days: number, dailyRate: number) => {
  let currentAmount = initialAmount;
  for (let day = 1; day <= days; day++) {
    currentAmount *= 1 + dailyRate;
  }
  return Math.round(currentAmount);
};

export default function ProgressCard() {
  const initialAmount = 50000;
  const totalDays = 23;
  const targetAmount = 200000;
  const currentAmount = calculateCompoundData(initialAmount, totalDays, 0.01);
  const remainingAmount = Math.max(targetAmount - currentAmount, 0);
  const percentageAchieved = ((currentAmount / targetAmount) * 100).toFixed(1);

  const data = [
    { name: "Achieved", value: currentAmount },
    { name: "Remaining", value: remainingAmount },
  ];

  const COLORS = ["#4ade80", "#1f2937"];

  const chartConfig = {
    achieved: {
      label: "Achieved",
      color: "hsl(var(--chart-1))",
    },
    remaining: {
      label: "Remaining",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <div className="h-full w-full">
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-200 text-sm font-normal">Achieved Amount</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]">
          <div className="flex flex-col flex-grow space-y-1">
            <h2 className="text-3xl font-semibold">
              ${targetAmount.toLocaleString()}/
              <span className="text-green-500">${currentAmount.toLocaleString()}</span>
            </h2>
            <p className="text-sm text-gray-400">{percentageAchieved}% of target achieved</p>
            <div className="flex-grow flex items-center justify-center mt-4">
              <ChartContainer config={chartConfig} className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      <Label
                        content={(props: any) => {
                          const { viewBox } = props;
                          const { cx, cy } = viewBox || { cx: 0, cy: 0 };
                          return (
                            <g>
                              <text
                                x={cx}
                                y={cy}
                                textAnchor="middle"
                                dominantBaseline="central"
                                className="fill-white text-2xl font-bold"
                              >
                                {percentageAchieved}%
                              </text>
                              <text
                                x={cx}
                                y={cy + 20}
                                textAnchor="middle"
                                dominantBaseline="central"
                                className="fill-gray-400 text-xs"
                              >
                                Achieved
                              </text>
                            </g>
                          );
                        }}
                        position="center"
                      />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
