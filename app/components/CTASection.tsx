import Link from "next/link";
import CTAContainer from "./ui/CTAContainer";
import Button from "./ui/Button";

export default function CTASection() {
    return (
        <section className="bg-black py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <CTAContainer className="rounded-[30px]">
                    <div className="text-center flex flex-col items-center py-12">
                        {/* Headline */}
                        <h2 className="text-3xl mb-3 font-bold text-white leading-tight">
                            Ready to <span className="text-highlight-orange">TAKEOFF?</span>
                        </h2>

                        {/* Subheadline */}
                        <p className="text-xl text-white mb-10 max-w-md leading-normal">
                            Be part of the moment that closes one chapter, and launches the next.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-row gap-6">
                            <Link href="/register">
                                <Button
                                    rounded="20px"
                                    className="bg-brown-medium text-brown-dark text-bold text-xl font-medium hover:opacity-90 transition-all text-center"
                                >
                                    Register
                                </Button>
                            </Link>
                            <Link
                                href="https://forms.gle/takeoff2026-volunteer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    rounded="20px"
                                    className="bg-brown-medium text-brown-dark text-bold text-xl font-medium hover:bg-brown-dark transition-all text-center"
                                >
                                    Volunteer
                                </Button>
                            </Link>
                        </div>
                    </div>
                </CTAContainer>
            </div>
        </section>
    );
}
