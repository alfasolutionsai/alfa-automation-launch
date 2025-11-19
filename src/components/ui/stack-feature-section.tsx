"use client";

import { Button } from "@/components/ui/neon-button";
import {
  FaGoogle, FaSlack, FaMicrosoft, FaSalesforce, FaStripe,
  FaShopify, FaDropbox, FaGoogleDrive, FaTrello, FaMailchimp, FaGithub
} from "react-icons/fa";
import {
  SiGmail, SiHubspot, SiNotion, SiAirtable, SiPostgresql,
  SiTwilio, SiZoom, SiCalendly
} from "react-icons/si";

const iconConfigs = [
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: SiGmail, color: "#EA4335" },
  { Icon: FaSlack, color: "#4A154B" },
  { Icon: FaMicrosoft, color: "#00A4EF" },
  { Icon: FaSalesforce, color: "#00A1E0" },
  { Icon: SiHubspot, color: "#FF7A59" },
  { Icon: FaStripe, color: "#635BFF" },
  { Icon: FaShopify, color: "#96BF48" },
  { Icon: SiPostgresql, color: "#4169E1" },
  { Icon: FaDropbox, color: "#0061FF" },
  { Icon: FaGoogleDrive, color: "#4285F4" },
  { Icon: SiAirtable, color: "#18BFFF" },
  { Icon: FaTrello, color: "#0052CC" },
  { Icon: SiNotion, color: "#000000" },
  { Icon: SiTwilio, color: "#F22F46" },
  { Icon: SiZoom, color: "#2D8CFF" },
  { Icon: FaMailchimp, color: "#FFE01B" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: SiCalendly, color: "#006BFF" },
];

interface StackFeatureSectionProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function StackFeatureSection({ headline, subheadline, ctaText, ctaHref }: StackFeatureSectionProps) {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative w-full my-32 px-10 flex items-center justify-between h-[40rem] border-y border-border bg-card overflow-hidden">
      {/* Left side: Heading and Text */}
      <div className="w-1/2 z-10">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-foreground">
          {headline}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg">
          {subheadline}
        </p>
        {ctaText && ctaHref && (
          <div className="flex items-center gap-3">
            <Button variant="default" asChild>
              <a href={ctaHref}>{ctaText}</a>
            </Button>
          </div>
        )}
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-1/2 h-full flex items-center justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-muted shadow-lg flex items-center justify-center">
            <FaGoogle className="w-12 h-12 text-[#DB4437]" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-border"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-background rounded-full p-1 shadow-md"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
