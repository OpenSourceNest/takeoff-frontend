"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageMarquee from "../ui/ImageMarquee";

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
          <div className="flex justify-center gap-2 px-5">
            <div className="flex flex-wrap items-center justify-center gap-10">
              {Sponsors.map((sponsor) => (
                <Image
                  key={sponsor.name}
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="h-[80px] md:h-[100px] w-auto object-contain"
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

          <ImageMarquee images={Partners} />
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
    name: "The Block Hive",
    logo: "/partners/block_hive.png",
    width: 1821,
    height: 660,
  },
];

export const Partners = [
  {
    name: "Google Developer Groups On Campus - University of Nigeria Nsukka",
    logo: "/partners/gdg_unn.png",
    width: 1724,
    height: 320,
  },
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
    name: "Nigeria Association of Physical Sciences Student - University of Nigeria Nsukka",
    logo: "/partners/napss.png",
    width: 410,
    height: 410,
  },
  {
    name: "Netmifi",
    logo: "/partners/netmifi.png",
    width: 200,
    height: 60,
  },
  {
    name: "Nigeria Association of Computing Students - University of Nigeria Nsukka",
    logo: "/partners/nacos.png",
    width: 500,
    height: 500,
  },
  {
    name: "Caritas Couture",
    logo: "/partners/caritas_couture.png",
    width: 1200,
    height: 412,
  },
  {
    name: "GIDA",
    logo: "/partners/gida.png",
    width: 782,
    height: 448,
  },
  {
    name: "Women Tech Makers, Nsukka",
    logo: "/partners/wtm.png",
    width: 465,
    height: 465,
  },
  {
    name: "Lenz Visual",
    logo: "/partners/lenz_visual.png",
    width: 1044,
    height: 555,
  },
  {
    name: "Dev Events",
    logo: "/partners/dev_events.png",
    width: 1600,
    height: 660,
  },
];
