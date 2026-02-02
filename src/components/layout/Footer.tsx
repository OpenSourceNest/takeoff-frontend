"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brown-medium px-6 py-7">
      <div className="max-w-5xl mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/takeoff_footer.png"
                alt="TAKEOFF by OpenSourceNest"
                width={240}
                height={80}
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-24">
            {/* Links Column */}
            <div className="flex flex-col gap-2">
              <h3 className="text-brown-dark font-bold text-lg">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="mailto:info@opensourcenest.org"
                  className="text-brown-dark/80 hover:text-brown-dark hover:underline transition-colors text-sm md:text-base"
                >
                  Sponsorship & Partnership
                </Link>
                <Link
                  href="/#about"
                  className="text-brown-dark/80 hover:text-brown-dark hover:underline transition-colors text-sm md:text-base"
                >
                  About TAKEOFF
                </Link>
                <Link
                  href="/volunteer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-dark/80 hover:text-brown-dark hover:underline transition-colors text-sm md:text-base"
                >
                  Volunteer
                </Link>
                <Link
                  href="https://getdp.co/takeoffbyosn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-dark/80 hover:text-brown-dark hover:underline transition-colors text-sm md:text-base"
                >
                  Get DP
                </Link>
              </nav>
            </div>

            {/* About Column */}
            <div className="flex flex-col gap-2">
              <h3 className="text-brown-dark font-bold text-lg">About</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="https://opensourcenest.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-dark/80 hover:text-brown-dark hover:underline transition-colors text-sm md:text-base"
                >
                  Open Source Nest
                </Link>
                <Link
                  href="https://bit.ly/osn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-dark/80 hover:text-brown-dark hover:underline transition-colors text-sm md:text-base"
                >
                  Join Community
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-12">
          <p className="text-brown-dark/80 text-sm md:text-base italic">
            © 2026. Open Source Nest. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
