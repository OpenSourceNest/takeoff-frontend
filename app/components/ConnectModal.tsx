"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';
import { Icon } from '@iconify/react';
import { useModalStore } from '../store/useModalStore';

const ConnectModal: React.FC = () => {
    const { isConnectModalOpen, closeConnectModal } = useModalStore();

    if (!isConnectModalOpen) return null;

    const hashtags = ["#TAKEOFF2026", "#OSN", "#OSNCAMPAIGN25", "#TAKEOFFBYOSN"];

    // Function to get staggered text for each row
    const getRowText = (index: number) => {
        const staggered = [...hashtags];
        // Shift array elements based on row index
        for (let i = 0; i < index % staggered.length; i++) {
            const first = staggered.shift();
            if (first) staggered.push(first);
        }
        return staggered.join(' ') + ' ';
    };

    const connectOptions = [
        {
            icon: "mdi:register",
            label: "Register",
            href: "/register"
        },
        {
            icon: "material-symbols:volunteer-activism",
            label: "Volunteer",
            href: "/volunteer"
        },
        {
            icon: "mdi:partnership",
            label: "Partner/\nSupport",
            href: "mailto:info@opensourcenest.org"
        },
        {
            icon: "fluent:people-community-12-filled",
            label: "Join OSN",
            href: "https://bit.ly/osn-whatsapp"
        }
    ];

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={closeConnectModal}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl bg-brown-dark rounded-[40px] overflow-hidden shadow-2xl border border-white/5 min-h-[500px] flex flex-col items-center justify-center p-8 md:p-16 animate-in zoom-in-95 fade-in duration-300">

                {/* Marquee Background Layers */}
                <div className="absolute inset-0 z-0 flex flex-col justify-around py-4 pointer-events-none opacity-40">
                    {[0, 1, 2, 3, 4, 5].map((row) => (
                        <Marquee
                            key={row}
                            gradient={false}
                            speed={15 + row * 5}
                            direction={row % 2 === 0 ? 'right' : 'left'}
                            className="overflow-hidden"
                        >
                            <span className="text-xl md:text-2xl text-black-shadow tracking-[30] whitespace-nowrap uppercase">
                                {Array(5).fill(getRowText(row)).join(" ")}
                                <Icon icon="material-symbols:rocket-outline-rounded" className="inline mx-8 text-white/20" />
                            </span>
                        </Marquee>
                    ))}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full flex flex-col items-center text-center">
                    {/* Close Button */}
                    <button
                        onClick={closeConnectModal}
                        className="absolute -top-4 -right-4 md:-top-10 md:-right-10 text-white/60 hover:text-white transition-colors p-2"
                        aria-label="Close modal"
                    >
                        <Icon icon="heroicons:x-mark" className="w-8 h-8" />
                    </button>

                    <h2 className="text-4xl md:text-6xl font-bold text-cream-light mb-6 tracking-tight">
                        Connect With Us
                    </h2>

                    <p className="text-white/80 text-base md:text-lg max-w-xl mb-12 leading-relaxed font-medium">
                        TAKEOFF is powered by <span className="font-bold text-white">Open Source Nest</span>. Choose how you&apos;d like to connect, collaborate, or participate even beyond the event.
                    </p>

                    {/* Action Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl">
                        {connectOptions.map((opt, idx) => (
                            <a
                                key={idx}
                                href={opt.href}
                                target={opt.href.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                onClick={() => {
                                    if (!opt.href.startsWith('http') && !opt.href.startsWith('mailto')) {
                                        closeConnectModal();
                                    }
                                }}
                                className="group bg-cream-light hover:bg-[#FDF9F3] transition-all duration-300 rounded-[20px] p-4 flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-105"
                            >
                                <Icon
                                    icon={opt.icon}
                                    className="w-10 h-10 md:w-12 md:h-12 text-brown-dark group-hover:text-orange transition-colors"
                                />
                                <span className="text-brown-dark font-semibold text-sm md:text-base leading-normal whitespace-pre-line text-center">
                                    {opt.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectModal;
