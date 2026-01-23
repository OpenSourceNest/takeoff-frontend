import React from "react";
import RegisterForm from "../components/RegisterForm";
import Image from "next/image";

// Mock icons for the info bar (you can replace with MUI icons later if needed)
const CalendarIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const ClockIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const LocationIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-transparent">
      {/* Header Section */}
      <div className="mb-8 w-full ">
        <div
          className="relative overflow-hidden bg-linear-to-r from-black-soft to-brown-dark/30 border border-white/5 shadow-2xl
        py-36"
        >
          {/* Main Banner Area */}
          <div className="relative min-h-[200px] md:min-h-[314px] p-8 md:p-12 z-10 flex flex-col items-center justify-center">
            {/* Rocket Image - Absolute Left */}
            <div className="absolute -left-25 top-1 md:top-30 md:-left-12 w-50 h-70 md:w-60 md:h-70 shrink-0 opacity-90 md:opacity-100  rotate-10 transition-all">
              <Image
                src="/rocket.png"
                alt="Rocket"
                fill
                sizes="(max-width: 768px) 200px, 300px"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Centered Text Content */}
            <div className="relative z-20 w-full text-center flex flex-col items-center justify-center mt-4 md:mt-0">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Register for <span className="text-orange">TAKEOFF 2026</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide text-white/70 max-w-md mx-auto">
                Secure your spot and be part of the experience.
              </p>
            </div>

            {/* Cloud Image - Absolute Right */}
            <div className="absolute -right-15 -top-15 md:-top-20 md:-right-25 w-40 h-40 md:w-64 md:h-64 shrink-0 opacity-80 md:opacity-100 transition-all">
              <Image
                src="/cloud.png"
                alt="Cloud"
                fill
                sizes="(max-width: 768px) 160px, 256px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Info Bar */}
          <div className="bg-black/40 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-row items-center justify-center gap-6 text-xs md:text-sm text-gray-300 relative z-20">
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <span>Saturday, 7th February, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon />
              <span>9:00 AM - 5:00 PM GMT+1</span>
            </div>
            <div className="flex items-center gap-2">
              <LocationIcon />
              <span>
                Princess Alexandria Auditorium, University of Nigeria Nsukka
              </span>
            </div>
          </div>
        </div>
      </div>

      <RegisterForm />
    </div>
  );
}
