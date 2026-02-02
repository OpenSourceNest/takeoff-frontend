import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/AboutSection";
import ImpactSection from "@/components/landing/ImpactSection";
import AudienceSection from "@/components/landing/AudienceSection";
import SponsorsSection from "@/components/landing/SponsorsSection";
import CTASection from "@/components/landing/CTASection";


export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <AboutSection />
            <ImpactSection />
            <AudienceSection />
            <SponsorsSection />
            <CTASection />
        </div>
    );
}
