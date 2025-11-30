import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DollarSign, Clock, AlertCircle, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const problems = [
  {
    icon: DollarSign,
    title: "Revenus Manqués",
    description: "Que ce soit des appels manqués, des mauvais suivis ou du temps perdu inutilement, vous laissez de l'argent et des clients sur la table. Chez Alfa Solutions on vous aide à aller chercher chaque client et dollar que vous perdez aujourd'hui. On transforme vos appels manqués en opportunités, on automatise vos suivis et on élimine les tâches qui vous font perdre de l'argent. Résultat : plus de ventes, plus vite, sans effort supplémentaire et plus d'argent dans vos poches."
  },
  {
    icon: Clock,
    title: "Perte de temps",
    description: "Votre équipe perd des heures sur des rappels de rendez-vous, des suivis, de l'entrée de données et de la paperasse au lieu de servir vos clients ou effectuer des tâches vraiment utiles pour votre entreprise. C'est du temps gaspillé qui ne revient jamais. Avec nos solutions, vous récupérez ces heures perdues, on automatise ce qui doit l'être et on redonne du temps productif à votre équipe. Résultat : plus d'efficacité, moins de coûts et une charge mentale qui disparaît."
  },
  {
    icon: AlertCircle,
    title: "Manque d'efficacité",
    description: "Les infos client éparpillées dans des courriels, des fichiers Excel et des post-its ou le manque de productivité, c'est impossible d'offrir un service constant dans ce chaos. Ça crée des erreurs, des retards et des clients frustrés. Avec nous, tout est centralisé, structuré et automatisé. Résultat : un service cohérent, zéro information perdue et des clients mieux servis, plus rapidement."
  },
  {
    icon: TrendingUp,
    title: "Plafond de croissance",
    description: "Vous ne pouvez pas croître sans embaucher encore plus de monde pour refaire les mêmes tâches répétitives. Votre croissance est bloquée par vos processus, pas par votre potentiel. On vous aide à automatiser les tâches qui vous freinent, on libère votre équipe et on vous permet de scaler sans engager de nouveaux employés. Résultat : une croissance plus rapide, plus rentable et plus simple."
  }
];

export function Problems() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  const problemColors = [
    { border: 'hover:border-red-500/50', glow: 'from-red-500/20', icon: 'text-red-500' },
    { border: 'hover:border-yellow-500/50', glow: 'from-yellow-500/20', icon: 'text-yellow-500' },
    { border: 'hover:border-orange-500/50', glow: 'from-orange-500/20', icon: 'text-orange-500' },
    { border: 'hover:border-purple-500/50', glow: 'from-purple-500/20', icon: 'text-purple-500' }
  ];
  
  return (
    <section id="problems" className="py-20 bg-gradient-to-b from-background via-red-500/5 to-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Vous perdez du temps et de l'argent avec des choses simples
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const colors = problemColors[index];
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-h-[20rem]"
              >
                <div className={`relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 transition-all duration-300 ${colors.border}`}>
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border-[0.75px] bg-card p-6 shadow-sm">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className={`w-fit rounded-lg border-[0.75px] border-border bg-gradient-to-br ${colors.glow} to-transparent p-3`}
                    >
                      <problem.icon className={`h-6 w-6 ${colors.icon}`} />
                    </motion.div>
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-card-foreground">
                        {problem.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Les logiciels standards ne sont pas adaptés à votre réalité et embaucher plus de personnel coûte une fortune.{" "}
            <span className="text-foreground font-semibold">Il existe une meilleure solution.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
