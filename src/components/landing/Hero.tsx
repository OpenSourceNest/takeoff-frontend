"use client";

import Button from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HeroBG = dynamic(() => import("@/components/landing/HeroBG"), {
  ssr: false,
});

const dropdownOptions = [
  { label: "Attendee", href: "/register" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Partnership", href: "mailto:info@opensourcenest.org" },
];

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative pt-30 sm:pt-40 pb-20 flex flex-col bg-black overflow-hidden z-10">
      <HeroBG />

      {/* Hero Content Body (On Top) */}
      <div className="relative flex-1 w-full flex flex-col items-center justify-center px-4 z-20 pt-12">
        {/* A. Headline Area */}
        <motion.div
          className="w-full text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[33px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto tracking-tight">
            A Year Of{" "}
            <span className="text-highlight-orange">Contribution.</span>
            <br />A <span className="text-highlight-orange">Launch</span> Into
            What&apos;s Next.
          </h2>
        </motion.div>

        {/* B. Content Area */}
        <motion.div
          className="w-full max-w-4xl mx-auto text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 opacity-90 shadow-black/50 drop-shadow-sm">
            TAKEOFF is Open Source Nest&apos;s flagship annual event;
            celebrating real community impact, spotlighting emerging
            contributors, and setting the direction for the year ahead in open
            source.
          </p>

          {/* Get Involved Dropdown */}
          <div className="relative z-50 mb-5" ref={dropdownRef}>
            <Button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              icon={KeyboardArrowDownIcon}
              rounded="20px"
              className="px-8 py-3 text-sm shadow-xl"
              isActive={isDropdownOpen}
              aria-expanded={isDropdownOpen}
              aria-haspopup="menu"
              aria-label="Get involved options"
            >
              Get Involved
            </Button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black-soft/95 backdrop-blur-sm
                  rounded-2xl py-2 shadow-2xl border border-brown-dark/20 overflow-hidden"
                  style={{ zIndex: 9999 }}
                  role="menu"
                  aria-label="Get involved menu"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {dropdownOptions.map((option, index) => {
                    const isExternal = option.href.startsWith("http");

                    return (
                      <motion.div
                        key={option.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={option.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="block px-6 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-orange transition-colors text-center border-b border-white/5 last:border-0"
                          onClick={() => setIsDropdownOpen(false)}
                          role="menuitem"
                        >
                          {option.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Event Details Addition */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 px-6 py-3 bg-orange/20 border border-brown-dark/30 rounded-[20px] text-xs
            sm:text-sm font-medium text-white/90 mt-8 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:calendar-event"
                className="w-5 h-5 text-white/90"
              />
              <span>Saturday, 28th February, 2026</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Princess+Alexandria+Auditorium,+UNN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange transition-colors group cursor-pointer"
            >
              <Icon
                icon="tabler:map-pin"
                className="w-5 h-5 text-white/90 group-hover:text-orange transition-colors animate-pulse"
              />
              <span className="underline decoration-white/30 underline-offset-4 group-hover:decoration-orange">
                Princess Alexandria Auditorium, UNN
              </span>
            </a>
          </motion.div>

          {/* Flagship Event Badge */}
          <motion.div
            className="mt-3 flex items-center justify-center gap-3 text-sm text-gray-light italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>A flagship event by</span>
            <Link
              href="https://opensourcenest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-100 transition-opacity"
            >
              <Image
                src="/osn.png"
                alt="OpenSourceNest"
                width={120}
                height={24}
                className="h-7 w-auto"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 bg-linear-to-b from-transparent to-black
         w-full z-10 block h-[70px]"
      ></div>
    </section>
  );
}
