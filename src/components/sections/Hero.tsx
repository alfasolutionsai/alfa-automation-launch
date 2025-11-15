import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
              <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C11.5 2 11 2.5 11 3V4C11 4.5 10.5 5 10 5C9.5 5 9 5.5 9 6V8C9 8.5 8.5 9 8 9C7.5 9 7 9.5 7 10V12C7 13 7.5 14 8.5 14.5C8.5 14.5 9 15 9 16V21C9 21.5 9.5 22 10 22H14C14.5 22 15 21.5 15 21V16C15 15 15.5 14.5 15.5 14.5C16.5 14 17 13 17 12V10C17 9.5 16.5 9 16 9C15.5 9 15 8.5 15 8V6C15 5.5 14.5 5 14 5C13.5 5 13 4.5 13 4V3C13 2.5 12.5 2 12 2Z"/>
              </svg>
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