"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function SponsorsSection() {
  return (
    <motion.section
      className="bg-black py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full mx-auto">
        {/* Sponsors */}
        <motion.div
          className="text-center mb-30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-widest uppercase mb-10">
            Sponsors
          </h2>

          {/* Sponsors */}
          <div className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-10">
              {Sponsors.map((sponsor) => (
                <Image
                  key={sponsor.name}
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="h-[150px] md:h-[200px] w-auto object-contain"
                  title={sponsor.name}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-widest uppercase mb-10">
            Partners
          </h2>

          {/* Partners Marquee */}
          <Marquee
            // gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-4"
            loop={0}
          >
            {Partners.map((partner, index) => (
              <div
                key={partner.name + index}
                className="flex flex-col items-center mx-12 w-fit"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-[80px] md:h-[100px] w-auto object-contain"
                  title={partner.name}
                />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </motion.section>
  );
}

const Sponsors = [
  {
    name: "Github",
    logo: "/partners/github.png",
    width: 170,
    height: 170,
  },
  {
    name: "Lenz Visual",
    logo: "/partners/lenz_visual.png",
    width: 1044,
    height: 555,
  },
];

const Partners = Array(1)
  .fill([
    {
      name: "She Code Africa - University of Nigeria Nsukka Chapter",
      logo: "/partners/sca_unn.png",
      width: 170,
      height: 170,
    },
    {
      name: "Anambra Techies",
      logo: "/partners/anambra_techies.png",
      width: 170,
      height: 493,
    },
    {
      name: "Office of the Director of Information, Student Union Government - University of Nigeria Nsukka",
      logo: "/partners/sug_doi.png",
      width: 354,
      height: 354,
    },
    {
      name: "Google Developer Groups On Campus - University of Nigeria Nsukka",
      logo: "/partners/gdg_unn.png",
      width: 1920,
      height: 390,
    },
    {
      name: "Nigeria Association of Physical Sciences Student - University of Nigeria Nsukka",
      logo: "/partners/napss.png",
      width: 1920,
      height: 390,
    },
    {
      name: "Netmifi",
      logo: "/partners/netmifi.png",
      width: 200,
      height: 60,
    },
    {
      name: "Nigeria Association of Computing Students - University of Nigeria Nsukka",
      logo: "/partners/nacos_unn.png",
      width: 1200,
      height: 412,
    },
    {
      name: "Caritas Couture",
      logo: "/partners/caritas_couture.png",
      width: 1200,
      height: 412,
    },
  ])
  .flat();
