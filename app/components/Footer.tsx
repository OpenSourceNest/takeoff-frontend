import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src="/Logo.png"
              alt="TAKEOFF"
              width={180}
              height={60}
              className="h-14 w-auto mb-2"
            />
            <span className="text-brown-dark text-xs font-medium tracking-wider">
              BY OPENSOURCENEST
            </span>
          </div>

          {/* Links Section */}
          <div className="flex gap-16">
            {/* GitHub + Links Column */}
            <div className="flex items-start gap-4">
              {/* Links */}
              <div className="flex flex-col gap-2">
                <span className="text-brown-dark font-semibold text-sm mb-1">
                  Links
                </span>
                <Link
                  href="/sponsorship"
                  className="text-brown-medium text-sm hover:text-brown-dark transition-colors"
                >
                  Sponsorship & Partnership
                </Link>
                <Link
                  href="/about"
                  className="text-brown-medium text-sm hover:text-brown-dark transition-colors"
                >
                  About TAKEOFF
                </Link>
                <Link
                  href="/volunteer"
                  className="text-brown-medium text-sm hover:text-brown-dark transition-colors"
                >
                  Volunteer
                </Link>
              </div>
            </div>

            {/* About Column */}
            <div className="flex flex-col gap-2">
              <span className="text-brown-dark font-semibold text-sm mb-1">
                About
              </span>
              <Link
                href="https://opensourcenest.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-medium text-sm hover:text-brown-dark transition-colors"
              >
                Open Source Nest
              </Link>
              <Link
                href="/community"
                className="text-brown-medium text-sm hover:text-brown-dark transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-brown-dark/20">
          <p className="text-brown-medium text-sm">
            © 2026. Open Source Nest. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
