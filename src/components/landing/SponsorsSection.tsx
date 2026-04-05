"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
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
            <div className="flex flex-wrap items-center justify-center gap-10 gap-x-12 max-w-[850px]">
              {Sponsors.map((sponsor) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.link || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!sponsor.link) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="h-[80px] w-auto object-contain"
                    title={sponsor.name}
                  />
                </Link>
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

const Sponsors: {
  name: string;
  logo: string;
  width: number;
  height: number;
  className?: HTMLAttributes<"div">["className"];
  link?: string;
}[] = [
  {
    name: "Github",
    logo: "/partners/github.png",
    width: 170,
    height: 170,
    className: "",
    link: "https://github.com/",
  },
  {
    name: "The Block Hive",
    logo: "/partners/block_hive.png",
    width: 1821,
    height: 660,
    link: "https://theblockhive.org/",
  },
  {
    name: "Tech Nxt",
    logo: "/partners/tech_nxt.png",
    width: 646,
    height: 458,
    link: "https://technxt.io/",
  },
  {
    name: "JetBrains",
    logo: "/partners/jetbrains.png",
    width: 1516,
    height: 496,
    link: "https://www.jetbrains.com/",
  },
  {
    name: "YourNodCodeDev",
    logo: "/partners/yncd.png",
    width: 149,
    height: 140,
  },
  {
    name: "Vin Tech",
    logo: "/partners/vin_tech.png",
    width: 525,
    height: 190,
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
    name: "Algorithmic Explorers",
    logo: "/partners/algorithmic_explorers.png",
    width: 1104,
    height: 593,
  },
  {
    name: "Genesys Club UNN",
    logo: "/partners/genesys_unn.png",
    width: 787,
    height: 516,
  },
  {
    name: "Office of the Director of Information, Student Union Government - University of Nigeria Nsukka",
    logo: "/partners/sug_doi.png",
    width: 354,
    height: 354,
  },
  {
    name: "Google Developer Groups - Enugu",
    logo: "/partners/gdg_enugu.png",
    width: 644,
    height: 168,
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
  {
    name: "Big Studios",
    logo: "/partners/big_studios.png",
    width: 350,
    height: 154,
  },
  {
    name: "Sandlip Oasis",
    logo: "/partners/sandlip_oasis.png",
    width: 419,
    height: 171,
  },
  {
    name: "AISEC Enugu",
    logo: "/partners/aisec.png",
    width: 755,
    height: 155,
  },
  {
    name: "N Digitals",
    logo: "/partners/ndigitals.png",
    width: 421,
    height: 301,
  },
];
