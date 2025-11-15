import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
export function Hero() {
  return <section className="relative overflow-hidden bg-gradient-to-b from-background to-card py-20 md:py-32">
      {/* Animated background paths */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <BackgroundPaths />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Fiers d'être une entreprise québécoise                    </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <span className="text-primary">AI Automation</span> That Actually Works
            </h1>

            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              We build AI systems that integrate seamlessly with your existing tools and deliver measurable results
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="glow-primary text-lg px-8">Réservez une consultation gratuite<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-accent hover:bg-accent/10">Comment ca fonctionne?</Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                
                <span>
              </span>
              </div>
              
              <div className="flex items-center gap-2">
                
                
              </div>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="relative hidden lg:block">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
            <div className="relative h-[500px] rounded-lg overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}