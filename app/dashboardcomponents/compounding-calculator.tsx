"use client";

import { useState, useMemo, ChangeEvent } from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CompoundingCalculator() {
  const [initialAmount, setInitialAmount] = useState<string>("500");
  const [months, setMonths] = useState<number[]>([12]);

  const calculateCompounding = useMemo(() => {
    const data = [];
    let currentAmount = parseFloat(initialAmount) || 0;
    const currentMonths = months[0];

    // Calculate monthly compound interest (1% daily = roughly 35% monthly)
    const monthlyRate = 0.35;

    for (let month = 0; month <= currentMonths; month++) {
      data.push({
        month,
        amount: parseFloat(currentAmount.toFixed(2)),
      });
      currentAmount *= 1 + monthlyRate;
    }
    return data;
  }, [initialAmount, months]);

  const finalAmount =
    calculateCompounding[calculateCompounding.length - 1].amount;
  const totalProfit = finalAmount - (parseFloat(initialAmount) || 0);
  const roi = (
    ((finalAmount - (parseFloat(initialAmount) || 0)) /
      (parseFloat(initialAmount) || 1)) *
    100
  ).toFixed(2);

  const handleMonthsChange = (value: number[]) => {
    setMonths(value);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setInitialAmount(value);
    }
  };

  return (
    <div className="h-full w-full p-4">
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full pt-12 pb-12">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold">
                Copy Trading Calculator
              </h2>
              <p className="text-sm text-gray-400">
                35% Monthly Gains (≈1% Daily)
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Final Amount</p>
              <p className="text-2xl font-bold text-green-400">
                ${finalAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="initial" className="text-white">
                Initial Investment
              </Label>
              <Input
                id="initial"
                type="text"
                inputMode="decimal"
                value={initialAmount}
                onChange={handleAmountChange}
                className="bg-black text-white border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="months-slider" className="text-gray-400">
                Number of Months
              </Label>
              <Slider
                id="months-slider"
                min={1}
                max={12}
                step={1}
                value={months}
                onValueChange={handleMonthsChange}
                className="max-w-md"
              />
            </div>
            <div>
              <p className="text-gray-400 text-2xl">Total Profit</p>
              <p className="text-xl font-semibold text-green-400">
                ${totalProfit.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-2xl">ROI</p>
              <p className="text-xl font-semibold text-green-400">{roi}%</p>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-[400px]">
            <ChartContainer
              config={{
                amount: {
                  label: "Amount",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={calculateCompounding}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis
                    dataKey="month"
                    stroke="#666"
                    tickFormatter={(value) => `Month ${value}`}
                  />
                  <YAxis
                    stroke="#666"
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    content={({ active, payload }: any) => {
                      if (active && payload && payload.length) {
                        const amount = Number(payload[0].value);
                        return (
                          <div className="bg-gray-900 border border-gray-800 p-2 rounded-lg">
                            <p className="text-gray-400">
                              Month {payload[0].payload.month}
                            </p>
                            <p className="text-green-400 font-semibold">
                              ${amount.toLocaleString()}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#4ade80"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
