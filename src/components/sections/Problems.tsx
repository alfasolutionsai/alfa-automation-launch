import { Card } from "@/components/ui/card";
import { Clock, TrendingDown, UserX, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Endless Manual Tasks",
    description: "Your team spends hours on data entry, scheduling, and follow-ups instead of closing deals",
    stat: "40% of work time wasted on admin tasks"
  },
  {
    icon: UserX,
    title: "Leads Slip Through the Cracks",
    description: "Missed calls, delayed responses, and lost opportunities cost you thousands in revenue",
    stat: "78% of buyers choose the first responder"
  },
  {
    icon: TrendingDown,
    title: "Inconsistent Customer Experience",
    description: "Manual processes mean inconsistent service quality and frustrated customers",
    stat: "60% of customers leave after poor service"
  },
  {
    icon: AlertCircle,
    title: "No Real-Time Insights",
    description: "Critical business decisions delayed by outdated reports and scattered data",
    stat: "Average 2-3 week delay in reporting"
  }
];

export function Problems() {
  return (
    <section id="problems" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Is Your Business Bleeding Money?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every manual task and missed opportunity is costing you revenue. Here's what we see every day:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:glow-accent group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <problem.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {problem.description}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    {problem.stat}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-foreground">
            Sound familiar? <span className="text-accent">You're not alone.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
