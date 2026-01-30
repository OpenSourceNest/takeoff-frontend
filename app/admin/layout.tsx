import Sidebar from '../components/admin/Sidebar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-black">
            <Sidebar />
            <main className="flex-1 overflow-auto bg-black pt-24">
                {children}
            </main>
        </div>
    );
}
