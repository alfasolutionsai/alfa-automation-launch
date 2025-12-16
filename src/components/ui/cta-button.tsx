import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  headline: string;
  subheadline: string;
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className, headline, subheadline, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-between gap-2 md:gap-3 rounded-lg bg-primary px-3 py-1.5 md:px-4 md:py-2 text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02]",
          className
        )}
        {...props}
      >
        <div className="flex flex-col items-start">
          <span className="text-xs md:text-sm font-medium leading-tight">{headline}</span>
          <span className="text-[10px] md:text-[11px] text-primary-foreground/80 leading-tight">{subheadline}</span>
        </div>
        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
      </button>
    );
  }
);
CtaButton.displayName = "CtaButton";

export { CtaButton };
