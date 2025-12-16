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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import n8nLogo from "@/assets/n8n-logo.png";

const iconConfigs = [
  { Icon: FaGoogle, color: "#DB4437", name: "Google Workspace" },
  { Icon: SiGmail, color: "#EA4335", name: "Gmail" },
  { Icon: FaSlack, color: "#4A154B", name: "Slack" },
  { Icon: FaMicrosoft, color: "#00A4EF", name: "Microsoft 365" },
  { Icon: FaSalesforce, color: "#00A1E0", name: "Salesforce" },
  { Icon: SiHubspot, color: "#FF7A59", name: "HubSpot" },
  { Icon: FaStripe, color: "#635BFF", name: "Stripe" },
  { Icon: FaShopify, color: "#96BF48", name: "Shopify" },
  { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { Icon: FaDropbox, color: "#0061FF", name: "Dropbox" },
  { Icon: FaGoogleDrive, color: "#4285F4", name: "Google Drive" },
  { Icon: SiAirtable, color: "#18BFFF", name: "Airtable" },
  { Icon: FaTrello, color: "#0052CC", name: "Trello" },
  { Icon: SiNotion, color: "#000000", name: "Notion" },
  { Icon: SiTwilio, color: "#F22F46", name: "Twilio" },
  { Icon: SiZoom, color: "#2D8CFF", name: "Zoom" },
  { Icon: FaMailchimp, color: "#FFE01B", name: "Mailchimp" },
  { Icon: FaGithub, color: "#181717", name: "GitHub" },
  { Icon: SiCalendly, color: "#006BFF", name: "Calendly" },
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
    <section className="relative w-full my-16 md:my-32 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between min-h-[20rem] md:h-[40rem] border-y border-border bg-card overflow-hidden py-12 md:py-0 gap-8 md:gap-0">
      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-foreground">
          {headline}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto md:mx-0">
          {subheadline}
        </p>
        {ctaText && ctaHref && (
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Button variant="default" asChild>
              <a href={ctaHref}>{ctaText}</a>
            </Button>
          </div>
        )}
      </div>

      {/* Right side: Orbit animation - half circle on both mobile and desktop */}
      <div className="flex relative w-full md:w-1/2 h-[16rem] md:h-full items-center justify-center md:justify-end overflow-hidden">
        <TooltipProvider>
          <div className="relative w-[32rem] h-[32rem] md:w-[50rem] md:h-[50rem] -translate-y-[50%] md:translate-y-0 md:translate-x-[50%] flex items-center justify-center">
            {/* Center Circle */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-muted shadow-lg flex items-center justify-center cursor-pointer">
                  <img src={n8nLogo} alt="n8n" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>n8n</p>
              </TooltipContent>
            </Tooltip>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const desktopSize = 12 + orbitGap * (orbitIdx + 1);
            const mobileSize = 8 + 4 * (orbitIdx + 1);
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-border"
                style={{
                  width: `clamp(${mobileSize}rem, calc(${mobileSize}rem + (${desktopSize} - ${mobileSize}) * ((100vw - 20rem) / (80rem - 20rem))), ${desktopSize}rem)`,
                  height: `clamp(${mobileSize}rem, calc(${mobileSize}rem + (${desktopSize} - ${mobileSize}) * ((100vw - 20rem) / (80rem - 20rem))), ${desktopSize}rem)`,
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
                      <Tooltip key={iconIdx}>
                        <TooltipTrigger asChild>
                          <div
                            className="absolute bg-background rounded-full p-0.5 md:p-1 shadow-md cursor-pointer hover:scale-110 transition-transform"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <cfg.Icon className="w-5 h-5 md:w-8 md:h-8" style={{ color: cfg.color }} />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{cfg.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
              </div>
            );
          })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
