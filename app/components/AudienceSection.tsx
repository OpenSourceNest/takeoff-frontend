"use client";

import { Icon } from "@iconify/react";
import SectionBackground from "./ui/SectionBackground";
import { motion } from "framer-motion";

const audienceCards = [
    {
        id: 1,
        icon: "streamline-freehand:business-coaching-idea-jigsaw",
        title: "Contributors",
        description: "Developers, designers, writers, and community builders contributing across open source."
    },
    {
        id: 2,
        icon: "hugeicons:students",
        title: "Students & Starters",
        description: "Students and early-career technologists exploring open source pathways."
    },
    {
        id: 3,
        icon: "hugeicons:repair",
        title: "Maintainers",
        description: "Open-source contributors and maintainers growing sustainable projects."
    },
    {
        id: 4,
        icon: "nimbus:ecosystem",
        title: "Ecosystem Builders",
        description: "Educators, researchers, and organizations supporting open-source growth."
    }
];

export default function AudienceSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <SectionBackground className="w-full">
                <div className="max-w-6xl mx-auto py-10 px-6">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16 md:mb-24"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-semibold text-cream leading-tight mb-6">
                            Who is <span className="font-extrabold">TAKEOFF</span> for?
                        </h2>
                        <p className="text-md md:text-xl font-medium text-white leading-relaxed max-w-4xl mx-auto">
                            Bringing together contributors, learners, and ecosystem<br className="hidden md:block" />
                            builders shaping open source.
                        </p>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 justify-items-center">
                        {audienceCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className="bg-black-dark rounded-[20px] p-8 md:p-10 border-[3px] border-cream w-full max-w-[585px] min-h-[380px] flex flex-col justify-center relative overflow-hidden group hover:border-cream/80 transition-colors"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <Icon icon={card.icon} className="text-cream" style={{ fontSize: 64 }} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base md:text-lg font-medium text-white leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionBackground>
        </motion.div>
    );
}
