import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Lightbulb, CheckCircle } from "lucide-react";
import { PixelCanvas } from "@/components/ui/pixel-canvas";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  const cardColors = [
    { gradient: 'from-accent-blue/20 to-accent-cyan/10', border: 'hover:border-accent-blue/50' },
    { gradient: 'from-green-500/20 to-emerald-500/10', border: 'hover:border-green-500/50' },
    { gradient: 'from-accent-cyan/20 to-accent-light-blue/10', border: 'hover:border-accent-cyan/50' },
    { gradient: 'from-purple-500/20 to-blue-500/10', border: 'hover:border-purple-500/50' }
  ];
  
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-card via-green-500/5 to-background relative overflow-hidden">
      {/* Success-themed gradient */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            À quoi s'attendre quand on automatise de la bonne façon
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const colors = cardColors[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`relative overflow-hidden p-8 hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-to-br ${colors.gradient} backdrop-blur ${colors.border}`}>
                  <PixelCanvas
                    gap={8}
                    speed={25}
                    colors={["hsl(var(--primary) / 0.1)", "hsl(var(--primary) / 0.2)", "hsl(var(--primary) / 0.15)"]}
                    variant="default"
                  />
                  <div className="relative z-10 flex items-start gap-4 mb-6">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="p-3 rounded-lg bg-primary/20 backdrop-blur"
                    >
                      <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mt-2">
                      {benefit.title}
                    </h3>
                  </div>
                  <ul className="relative z-10 space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
