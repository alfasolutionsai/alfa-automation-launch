import React, { useEffect, useRef, useState } from "react";
import { Aperture, BarChart3, LayoutGrid, Activity, Layers, LucideIcon } from "lucide-react";

const getRootTheme = () => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.getAttribute("data-theme") === "dark" || root.dataset?.theme === "dark") return "dark";
  if (root.classList.contains("light")) return "light";

  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
};

interface Feature {
  title: string;
  blurb: string;
  meta: string;
  icon: LucideIcon;
  animation: string;
}

interface FeaturesSectionMinimalProps {
  features?: Feature[];
  headline?: string;
  subheadline?: string;
}

function FeaturesSectionMinimal({ 
  features: customFeatures,
  headline = "Monochrome Bento",
  subheadline = "A stark layout built on modular spans, animated outlines, and purposeful whitespace."
}: FeaturesSectionMinimalProps) {
  const [theme, setTheme] = useState(() => getRootTheme());
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "bento2-animations";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes bento2-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6%); }
      }
      @keyframes bento2-pulse {
        0%, 100% { transform: scale(1); opacity: 0.85; }
        50% { transform: scale(1.08); opacity: 1; }
      }
      @keyframes bento2-tilt {
        0% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
        100% { transform: rotate(-2deg); }
      }
      @keyframes bento2-drift {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(6%, -6%, 0); }
      }
      @keyframes bento2-glow {
        0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 0 rgba(0,0,0,0.4)); }
        50% { opacity: 1; filter: drop-shadow(0 0 6px rgba(0,0,0,0.2)); }
      }
      @keyframes bento2-intro {
        0% { opacity: 0; transform: translate3d(0, 28px, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      @keyframes bento2-card {
        0% { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.96); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const syncTheme = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "bento-theme") syncTheme();
    };

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const handleMediaChange = () => syncTheme();

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }
    media?.addEventListener("change", handleMediaChange);

    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
      media?.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const defaultFeatures = [
    {
      title: "System Patterns",
      blurb: "Foundational blocks arranged with deliberate rhythm and precise spacing across the viewport grid.",
      meta: "Layout",
      icon: Aperture,
      animation: "bento2-float 6s ease-in-out infinite",
    },
    {
      title: "Signal Balance",
      blurb: "Monochrome surfaces and tight contrast ratios keep focus on intent over ornamentation.",
      meta: "Tone",
      icon: BarChart3,
      animation: "bento2-pulse 4s ease-in-out infinite",
    },
    {
      title: "Structured Flow",
      blurb: "Information passes through aligned channels for clarity, speed, and effortless scanning.",
      meta: "Flow",
      icon: LayoutGrid,
      animation: "bento2-tilt 5.5s ease-in-out infinite",
    },
    {
      title: "Clean Signals",
      blurb: "Each icon is drawn once, animated gently, and rendered strictly in strokes for a disciplined feel.",
      meta: "Craft",
      icon: Activity,
      animation: "bento2-drift 8s ease-in-out infinite",
    },
    {
      title: "Quiet Energy",
      blurb: "Subtle motion hints at responsiveness without ever distracting from the message conveyed.",
      meta: "Pulse",
      icon: Layers,
      animation: "bento2-glow 7s ease-in-out infinite",
    },
  ];

  const features = customFeatures || defaultFeatures;

  const spans = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
  ];

  return (
    <div className="relative w-full">
      <section
        ref={sectionRef}
        className={`relative mx-auto max-w-6xl px-6 py-20 motion-safe:opacity-0 ${
          sectionVisible ? "motion-safe:animate-[bento2-intro_0.9s_ease-out_forwards]" : ""
        }`}
      >
        <header className="mb-10 flex flex-col gap-6 pb-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              {headline}
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              {subheadline}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-3 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
          {features.map((feature, index) => (
            <BentoItem
              key={feature.title}
              span={spans[index]}
              feature={feature}
              theme={theme}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

interface BentoItemProps {
  feature: Feature;
  span?: string;
  theme?: string;
  index?: number;
  isVisible?: boolean;
}

function BentoItem({ feature, span = "", theme = "light", index = 0, isVisible = false }: BentoItemProps) {
  const { icon: Icon, animation, title, blurb, meta } = feature;
  const animationDelay = `${Math.max(index * 0.12, 0)}s`;

  return (
    <article
      className={`group relative flex min-h-[240px] md:h-full flex-col justify-between rounded-2xl border border-border bg-card px-5 py-6 md:px-6 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-md motion-safe:opacity-0 ${
        isVisible ? "motion-safe:animate-[bento2-card_0.8s_ease-out_forwards]" : ""
      } ${span}`}
      style={{ animationDelay }}
    >
      <div className="flex items-start gap-3 md:gap-4 w-full overflow-hidden">
        <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background">
          <Icon
            className="h-5 w-5 md:h-7 md:w-7 text-foreground"
            strokeWidth={1.5}
            style={{ animation }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <header className="flex flex-wrap items-start gap-2">
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-foreground break-words">
              {title}
            </h3>
            {meta && (
              <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {meta}
              </span>
            )}
          </header>
          <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground break-words">
            {blurb}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <a 
          href="#contact" 
          className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          En savoir plus
          <svg 
            className="ml-1 h-4 w-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0 rounded-2xl border border-primary/20"
          style={{
            maskImage:
              "radial-gradient(220px_220px_at_var(--x,50%)_var(--y,50%), black, transparent)",
            WebkitMaskImage:
              "radial-gradient(220px_220px_at_var(--x,50%)_var(--y,50%), black, transparent)",
          }}
        />
      </div>
    </article>
  );
}

export default FeaturesSectionMinimal;
export { FeaturesSectionMinimal };
