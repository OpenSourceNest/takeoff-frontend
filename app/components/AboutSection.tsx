"use client";

import { Icon, IconProps } from '@iconify/react';
import SectionPill from "./ui/SectionPill";
import { motion } from "framer-motion";

const RocketIcon = (props: Omit<IconProps, 'icon'>) => (
    <Icon
        icon="material-symbols-light:rocket-outline-rounded"
        {...props}
    />
);

export default function AboutSection() {
    return (
        <motion.section
            id="about"
            className="bg-black mt-10 pt-8 pb-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                {/* Section Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <SectionPill
                        title="About TAKEOFF"
                        icon={RocketIcon}
                        className="mb-8 sm:mb-10"
                    />
                </motion.div>

                {/* Main Description */}
                <motion.div
                    className="space-y-6 sm:space-y-7 text-white leading-[1.8] text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-tight text-justify"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p>
                        <span className="font-bold">TAKEOFF</span> is Open Source Nest&apos;s flagship annual event;
                        a milestone that brings the community together to reflect on impact, spotlight contributors,
                        and set the direction for the year ahead in open source. Open source powers critical
                        global digital infrastructure, yet meaningful participation remains out of reach for many.{" "}
                        <span className="font-bold">TAKEOFF</span> exists to change that narrative by centering
                        people, their learning journeys, contributions, and growth.
                    </p>
                    <p>
                        Through shared stories, real projects, and community connection,{" "}
                        <span className="font-bold">TAKEOFF</span> reinforces a simple truth: sustainable
                        open source ecosystems are built when emerging talent is intentionally
                        supported, celebrated, and connected to opportunity.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
