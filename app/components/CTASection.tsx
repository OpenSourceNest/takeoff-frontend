import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="bg-brown-dark py-12 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Rocket Image */}
                <div className="shrink-0 w-40 h-40 relative">
                    <Image
                        src="/1d9cd16876d6ff64120bd449f8e5e82f75bc9eb1.png"
                        alt="Rocket"
                        width={160}
                        height={160}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* CTA Content */}
                <div className="text-center md:text-left flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Ready to <span className="text-highlight-orange">TAKEOFF</span>?
                    </h2>
                    <p className="text-cream/80 text-sm mb-6">
                        Be part of the moment that closes one chapter, and<br />
                        launches the next.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 justify-center md:justify-start">
                        <Link
                            href="#register"
                            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
                        >
                            Register
                        </Link>
                        <Link
                            href="#volunteer"
                            className="bg-transparent border border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                        >
                            Volunteer
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
