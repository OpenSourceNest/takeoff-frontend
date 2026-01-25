"use client";

import Marquee from "react-fast-marquee";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SponsorsSection() {
    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Sponsors */}
                <div className="text-center mb-16">
                    <h2 className="text-white text-sm font-semibold tracking-widest uppercase mb-8">
                        Sponsors
                    </h2>

                    {/* Main Sponsor - GitHub */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <GitHubIcon className="text-white mb-2" style={{ fontSize: 80 }} />
                            <span className="text-white text-2xl font-bold">GitHub</span>
                        </div>
                    </div>
                </div>

                {/* Partners */}
                <div className="text-center">
                    <h2 className="text-white text-sm font-semibold tracking-widest uppercase mb-8">
                        Partners
                    </h2>

                    {/* Partners Marquee */}
                    <Marquee
                        gradient={false}
                        speed={40}
                        pauseOnHover={true}
                        className="py-4"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <div
                                key={item}
                                className="flex flex-col items-center mx-8"
                            >
                                <GitHubIcon className="text-white mb-2" style={{ fontSize: 48 }} />
                                <span className="text-white text-sm font-semibold">GitHub</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
