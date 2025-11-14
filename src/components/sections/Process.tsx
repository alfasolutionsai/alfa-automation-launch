import { Card } from "@/components/ui/card";
import { Calendar, Code, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Discovery Call",
    description: "We analyze your workflows, identify automation opportunities, and map out exactly what we'll build",
    duration: "Day 1"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Our team builds your AI systems, integrates with your tools, and tests everything thoroughly",
    duration: "Days 2-10"
  },
  {
    icon: Rocket,
    title: "Launch & Training",
    description: "We deploy your system, train your team, and ensure everything runs smoothly",
    duration: "Days 11-14"
  },
  {
    icon: BarChart,
    title: "Optimization & Support",
    description: "Ongoing monitoring, improvements, and support to maximize your ROI",
    duration: "Ongoing"
  }
];

export function Process() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            From Idea to Impact in 14 Days
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven process gets you up and running quickly without disrupting your operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20 md:left-1/2"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className={`flex items-start gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold z-10 ring-4 ring-accent/20">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <Card className="flex-1 p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-2 inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">
                      {step.duration}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
