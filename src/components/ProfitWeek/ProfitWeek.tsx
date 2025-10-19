"use client";

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function WeeklyStackedBarChart() {
    const [sortBy, setSortBy] = useState("This Week");
    const data = [
        { day: 'S', sales: 4000, revenue: 2400 },
        { day: 'S', sales: 3000, revenue: 1398 },
        { day: 'M', sales: 2000, revenue: 980 },
        { day: 'T', sales: 2780, revenue: 3908 },
        { day: 'W', sales: 1890, revenue: 4800 },
        { day: 'T', sales: 2390, revenue: 3800 },
        { day: 'F', sales: 3490, revenue: 4300 },
    ];


    return (
        <div className="bg-base-100 rounded-2xl shadow-md p-6 w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold"> Weekly Profit</h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm">SHORT BY:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="text-sm border border-base-300 rounded-lg px-3 py-1 bg-base-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    >
                        <option>This Week</option>
                        <option>Last Week</option>
                    </select>
                </div>
            </div>

            {/* Chart */}
            <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid stroke="#e5e5e5b5" />
                        <XAxis axisLine={false} tickLine={false} dataKey="day" padding={{ left: 20, right: 20 }} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip cursor={false} />
                        <Legend />
                        {/* Set a smaller bar size */}
                        <Bar dataKey="sales" stackId="a" fill="#00BFFF" name="Sales" barSize={20} />
                        <Bar dataKey="revenue" stackId="a" fill="#7B68EE" name="Revenue" barSize={20} />
                    </BarChart>

                </ResponsiveContainer>

            </div>


        </div>
    )
}

