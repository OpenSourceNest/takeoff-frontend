"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "./ui/Button";

const dropdownOptions = [
    { label: "Attendee", href: "/attendee" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Sponsorship", href: "/sponsorship" },
    { label: "Partnership", href: "/partnership" },
];

export default function Hero() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <section className="min-h-screen flex flex-col relative z-10">

            {/* Hero Body */}
            <div className="relative flex-1 w-full flex flex-col items-center justify-center pt-32 lg:pt-40">
                {/* A. Headline Area */}
                <div className="w-full relative z-20 px-6 text-center mb-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto tracking-tight">
                        A Year Of <span className="text-highlight-orange">Contribution.</span>
                        <br />
                        A <span className="text-highlight-orange">Launch</span> Into What&apos;s Next.
                    </h2>
                </div>

                {/* B. Content Area */}
                <div className="relative z-30 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                    <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 opacity-90">
                        TAKEOFF is Open Source Nest&apos;s flagship annual event; celebrating real
                        community impact, spotlighting emerging contributors, and setting the
                        direction for the year ahead in open source.
                    </p>

                    {/* Get Involved Dropdown */}
                    <div className="relative z-50">
                        <Button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            icon={KeyboardArrowDownIcon}
                            className="px-8 py-3 text-sm"
                            isActive={isDropdownOpen}
                        >
                            Get Involved
                        </Button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black-soft rounded-2xl py-2 shadow-2xl border border-brown-dark/20 z-100 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                                {dropdownOptions.map((option) => (
                                    <Link
                                        key={option.label}
                                        href={option.href}
                                        className="block px-6 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-orange transition-colors text-center border-b border-white/5 last:border-0"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {option.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Flagship Event Badge */}
                    <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-light italic">
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
                    </div>
                </div>

                {/* Rocket Background (Mountains) */}

                <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black via-transparent to-black z-10">
                    <Image
                        src="/rocket_white.png"
                        alt="Rocket Background"
                        fill
                        className="object-contain object-bottom opacity-40 translate-y-20 lg:translate-y-32 scale-110 lg:scale-100"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}