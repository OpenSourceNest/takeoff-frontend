"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function SponsorsSection() {
    return (
        <motion.section
            className="bg-black py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="w-full mx-auto">
                {/* Sponsors */}
                <motion.div
                    className="text-center mb-30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white text-4xl font-semibold tracking-widest uppercase mb-10">
                        Sponsors
                    </h2>

                    {/* Main Sponsor - GitHub */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/Github_logo.png"
                                alt="GitHub Logo"
                                width={250}
                                height={250}
                                className="h-auto object-contain"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Partners */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white text-4xl font-semibold tracking-widest uppercase mb-10">
                        Partners
                    </h2>

                    {/* Partners Marquee */}
                    <Marquee
                        gradient={false}
                        speed={40}
                        pauseOnHover={true}
                        className="py-4"
                    >
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="flex flex-col items-center mx-12"
                            >
                                <Image
                                    src="/Github_logo.png"
                                    alt="GitHub Logo"
                                    width={200}
                                    height={200}
                                    className="h-auto object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </motion.div>
            </div>
        </motion.section>
    );
}
