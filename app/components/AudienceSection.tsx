import { Icon } from "@iconify/react";
import SectionBackground from "./ui/SectionBackground";

const audienceCards = [
    {
        id: 1,
        icon: "streamline-freehand:business-coaching-idea-jigsaw",
        title: "Contributors",
        description: "Developers, designers, writers, and community builders contributing across open source."
    },
    {
        id: 2,
        icon: "hugeicons:students",
        title: "Students & Starters",
        description: "Students and early-career technologists exploring open source pathways."
    },
    {
        id: 3,
        icon: "hugeicons:repair",
        title: "Maintainers",
        description: "Open-source contributors and maintainers growing sustainable projects."
    },
    {
        id: 4,
        icon: "nimbus:ecosystem",
        title: "Ecosystem Builders",
        description: "Educators, researchers, and organizations supporting open-source growth."
    }
];

export default function AudienceSection() {
    return (
        <SectionBackground className="py-20 md:py-32 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-2xl md:text-4xl font-semibold text-cream leading-tight mb-6">
                        Who is <span className="font-extrabold">TAKEOFF</span> for?
                    </h2>
                    <p className="text-md md:text-xl font-medium text-white leading-relaxed max-w-4xl mx-auto">
                        Bringing together contributors, learners, and ecosystem<br className="hidden md:block" />
                        builders shaping open source.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 justify-items-center">
                    {audienceCards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-black-dark rounded-[20px] p-8 md:p-10 border-[3px] border-cream w-full max-w-[585px] min-h-[380px] flex flex-col justify-center relative overflow-hidden group hover:border-cream/80 transition-colors"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <Icon icon={card.icon} className="text-cream" style={{ fontSize: 64 }} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base md:text-lg font-medium text-white leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionBackground>
    );
}
