import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-card py-20 md:py-32">
      {/* Animated background paths */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <BackgroundPaths />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Trusted by 100+ Canadian Service Businesses</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Stop Losing Revenue to{" "}
            <span className="text-primary">Manual Tasks</span> and{" "}
            <span className="text-primary">Missed Opportunities</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Custom AI systems that automate your busywork, capture every lead, and free your team to focus on what actually grows your business
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="glow-primary text-lg px-8">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2 border-accent hover:bg-accent/10"
            >
              See How It Works
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>No upfront cost</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>14-day implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
