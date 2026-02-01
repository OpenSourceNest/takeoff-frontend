"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Button from '@/components/ui/Button';
import { useModalStore } from '@/store/useModalStore';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { openConnectModal } = useModalStore();
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    return (
        <div ref={navRef}>
            {/* Header Area - Floating Pill */}
            <header className="fixed top-8 w-full z-50 px-6">
                <nav className="max-w-6xl mx-auto bg-brown-dark backdrop-blur-md rounded-full px-6 py-3 md:px-15 md:py-4 flex items-center justify-between transition-all relative">
                    {/* Logo - Left */}
                    <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/Logo.png"
                            alt="TAKEOFF Logo"
                            width={110}
                            height={34}
                            loading="eager"
                            className="h-8 md:h-10 w-auto"
                            style={{ width: 'auto' }}
                        />
                    </Link>

                    {/* Desktop Navigation - Right */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-8">
                            <button
                                onClick={openConnectModal}
                                className="text-white hover:text-orange text-md font-medium transition-colors cursor-pointer"
                            >
                                Connect
                            </button>
                            <Link
                                href="/volunteer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-orange text-md font-medium transition-colors"
                            >
                                Volunteer
                            </Link>
                        </div>
                        <Link href="/register">
                            <Button variant="outline" className="text-md px-5 py-2">
                                Register
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <Icon
                            icon={isOpen ? "heroicons:x-mark" : "heroicons:bars-3"}
                            className="w-8 h-8"
                        />
                    </button>

                    {/* Mobile Navigation Dropdown */}
                    {isOpen && (
                        <div className="absolute top-full left-0 w-full mt-4 bg-brown-dark backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-6 md:hidden border border-white/5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    openConnectModal();
                                }}
                                className="text-white text-lg font-medium hover:text-orange text-left"
                            >
                                Connect
                            </button>
                            <Link
                                href="https://forms.gle/takeoff2026-volunteer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-lg font-medium hover:text-orange"
                                onClick={() => setIsOpen(false)}
                            >
                                Volunteer
                            </Link>
                            <Link href="/register" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" className="w-full text-lg py-3">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
