"use client";

import { DemographicsData } from '@/app/lib/analytics';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

const COLORS = ['#A9500C', '#D97706', '#EA580C', '#92400E', '#78350F'];

export default function DemographicsCharts({ data }: { data: DemographicsData | null }) {
    if (!data) return <div className="h-64 bg-white/5 rounded-2xl animate-pulse" />;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Professions Pie Chart */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Top Professions</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data.professions}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.professions.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #ffffff20',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Gender/Category Bar Chart (using Gender stats for now) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Gender Distribution</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data.genders} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={100}
                                stroke="#ffffff70"
                                fontSize={12}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #ffffff20',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                                cursor={{ fill: '#ffffff10' }}
                            />
                            <Bar dataKey="value" fill="#A9500C" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
