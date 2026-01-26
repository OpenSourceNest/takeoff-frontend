"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-[60vh] py-32 bg-black-soft text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto opacity-20 transform z-0">
                    <Image
                        src="/rocket_white.png"
                        alt="Background Cloud"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
                <h1 className="text-9xl font-bold text-white/5 mb-4 select-none">404</h1>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Lost in <span className="text-orange">Space?</span>
                </h2>
                <p className="text-lg text-white/60 mb-10 max-w-md mx-auto">
                    The page you are looking for seems to have drifted away into the void.
                    Let&apos;s get you back on course.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer text-sm bg-orange text-white hover:bg-orange/90 border border-orange"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
