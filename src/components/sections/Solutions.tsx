import { Card } from "@/components/ui/card";
import { Zap, Target, LineChart, Shield } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
const solutions = [{
  icon: Zap,
  title: "Custom-Built for Your Business",
  description: "Not generic software—AI systems designed specifically for your workflows and challenges"
}, {
  icon: Target,
  title: "Implementation in 14 Days",
  description: "From discovery call to live system, we move fast without sacrificing quality"
}, {
  icon: LineChart,
  title: "Proven ROI Tracking",
  description: "See exactly how much time and money you're saving with detailed analytics"
}, {
  icon: Shield,
  title: "Canadian Data Privacy",
  description: "Your data stays in Canada, fully compliant with all privacy regulations"
}];
export function Solutions() {
  return <section id="solutions" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Featured 3D Section */}
        <Card className="w-full h-[500px] mb-16 bg-card relative overflow-hidden border-border">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Une IA faite pour vous                
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">Nous construisons des systèmes IA personnalisés qui s'intègrent parfaitement à vos outils existants et fournissent des résultats mesurables.</p>
            </div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative hidden md:block">
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
            </div>
          </div>
        </Card>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => <Card key={index} className="p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 hover:border-primary">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <solution.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {solution.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
}