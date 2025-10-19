"use client";

import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { useState } from "react";

const data = [
  { name: "Sep", received: 10, due: 15 },
  { name: "Oct", received: 20, due: 30 },
  { name: "Nov", received: 36, due: 40 },
  { name: "Dec", received: 25, due: 35 },
  { name: "Jan", received: 75, due: 34 },
  { name: "Feb", received: 65, due: 50 },
  { name: "Mar", received: 34, due: 60 },
  { name: "Apr", received: 66, due: 75 },
  { name: "May", received: 70, due: 43 },
  { name: "Jun", received: 85, due: 60 },
  { name: "Jul", received: 75, due: 65 },
  { name: "Aug", received: 60, due: 70 },
];

export default function PaymentsOverview() {
  const [sortBy, setSortBy] = useState("Monthly");

  return (
    <div className="bg-base-100 rounded-2xl shadow-md p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Payments Overview</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm">SHORT BY:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-base-300 rounded-lg px-3 py-1 bg-base-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
          >
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 0, bottom: 20, left: 0 }}>
            <defs>
              <linearGradient id="colorReceived" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff2600" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ff26008c" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af" }}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af" }} />
            <Tooltip cursor={true} />
            <Area
              type="monotone"
              dataKey="due"
              stroke="#ff2600"
              fillOpacity={1}
              fill="url(#colorDue)"
              strokeWidth={5}
            />
            <Area
              type="monotone"
              dataKey="received"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorReceived)"
              strokeWidth={5}
            />
          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}
