"use client";

import { Icon, IconProps } from '@iconify/react';
import SectionPill from "./ui/SectionPill";

const RocketIcon = (props: Omit<IconProps, 'icon'>) => (
    <Icon
        icon="material-symbols-light:rocket-outline-rounded"
        {...props}
    />
);

export default function AboutSection() {
    return (
        <section id="about" className="bg-black py-24 px-6 md:py-32">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                {/* Section Pill */}
                <SectionPill
                    title="About TAKEOFF"
                    icon={RocketIcon}
                    className="mb-10"
                />

                {/* Main Description */}
                <div className="space-y-7 text-white leading-[1.8] text-base md:text-lg lg:text-xl font-normal tracking-tight text-justify">
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
                </div>
            </div>
        </section>
    );
}
