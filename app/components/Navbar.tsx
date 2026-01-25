"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useModalStore } from '@/app/store/useModalStore';
import Button from '../components/ui/Button';

function Navbar() {
    const { openConnectModal } = useModalStore();

    return (
        <div>
            {/* Header Area - Floating Pill */}
            <header className="fixed top-8 w-full z-50 px-6">
                <nav className="max-w-6xl mx-auto bg-brown-dark backdrop-blur-md rounded-full px-6 py-3 md:px-15 md:py-4 flex items-center justify-between transition-all relative">
                    {/* Logo - Left */}
                    <Link href="/" className="shrink-0">
                        <Image
                            src="/Logo.png"
                            alt="TAKEOFF Logo"
                            width={110}
                            height={34}
                            className="h-8 md:h-10 w-auto"
                        />
                    </Link>

                    {/* Navigation - Right */}
                    <div className="flex items-center gap-4 md:gap-8">
                        <div className="flex items-center gap-4 md:gap-8">
                            <button
                                onClick={openConnectModal}
                                className="text-white hover:text-orange text-sm md:text-md font-medium transition-colors cursor-pointer"
                            >
                                Connect
                            </button>
                            <Link href="/volunteer" className="text-white hover:text-orange text-sm md:text-md font-medium transition-colors">
                                Volunteer
                            </Link>
                        </div>
                        <Link href="/register">
                            <Button variant="outline" className="text-md px-5 py-2">
                                Register
                            </Button>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;