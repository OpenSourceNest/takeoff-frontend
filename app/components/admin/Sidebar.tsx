"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '../../store/useAuthStore';

export default function Sidebar() {
    const pathname = usePathname();
    const { user, logout } = useAuthStore();

    const navItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: '' },
        { name: 'Registrations', href: '/admin/registrations', icon: '' },
        { name: 'Check-in', href: '/admin/checkin', icon: '' },
        { name: 'Settings', href: '/admin/settings', icon: '' },
    ];

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    return (
        <aside className="w-64 bg-black-soft border-r border-brown-dark/20 text-white min-h-screen flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-brown-dark/20">
                <h2 className="text-2xl font-bold text-white mb-1">
                    Takeoff <span className="text-orange">Admin</span>
                </h2>
                <p className="text-sm text-white/50 mt-1">{user?.email}</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                ? 'bg-orange/10 text-orange border-l-2 border-orange'
                                : 'text-white/70 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-brown-dark/20">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-all"
                >
                    <span className="text-xl">🚪</span>
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
}
