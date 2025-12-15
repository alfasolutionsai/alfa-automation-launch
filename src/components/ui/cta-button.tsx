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
          "inline-flex items-center justify-between gap-3 rounded-lg bg-primary px-4 py-2 text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02]",
          className
        )}
        {...props}
      >
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium leading-tight">{headline}</span>
          <span className="text-[11px] text-primary-foreground/80 leading-tight">{subheadline}</span>
        </div>
        <ChevronRight className="h-4 w-4 shrink-0" />
      </button>
    );
  }
);
CtaButton.displayName = "CtaButton";

export { CtaButton };
