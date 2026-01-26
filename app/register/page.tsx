import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Icon } from '@iconify/react';
import CTAContainer from '../components/ui/CTAContainer';


export default function RegisterPage() {
    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-start bg-transparent py-10 pt-32'>
            {/* Header Section */}
            <div className="mb-12 w-full mx-auto px-6">
                <CTAContainer className="rounded-[40px] shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 md:py-24 flex flex-col items-center text-center">

                        {/* Headline */}
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Register for <span className="text-highlight-orange">TAKEOFF 2026</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-md md:text-xl font-medium text-white/80 max-w-2xl px-4">
                            Secure your spot and be part of the experience.
                        </p>
                    </div>
                </CTAContainer>

                {/* Info Bar - Outside Banner */}
                <div className="w-full border-b border-white/10 px-6 py-6 md:py-5 flex flex-col md:flex-row items-center justify-between gap-y-4 text-sm md:text-base text-gray-300 relative z-20">
                    <div className="flex items-center gap-3">
                        <Icon icon="tabler:calendar-event" className="w-5 h-5 text-highlight-orange" />
                        <span className="font-medium">Saturday, 7th February, 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Icon icon="tabler:clock" className="w-5 h-5 text-highlight-orange" />
                        <span className="font-medium">9:00 AM - 5:00 PM GMT +1</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Icon icon="tabler:map-pin" className="w-5 h-5 text-highlight-orange" />
                        <span className="font-medium text-center md:text-left">Roar Hub UNN Enugu State, Nigeria</span>
                    </div>
                </div>
            </div>

            <RegisterForm />
        </div>
    );
}