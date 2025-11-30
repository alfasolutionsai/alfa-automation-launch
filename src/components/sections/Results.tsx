import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Lightbulb, CheckCircle } from "lucide-react";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

const benefits = [
  {
    icon: TrendingUp,
    title: "Capturez plus de revenus",
    items: [
      "Ne perdez plus jamais un client à cause d'appels manqués ou de réponses trop lentes",
      "Convertissez plus de prospects",
      "Soyez disponibles 24/7",
      "Réduisez les no-shows et annulations"
    ],
    color: "text-primary"
  },
  {
    icon: DollarSign,
    title: "Économisez du temps et de l'argent",
    items: [
      "Eliminez des heures de saisie de données et de tâches répétitives",
      "Libérez votre équipe pour qu'elle se concentre sur des tâches ayant une vraie valeur ajoutée pour les clients",
      "Faites évoluer votre entreprise sans engager de personnel supplémentaire"
    ],
    color: "text-accent-foreground"
  },
  {
    icon: Users,
    title: "Améliorez l'expérience client",
    items: [
      "Des temps de réponse plus rapides et une communication constante",
      "Un suivi personnalisé qui témoigne de votre attention",
      "Des processus fluides et professionnels, du premier contact au service continu"
    ],
    color: "text-primary"
  },
  {
    icon: Lightbulb,
    title: "Prenez des décisions plus intelligentes",
    items: [
      "Des informations en temps réel sur les performances de votre entreprise",
      "Identifiez automatiquement les tendances et les opportunités",
      "Des rapports personnalisés qui vous aident réellement à vous développer"
    ],
    color: "text-accent-foreground"
  }
];

export function Results() {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            À quoi s'attendre quand on automatise de la bonne façon
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden p-8 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur">
              <PixelCanvas
                gap={8}
                speed={25}
                colors={["hsl(var(--primary) / 0.1)", "hsl(var(--primary) / 0.2)", "hsl(var(--primary) / 0.15)"]}
                variant="default"
              />
              <div className="relative z-10 flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mt-2">
                  {benefit.title}
                </h3>
              </div>
              <ul className="relative z-10 space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
