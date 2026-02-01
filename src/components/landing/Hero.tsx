"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "@/components/ui/Button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";

const dropdownOptions = [
    { label: "Attendee", href: "/register" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Sponsorship", href: "mailto:info@opensourcenest.org" },
    { label: "Partnership", href: "mailto:info@opensourcenest.org" },
];

export default function Hero() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

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
        <section className="relative min-h-screen flex flex-col bg-black overflow-hidden z-10">
            {/* Background Ambient Motion Images (Absolute Layer) */}
            <div className="absolute inset-x-0 bottom-0 w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] pointer-events-none overflow-hidden z-0 lg:translate-y-20 xl:translate-y-32">
                {/* Rocket Image 2 (Back Layer) */}
                <motion.div
                    className="absolute inset-0 flex items-end"
                    animate={shouldReduceMotion ? {} : {
                        y: [-20, 20],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/rocket_img2.png"
                            alt=""
                            fill
                            className="object-cover object-bottom opacity-40"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Rocket Image 1 (Front Layer) */}
                <motion.div
                    className="absolute inset-0 flex items-end"
                    animate={shouldReduceMotion ? {} : {
                        y: [-45, 45],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/rocket_img1.png"
                            alt=""
                            fill
                            className="object-cover object-bottom"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Bottom Overlay to blend with next section */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black via-black/50 to-transparent z-10" />
            </div>

            {/* Hero Content Body (On Top) */}
            <div className="relative flex-1 w-full flex flex-col items-center justify-center px-4 sm:px-6 z-20 pt-36 md:pt-32 pb-24 sm:pb-32">
                {/* A. Headline Area */}
                <motion.div
                    className="w-full text-center mb-6 sm:mb-8"
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
                    className="w-full max-w-4xl mx-auto text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 opacity-90 shadow-black/50 drop-shadow-sm">
                        TAKEOFF is Open Source Nest&apos;s flagship annual event; celebrating real
                        community impact, spotlighting emerging contributors, and setting the
                        direction for the year ahead in open source.
                    </p>

                    {/* Get Involved Dropdown */}
                    <div className="relative z-50 mb-5" ref={dropdownRef}>
                        <Button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            icon={KeyboardArrowDownIcon}
                            rounded="20px"
                            className="px-8 py-3 text-sm shadow-xl"
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
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black-soft/95 backdrop-blur-sm rounded-2xl py-2 shadow-2xl border border-brown-dark/20 z-100 overflow-hidden"
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

                    {/* Event Details Addition */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-3 bg-[#984A0FB2]/50 border border-brown-dark/30 rounded-[20px] text-xs sm:text-sm font-medium text-white/90"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-2">
                            <Icon icon="tabler:calendar-event" className="w-5 h-5 text-white/90" />
                            <span>Saturday, 7th February, 2026</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-white/10" />
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Princess+Alexandria+Auditorium,+UNN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-orange transition-colors group cursor-pointer"
                        >
                            <Icon icon="tabler:map-pin" className="w-5 h-5 text-white/90 group-hover:text-orange transition-colors animate-pulse" />
                            <span className="underline decoration-white/30 underline-offset-4 group-hover:decoration-orange">Princess Alexandria Auditorium, UNN</span>
                        </a>
                    </motion.div>

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
            </div>
        </section>
    );
}
