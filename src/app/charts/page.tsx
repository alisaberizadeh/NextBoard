/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";
import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    AreaChart,
    Area,
    ComposedChart,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    RadialBarChart,
    RadialBar,
    ScatterChart,
    Scatter
} from "recharts";

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

const radarData = data.map(item => ({
    subject: item.name,
    received: item.received,
    due: item.due,
}));

const radialBarData = [
    { name: "Received", value: data.reduce((sum, d) => sum + d.received, 0), fill: "#f97316" },
    { name: "Due", value: data.reduce((sum, d) => sum + d.due, 0), fill: "#3b82f6" },
];


export default function Page() {
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Dashboard</Link></li>
                    <li><Link href="">Charts</Link></li>
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-5">

                <div className="bg-base-100 col-span-2 lg:col-span-1 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Line Chart</h2>
                    <div className="w-full h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} margin={{ left: 0, right: 0 } as any}>
                                <XAxis axisLine={false} tickLine={false} dataKey="name" padding={{ left: 0, right: 20 }} />
                                <YAxis axisLine={false} tickLine={false} padding={{ top: 10, bottom: 10 }} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="received" stroke="#3b82f6" strokeWidth={3} />
                                <Line type="monotone" dataKey="due" stroke="#f97316" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-base-100 col-span-2 lg:col-span-1 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Bar Chart</h2>
                    <div className="w-full h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ left: 0, right: 0 } as any}>
                                <XAxis axisLine={false} tickLine={false} dataKey="name" padding={{ left: 0, right: 20 }} />
                                <YAxis axisLine={false} tickLine={false} padding={{ top: 10, bottom: 0 }} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="received" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
                                <Bar dataKey="due" fill="#ec4899" radius={[10, 10, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-base-100 col-span-2 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Area Chart</h2>
                    <div className="w-full h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ left: 0, right: 0 } as any}>
                                <defs>
                                    <linearGradient id="gradReceived" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="gradDue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis axisLine={false} tickLine={false} dataKey="name" padding={{ left: 0, right: 20 }} />
                                <YAxis axisLine={false} tickLine={false} padding={{ top: 10, bottom: 10 }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="received" stroke="#10b981" fill="url(#gradReceived)" strokeWidth={3} />
                                <Area type="monotone" dataKey="due" stroke="#f59e0b" fill="url(#gradDue)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>




                <div className="bg-base-100 col-span-2 lg:col-span-1 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Composed Chart</h2>
                    <div className="w-full h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={data} margin={{ left: 0, right: 0 } as any}>
                                <XAxis axisLine={false} tickLine={false} dataKey="name" padding={{ left: 0, right: 20 }} />
                                <YAxis axisLine={false} tickLine={false} padding={{ top: 10, bottom: 0 }} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="received" barSize={20} fill="#1e40af" radius={[10, 10, 0, 0]} />
                                <Line type="monotone" dataKey="due" stroke="#f97316" strokeWidth={3} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-base-100 col-span-2 lg:col-span-1 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Radar Chart</h2>
                    <div className="w-full h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Received" dataKey="received" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                                <Radar name="Due" dataKey="due" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                                <Legend />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-base-100 col-span-2 lg:col-span-1 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Radial Bar Chart</h2>
                    <div className="w-full h-96 flex justify-center items-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart
                                innerRadius="10%"
                                outerRadius="80%"
                                data={radialBarData}
                                startAngle={180}
                                endAngle={0}
                            >
                                <RadialBar dataKey="value" fill="#3b82f6" />
                                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                                <Tooltip />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>


                <div className="bg-base-100 col-span-2 lg:col-span-1 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Scatter Chart</h2>
                    <div className="w-full h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart margin={{ left: 0, right: 0 } as any}>
                                <XAxis
                                    type="category"
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#9ca3af" }}
                                    padding={{ left: 20, right: 20 }}
                                />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af" }} type="number" dataKey="received" />

                                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                                <Scatter name="Received" data={data} fill="#f97316" />
                                <Scatter name="Due" data={data} fill="#3b82f6" />
                                <Legend />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
};

