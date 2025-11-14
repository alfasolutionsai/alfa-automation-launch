import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    value: "15-20 hours",
    label: "Saved per week per employee",
    color: "text-primary"
  },
  {
    icon: Users,
    value: "3x faster",
    label: "Response time to leads",
    color: "text-accent-foreground"
  },
  {
    icon: DollarSign,
    value: "$50K+",
    label: "Average annual cost savings",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Increase in lead conversion",
    color: "text-accent-foreground"
  }
];

export function Results() {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's what our clients achieve within the first 90 days
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <metric.icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
              <div className="text-3xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-medium text-card-foreground mb-4">
              "Alfa's AI system completely transformed our lead handling. We went from missing 40% of calls to capturing every single lead. Revenue is up 35% and our team is finally focused on growth, not admin work."
            </p>
            <footer className="text-muted-foreground">
              <strong className="text-foreground">Michael Chen</strong>, CEO at ServicePro Solutions
            </footer>
          </blockquote>
        </Card>
      </div>
    </section>
  );
}
