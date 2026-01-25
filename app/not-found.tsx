"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/ui/Button";
import { RocketLaunch, Explore, Home, HelpOutline } from "@mui/icons-material";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black-soft flex flex-col font-sans text-white">
            <Navbar />

            <main className="flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    {/* Floating Icons */}
                    <div className="absolute top-1/4 left-[15%] text-orange/10 animate-pulse rotate-12">
                        <RocketLaunch sx={{ fontSize: 120 }} />
                    </div>
                    <div className="absolute bottom-1/4 right-[10%] text-blue-500/10 animate-bounce">
                        <Explore sx={{ fontSize: 100 }} />
                    </div>
                    <div className="absolute top-2/3 left-[20%] text-white/5 animate-pulse -rotate-12">
                        <HelpOutline sx={{ fontSize: 80 }} />
                    </div>

                    {/* Glows */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="mb-4 flex justify-center items-center gap-4">
                        <RocketLaunch className="text-orange text-6xl animate-bounce" />
                        <h1 className="text-9xl font-bold text-white/5 select-none leading-none">404</h1>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Lost in <span className="text-orange">Space?</span>
                    </h2>
                    <p className="text-lg text-white/60 mb-10 max-w-md mx-auto">
                        The page you are looking for seems to have drifted away into the void.
                        Let&apos;s get you back on course.
                    </p>

                    <Link href="/">
                        <Button variant="accent" className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
                            <Home />
                            Return to Home
                        </Button>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
