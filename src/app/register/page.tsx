"use client";

import React from "react";
import RegisterForm from "@/components/features/RegisterForm";
import { Icon } from "@iconify/react";
import CTAContainer from "@/components/ui/CTAContainer";
import { usePageTracking } from "@/hooks/usePageTracking";

export default function RegisterPage() {
  // Track page visits for conversion rate
  usePageTracking("register");

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start bg-transparent py-10
    pt-30 sm:pt-40"
    >
      {/* Header Section */}
      <div className="mb-6 w-full mx-auto px-6">
        <CTAContainer className="rounded-[30px] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 md:py-24 flex flex-col items-center text-center">
            {/* Headline */}
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Register for{" "}
              <span className="text-highlight-orange">TAKEOFF 2026</span>
            </h1>

            {/* Subheadline */}
            <p className="text-md md:text-xl font-medium text-white/80 max-w-2xl px-4">
              Secure your spot and be part of the experience.
            </p>
          </div>
        </CTAContainer>

        {/* Info Bar - Outside Banner */}
        <div
          className="max-w-7xl mx-auto border-b border-white/0 pt-15 pb-9 flex flex-col
        md:flex-row items-start justify-between gap-y-4 text-sm md:text-base text-gray-300
        relative z-20 gap-5 md:w-full w-fit"
        >
          <div className="flex items-center gap-3">
            <Icon
              icon="tabler:calendar-event"
              className="w-5 h-5 text-highlight-orange"
            />
            <span className="font-medium">Saturday, 11th April, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon
              icon="tabler:clock"
              className="w-5 h-5 text-highlight-orange"
            />
            <span className="font-medium">9:00 AM - 5:00 PM (GMT +1)</span>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Princess+Alexandria+Auditorium,+UNN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <Icon
              icon="tabler:map-pin"
              className="w-5 h-5 text-highlight-orange group-hover:scale-110 transition-transform animate-pulse"
            />
            <span className="font-medium text-center md:text-left underline decoration-white/30 underline-offset-4">
              Nsukka, Enugu State, Nigeria
            </span>
          </a>
        </div>
      </div>

      <RegisterForm />
    </div>
  );
}
