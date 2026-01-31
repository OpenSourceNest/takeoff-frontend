"use client"
import Sidebar from '../components/admin/Sidebar';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct router import for Next 13+ App Dir
import { useAuthStore } from '@/app/store/useAuthStore'; // Correct import path

export default function AdminLayout({ children }: { children: ReactNode }) {
    const { checkSession, isAuthenticated, hydrated } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (hydrated) {
            checkSession(); // Check and Refresh Token
        }
    }, [hydrated, checkSession]);

    useEffect(() => {
        if (hydrated && !isAuthenticated) {
            router.push('/login');
        }
    }, [hydrated, isAuthenticated, router]);

    if (!hydrated) {
        return null; // Or a loading spinner
    }

    return (
        <div className="flex min-h-screen bg-black">
            <Sidebar />
            <main className="flex-1 overflow-auto bg-black pt-24">
                {children}
            </main>
        </div>
    );
}
