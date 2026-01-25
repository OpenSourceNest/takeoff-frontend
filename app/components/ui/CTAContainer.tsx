import React from 'react';
import Image from 'next/image';

interface CTAContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function CTAContainer({ children, className = "" }: CTAContainerProps) {
    return (
        <div className={`relative bg-black-soft overflow-hidden flex items-center justify-center px-6 py-12 md:py-0 ${className}`}>

            {/* Rocket Asset - Left Bottom */}
            <div className="absolute 
                left-1 top-[180px] w-[80px] h-[72px] opacity-30
                md:left-3 md:top-[150px] md:w-[120px] md:h-[124px] md:opacity-40
                lg:left-6 lg:top-[120px] lg:w-[200px] lg:h-[206px] lg:opacity-50 
                rotate-[7.74deg] pointer-events-none z-0">
                <Image
                    src="/rocket.png"
                    alt="Rocket"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Cloud Asset - Right Top */}
            <div className="absolute 
                right-[-100px] top-[-100px] w-[200px] h-[216px] opacity-30
                md:right-[-150px] md:top-[-150px] md:w-[320px] md:h-[344px] md:opacity-40
                lg:right-[-189px] lg:top-[-174px] lg:w-[450px] lg:h-[484px] lg:opacity-50 
                pointer-events-none z-0">
                <Image
                    src="/cloud.png"
                    alt="Cloud"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}
