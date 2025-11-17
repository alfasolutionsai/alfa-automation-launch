import { BioluminescentGrid, BioluminescentGridItem } from "@/components/ui/bioluminescent-grid";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/neon-button";
import { Phone, BrainCircuit, Calendar, Users, Database, UserPlus, Wrench } from "lucide-react";

const services = [{
  Icon: Phone,
  title: "Réceptionniste vocal IA",
  subtitle: "Disponible 24/7 pour vos clients",
  description: "Ne ratez plus jamais un appel. L'IA répond 24/7, réserve, répond aux questions, qualifie les leads et vous pouvez personnaliser la voix.",
  features: ["Réponses automatiques 24/7", "Réservation intelligente", "Qualification des leads", "Voix personnalisable"],
  className: "col-span-1 md:col-span-2 row-span-2"
}, {
  Icon: Calendar,
  title: "Réservation et planification",
  subtitle: "Automatisation complète",
  description: "Automatisation complète des rendez-vous, rappels, etc et s'intègre parfaitement à votre calendrier.",
  features: ["Gestion automatique des RDV", "Rappels intelligents", "Intégration calendrier", "Réduction des no-shows"],
  className: ""
}, {
  Icon: Users,
  title: "Suivis client automatisés",
  subtitle: "Aucun client oublié",
  description: "Suivis intelligents basés sur les comportements clients et l'historique de service. Assure qu'aucun client ou prospect ne soit oublié.",
  features: ["Suivis comportementaux", "Analyse de l'historique", "Relances automatiques", "Personnalisation avancée"],
  className: ""
}, {
  Icon: Database,
  title: "CRM intelligent",
  subtitle: "Toutes vos données centralisées",
  description: "Centralise les données des clients, automatise les entrées de données avec une analyse claire.",
  features: ["Centralisation des données", "Saisie automatique", "Tableaux de bord personnalisés", "Analyses en temps réel"],
  className: "row-span-2"
}, {
  Icon: UserPlus,
  title: "Intégration nouveaux clients",
  subtitle: "Processus fluide et rapide",
  description: "Séquences de bienvenue, collecte de documents, premiers appels. Votre processus, mais automatisé.",
  features: ["Séquences de bienvenue", "Collecte automatisée", "Onboarding accéléré", "Charge de travail réduite"],
  className: "col-span-1 md:col-span-2"
}, {
  Icon: Wrench,
  title: "Solutions personnalisées",
  subtitle: "Adapté à vos besoins uniques",
  description: "Chez Alfa on sait que chaque entreprise est unique. C'est pour ça qu'on construit les outils pour faire face à vos défis.",
  features: ["Analyse personnalisée", "Développement sur mesure", "Intégration flexible", "Support dédié"],
  className: ""
}];
export function Services() {
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Voice AI Demo Widget */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Des solutions IA qui règlent vos vrais problèmes
          </h2>
          <Button size="lg" className="gap-2" onClick={() => console.log("Test AI agent")}>
            <Phone className="h-5 w-5" />
            Testez un de nos agents
          </Button>
        </div>

        {/* Service Cards Grid */}
        <BioluminescentGrid className="max-w-7xl mx-auto mb-20">
          {services.map((service, index) => (
            <BioluminescentGridItem key={index} className={service.className}>
              <service.Icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
              <p className="text-sm text-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </BioluminescentGridItem>
          ))}
        </BioluminescentGrid>

        {/* Dashboard Preview Section */}
        <div className="mt-32">
          <ContainerScroll titleComponent={<div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Suivez vos clients et vos données
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Supervisez vos automatisations et bien plus encore avec des tableaux de bord personnalisés et intuitifs.</p>
              </div>}>
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <h3 className="text-2xl font-bold text-foreground">
                  Tableau de bord personnalisé
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Visualisez toutes vos données en temps réel avec des tableaux de bord conçus pour votre entreprise.
                </p>
              </div>
            </div>
          </ContainerScroll>
        </div>
      </div>
    </section>;
}