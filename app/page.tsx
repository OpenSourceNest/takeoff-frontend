import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ImpactSection from "./components/ImpactSection";
import AudienceSection from "./components/AudienceSection";
import SponsorsSection from "./components/SponsorsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";


export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <AboutSection />
            <ImpactSection />
            <AudienceSection />
            <SponsorsSection />
            <CTASection />
            {/* Footer is now in layout */}
        </div>
    );
}
