import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Brain, Workflow, Database, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Voice AI Agents",
    description: "Never miss a call. AI agents that sound human, book appointments, and qualify leads 24/7",
    features: ["24/7 availability", "Natural conversations", "Instant follow-up"],
    highlighted: true
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks with intelligent automation that learns your business processes",
    features: ["Email automation", "Data entry", "Document processing"],
    highlighted: false
  },
  {
    icon: Brain,
    title: "Smart Lead Qualification",
    description: "AI that scores, routes, and nurtures leads automatically—so you focus on closers",
    features: ["Lead scoring", "Auto-routing", "Smart nurture"],
    highlighted: false
  },
  {
    icon: Database,
    title: "Custom Integrations",
    description: "Connect your CRM, calendar, email, and tools into one seamless automated system",
    features: ["CRM sync", "API integrations", "Custom dashboards"],
    highlighted: false
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We Build
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Custom AI systems designed to solve your specific business challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-2xl transition-all duration-300 ${
                service.highlighted ? 'border-2 border-accent ring-2 ring-accent/20' : 'hover:scale-[1.02]'
              }`}
            >
              {service.highlighted && (
                <div className="mb-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  Most Popular
                </div>
              )}
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="w-full justify-between text-primary hover:text-accent hover:bg-accent/10"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
