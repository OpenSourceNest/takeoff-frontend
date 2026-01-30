"use client";

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/app/store/useAuthStore';

interface Registration {
    id: string;
    userId: string;
    eventId: string;
    status: string;
    checkedIn: boolean;
    createdAt: string;
    user?: {
        name: string;
        email: string;
    };
    event?: {
        name: string;
    };
}

export default function RegistrationsPage() {
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedQr, setSelectedQr] = useState<string | null>(null);
    const { token, hydrated } = useAuthStore();

    useEffect(() => {
        console.log("DEBUG: Registrations Page Mounted", { token: !!token, hydrated });

        if (!hydrated) return; // Wait for store to rehydrate

        if (!token) {
            console.log("DEBUG: No token found, redirecting...");
            // Optionally redirect here or show error
            setLoading(false);
            return;
        }

        const fetchRegistrations = async () => {
            console.log("DEBUG: Fetching registrations...");
            try {
                const res = await fetch('/api/events/registrations', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                console.log("DEBUG: Response status:", res.status);

                if (!res.ok) {
                    const errorText = await res.text();
                    throw new Error(`Failed to fetch: ${res.status} ${errorText}`);
                }

                const data = await res.json();
                console.log("DEBUG: Data received:", data);
                setRegistrations(data.data);
            } catch (err: any) {
                console.error("Registrations details fetch failed:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRegistrations();
    }, [token, hydrated]);

    const handleViewQR = async (id: string) => {
        try {
            const res = await fetch(`/api/events/registrations/${id}/qr`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.success && data.qrCode) {
                setSelectedQr(data.qrCode);
            } else {
                alert('Failed to generate QR Code');
            }
        } catch (err) {
            console.error(err);
            alert('Error fetching QR Code');
        }
    };

    if (loading) return <div className="p-8 text-white">Loading registrations...</div>;
    if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

    return (
        <div className="p-8 relative">
            <h1 className="text-3xl font-bold text-white mb-6">Registrations</h1>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-white/60 uppercase text-xs">
                        <tr>
                            <th className="p-4">ID</th>
                            <th className="p-4">Event</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Check-in</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-white text-sm">
                        {registrations.map((reg) => (
                            <tr key={reg.id} className="border-t border-white/5 hover:bg-white/5 transition">
                                <td className="p-4 font-mono text-white/70">{reg.id.slice(0, 8)}...</td>
                                <td className="p-4">{reg.event?.name || 'Unknown Event'}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs ${reg.status === 'CONFIRMED' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                                        }`}>
                                        {reg.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    {reg.checkedIn ? (
                                        <span className="text-green-400">✅ Checked In</span>
                                    ) : (
                                        <span className="text-white/40">Pending</span>
                                    )}
                                </td>
                                <td className="p-4">
                                    <button
                                        onClick={() => handleViewQR(reg.id)}
                                        className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-xs mr-2"
                                    >
                                        View QR
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {registrations.length === 0 && (
                    <div className="p-8 text-center text-white/40">No registrations found.</div>
                )}
            </div>

            {/* QR Modal */}
            {selectedQr && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedQr(null)}>
                    <div className="bg-white p-6 rounded-2xl text-center" onClick={e => e.stopPropagation()}>
                        <h3 className="text-black font-bold mb-4">Attendee QR Code</h3>
                        <img src={selectedQr} alt="QR Code" className="w-64 h-64 mx-auto mb-4" />
                        <button
                            onClick={() => setSelectedQr(null)}
                            className="text-gray-500 underline text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
