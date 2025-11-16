import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/neon-button";

const timelineData = [
  {
    title: "ÉTAPE 1",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
          Audit & Stratégie (GRATUIT)
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6">
          Nous analysons votre entreprise et identifions les opportunités d'automatisation pour maximiser votre retour sur investissement.
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>Vous remplissez un formulaire rapide à propos de votre entreprise</span>
          </div>
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>Vous recevez gratuitement votre feuille de route IA expliquant les opportunités potentielles</span>
          </div>
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>Appel découverte de 30 minutes pour cerner vos besoins spécifiques</span>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Obtenez votre audit gratuit
        </Button>
      </div>
    ),
  },
  {
    title: "ÉTAPE 2",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
          Implémentation
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6">
          Construction, intégration et déploiement de vos systèmes IA personnalisés avec formation complète de votre équipe.
        </p>
        <div className="space-y-3">
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>Construction, intégration et déploiement de vos systèmes IA personnalisés</span>
          </div>
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>On s'occupe de toute l'installation technique et la migration de données</span>
          </div>
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>On forme votre équipe sur l'utilisation de tous les systèmes</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "ÉTAPE 3",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
          Maintenance & Optimisation
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6">
          Nous nous occupons de tout pour que vous n'ayez pas à le faire. Tranquillité d'esprit garantie.
        </p>
        <div className="space-y-3">
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>Suivi, mises à jour et améliorations continues</span>
          </div>
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>On ajoute de nouvelles automatisations à mesure que votre entreprise évolue</span>
          </div>
          <div className="flex gap-3 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <span className="text-green-500 font-bold">✓</span>
            <span>Support dédié quand vous en avez besoin</span>
          </div>
        </div>
      </div>
    ),
  },
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

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
