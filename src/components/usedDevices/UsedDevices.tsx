"use client";
import { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Desktop", value: 65, color: "#3B82F6" },
  { name: "Tablet", value: 34, color: "#6366F1" },
  { name: "Mobile", value: 45, color: "#93C5FD" },
  { name: "Unknown", value: 12, color: "#BFDBFE" },
];

export default function UsedDevices() {
  const [sortBy, setSortBy] = useState("Monthly");

  return (
    <div className="bg-base-100 rounded-2xl shadow-md p-6 w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Used Devices</h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm border border-base-300 rounded-lg px-3 py-1 bg-base-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      {/* Donut Chart */}
      <div className="w-full h-96 relative ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
          <p className="  text-sm">Visitors</p>
          <p className="text-3xl font-bold  ">167</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-sm  ">
              {item.name}
            </span>
            <span className="text-sm font-semibold  ">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
