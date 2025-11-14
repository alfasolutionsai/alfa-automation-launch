import { Card } from "@/components/ui/card";
import { Zap, Target, LineChart, Shield } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Custom-Built for Your Business",
    description: "Not generic software—AI systems designed specifically for your workflows and challenges"
  },
  {
    icon: Target,
    title: "Implementation in 14 Days",
    description: "From discovery call to live system, we move fast without sacrificing quality"
  },
  {
    icon: LineChart,
    title: "Proven ROI Tracking",
    description: "See exactly how much time and money you're saving with detailed analytics"
  },
  {
    icon: Shield,
    title: "Canadian Data Privacy",
    description: "Your data stays in Canada, fully compliant with all privacy regulations"
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            AI Automation That Actually Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build AI systems that integrate seamlessly with your existing tools and deliver measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 hover:border-primary"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <solution.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
