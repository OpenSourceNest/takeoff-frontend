"use client";

import { RegistrationStats } from '@/app/lib/analytics';

export default function RegistrationOverview({ stats }: { stats: RegistrationStats | null }) {
    if (!stats) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-32 bg-white/5 rounded-2xl"></div>
                ))}
            </div>
        );
    }

    const items = [
        {
            label: "Total Registrations",
            value: stats.totalRegistrations,
            subtext: `${stats.recentRegistrations} in last 24h`,
            color: "text-white"
        },
        {
            label: "Capacity Filled",
            value: `${stats.percentageFilled}%`,
            subtext: `${stats.remainingSpots} spots remaining`,
            color: "text-orange"
        },
        {
            label: "Target Capacity",
            value: stats.targetCapacity,
            subtext: "Goal for this event",
            color: "text-white/70"
        },
        {
            label: "Growth Rate",
            value: stats.recentRegistrations > 0 ? `+${stats.recentRegistrations}` : "0",
            subtext: "New attendees today",
            color: "text-green-400"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-white/60 text-sm font-medium mb-2">{item.label}</h3>
                    <div className={`text-3xl font-bold ${item.color} mb-1`}>{item.value}</div>
                    <div className="text-white/40 text-xs">{item.subtext}</div>
                </div>
            ))}
        </div>
    );
}
