"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const dropdownOptions = [
    { label: "Attendee", href: "/register" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Sponsorship", href: "mailto:info@opensourcenest.org" },
    { label: "Partnership", href: "mailto:info@opensourcenest.org" },
];

export default function Hero() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col relative z-10">

            {/* Hero Body */}
            <div className="relative flex-1 w-full flex flex-col items-center justify-start md:justify-center pt-36 md:pt-32">
                {/* A. Headline Area */}
                <motion.div
                    className="w-full relative z-20 px-4 sm:px-6 text-center mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto tracking-tight">
                        A Year Of <span className="text-highlight-orange">Contribution.</span>
                        <br />
                        A <span className="text-highlight-orange">Launch</span> Into What&apos;s Next.
                    </h2>
                </motion.div>

                {/* B. Content Area */}
                <motion.div
                    className="relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 opacity-90">
                        TAKEOFF is Open Source Nest&apos;s flagship annual event; celebrating real
                        community impact, spotlighting emerging contributors, and setting the
                        direction for the year ahead in open source.
                    </p>

                    {/* Get Involved Dropdown */}
                    <div className="relative z-50" ref={dropdownRef}>
                        <Button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            icon={KeyboardArrowDownIcon}
                            rounded="20px"
                            className="px-8 py-3 text-sm"
                            isActive={isDropdownOpen}
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="menu"
                            aria-label="Get involved options"
                        >
                            Get Involved
                        </Button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black-soft rounded-2xl py-2 shadow-2xl border border-brown-dark/20 z-100 overflow-hidden"
                                    role="menu"
                                    aria-label="Get involved menu"
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    {dropdownOptions.map((option, index) => {
                                        const isExternal = option.href.startsWith('http');

                                        return (
                                            <motion.div
                                                key={option.label}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={option.href}
                                                    target={isExternal ? "_blank" : undefined}
                                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                                    className="block px-6 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-orange transition-colors text-center border-b border-white/5 last:border-0"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    role="menuitem"
                                                >
                                                    {option.label}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Flagship Event Badge */}
                    <motion.div
                        className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-light italic"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <span>A flagship event by</span>
                        <Link
                            href="https://opensourcenest.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:opacity-100 transition-opacity"
                        >
                            <Image
                                src="/osn.png"
                                alt="OpenSourceNest"
                                width={120}
                                height={24}
                                className="h-7 w-auto"
                            />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black via-transparent to-black z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <Image
                            src="/rocket_white.png"
                            alt="Rocket Background"
                            fill
                            className="object-contain object-bottom translate-y-20 lg:translate-y-32 scale-110 lg:scale-100"
                            priority
                        />
                    </motion.div>
                </div> */}
            </div>
        </section>
    );
}