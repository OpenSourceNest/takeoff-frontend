"use client";

import { useRef, useState } from "react";
import { Icon, IconProps } from "@iconify/react";
import SectionPill from "./ui/SectionPill";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';

const ImpactIcon = (props: Omit<IconProps, 'icon'>) => (
    <Icon
        icon="game-icons:impact-point"
        {...props}
    />
);

const impactStats = [
    {
        id: 1,
        number: "4",
        label: "Workshops Delivered",
        description: "Beginner-friendly sessions covering GitHub, code, design, and technical writing contributions.",
        variant: "default"
    },
    {
        id: 2,
        number: "580+",
        label: "Participants Reached",
        description: "New and aspiring contributors introduced to open source pathways.",
        variant: "brown"
    },
    {
        id: 3,
        number: "6",
        label: "Tech Events Engaged",
        description: "Open-source education shared through talks, panels, and community advocacy.",
        variant: "default"
    },
    {
        id: 4,
        number: "40+",
        label: "In-Person Contributors",
        description: "Hands-on participation at a milestone community Contribute-a-thon.",
        variant: "brown"
    },
    {
        id: 5,
        number: "1077",
        label: "Voice Clips Recorded",
        description: "826 clips validated to support inclusive public speech datasets.",
        variant: "default"
    }
];

export default function ImpactSection() {
    const swiperRef = useRef<SwiperType>(null);
    const [isBeginning, setIsBeginning] = useState(true);

    return (
        <motion.section
            className="bg-black py-20 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Badge */}
                <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <SectionPill
                        title="Our Impact"
                        icon={ImpactIcon}
                    />
                </motion.div>

                {/* Impact Description */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                        In its first year of independent operation, <span className="text-white font-bold">Open Source Nest</span> recorded tangible community impact across education, contribution, and ecosystem engagement.
                    </p>
                </motion.div>

                {/* Stats Carousel */}
                <motion.div
                    className="relative group px-4 md:px-0"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.realIndex === 0);
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-5!"
                    >
                        {impactStats.map((stat) => (
                            <SwiperSlide key={stat.id} className="h-auto">
                                <div
                                    className={`
                                        h-full rounded-2xl px-7 py-12 border flex flex-col items-center text-center justify-center transition-colors duration-300
                                        ${stat.variant === 'brown'
                                            ? 'bg-black-soft border-cream'
                                            : 'bg-black-charcoal border-cream'
                                        }
                                    `}
                                >
                                    {/* Number */}
                                    <div className="text-6xl font-bold text-white mb-2 tracking-tight">
                                        {stat.number}
                                    </div>

                                    {/* Label */}
                                    <div className="text-white font-bold text-lg mb-6 leading-tight">
                                        {stat.label}
                                    </div>

                                    {/* Description */}
                                    <p className={`text-sm leading-relaxed ${stat.variant === 'brown' ? 'text-white/90' : 'text-gray-400'}`}>
                                        {stat.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Mobile Navigation Buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`md:hidden flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-orange rounded-full items-center justify-center hover:bg-[#D15418]/90 transition-all shadow-lg ${isBeginning ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
                        aria-label="Previous slide"
                    >
                        <KeyboardArrowLeftIcon className="text-white" style={{ fontSize: 24 }} />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="md:hidden flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-orange rounded-full items-center justify-center hover:bg-[#D15418]/90 transition-colors shadow-lg"
                        aria-label="Next slide"
                    >
                        <KeyboardArrowRightIcon className="text-white" style={{ fontSize: 24 }} />
                    </button>

                    {/* Desktop Navigation Buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange rounded-full items-center justify-center hover:bg-[#D15418]/90 transition-all shadow-lg ${isBeginning ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
                        aria-label="Previous slide"
                    >
                        <KeyboardArrowLeftIcon className="text-white" style={{ fontSize: 32 }} />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange rounded-full items-center justify-center hover:bg-[#D15418]/90 transition-colors shadow-lg"
                        aria-label="Next slide"
                    >
                        <KeyboardArrowRightIcon className="text-white" style={{ fontSize: 32 }} />
                    </button>
                </motion.div>

                {/* Bottom Text */}
                <motion.p
                    className="text-center text-gray-400 text-sm md:text-base mt-4 font-normal"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-white font-bold">TAKEOFF 2026</span> celebrates this progress, and sets the stage for what comes next.
                </motion.p>
            </div>
        </motion.section>
    );
}
