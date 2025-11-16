import CardFlip from "@/components/ui/flip-card";

const steps = [
  {
    title: "ÉTAPE 1",
    subtitle: "Audit & Stratégie (GRATUIT)",
    description: "Nous analysons votre entreprise et identifions les opportunités d'automatisation pour maximiser votre retour sur investissement.",
    features: [
      "Vous remplissez un formulaire rapide à propos de votre entreprise",
      "Vous recevez gratuitement votre feuille de route IA expliquant les opportunités potentielles",
      "Appel découverte de 30 minutes pour cerner vos besoins spécifiques"
    ],
    color: "#4c7894"
  },
  {
    title: "ÉTAPE 2",
    subtitle: "Implémentation",
    description: "Construction, intégration et déploiement de vos systèmes IA personnalisés avec formation complète de votre équipe.",
    features: [
      "Construction, intégration et déploiement de vos systèmes IA personnalisés",
      "On s'occupe de toute l'installation technique et la migration de données",
      "On forme votre équipe sur l'utilisation de tous les systèmes"
    ],
    color: "#5a922c"
  },
  {
    title: "ÉTAPE 3",
    subtitle: "Maintenance & Optimisation",
    description: "Nous nous occupons de tout pour que vous n'ayez pas à le faire. Tranquillité d'esprit garantie.",
    features: [
      "Suivi, mises à jour et améliorations continues",
      "On ajoute de nouvelles automatisations à mesure que votre entreprise évolue",
      "Support dédié quand vous en avez besoin"
    ],
    color: "#d79f1e"
  }
];

export function Process() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            De la découverte au déploiement en trois étapes simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre processus éprouvé vous met en place rapidement, sans perturber vos opérations et s'intègre à n'importe quels systèmes existants.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex justify-center">
              <CardFlip
                title={step.title}
                subtitle={step.subtitle}
                description={step.description}
                features={step.features}
                color={step.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
