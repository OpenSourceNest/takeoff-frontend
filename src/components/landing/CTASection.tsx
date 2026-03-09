"use client";

import Link from "next/link";
import CTAContainer from "@/components/ui/CTAContainer";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-black py-6 sm:py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <CTAContainer className="rounded-[30px] flex items-center justify-center px-6 py-8 sm:py-12">
          <motion.div
            className="text-center flex flex-col items-center md:py-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Headline */}
            <motion.h2
              className="md:text-4xl text-3xl mb-3 font-bold text-white leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to <span className="text-highlight-orange">TAKEOFF?</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="md:text-2xl text-xl text-white mb-10 max-w-md leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Be part of the moment that closes one chapter, and launches the
              next.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/register">
                <Button
                  rounded="20px"
                  className="bg-brown-medium text-brown-dark text-bold text-xl font-medium hover:bg-brown-dark hover:text-[#c25d0f] transition-all text-center "
                >
                  Register
                </Button>
              </Link>
              <Link href="/volunteer" target="_blank" rel="noopener noreferrer">
                <Button
                  rounded="20px"
                  className="bg-brown-medium text-brown-dark text-bold text-xl font-medium hover:bg-brown-dark hover:text-[#c25d0f] transition-all text-center"
                >
                  Volunteer
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </CTAContainer>
      </div>
    </section>
  );
}
