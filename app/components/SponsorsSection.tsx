"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SponsorsSection() {
    return (
        <section className="bg-black py-20 px-6">
            <div className="w-full mx-auto">
                {/* Sponsors */}
                <div className="text-center mb-16">
                    <h2 className="text-white text-2xl font-semibold tracking-widest uppercase mb-8">
                        Sponsors
                    </h2>

                    {/* Main Sponsor - GitHub */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/Github_logo.png"
                                alt="GitHub Logo"
                                width={200}
                                height={80}
                                className="h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Partners */}
                <div className="text-center">
                    <h2 className="text-white text-2xl font-semibold tracking-widest uppercase mb-8">
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
                                    width={150}
                                    height={80}
                                    className="h-auto object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
