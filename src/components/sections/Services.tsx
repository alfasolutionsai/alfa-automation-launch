import CardFlip from "@/components/ui/card-flip";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
const services = [{
  title: "Réceptionniste vocal IA",
  subtitle: "Disponible 24/7 pour vos clients",
  description: "Ne ratez plus jamais un appel. L'IA répond 24/7, réserve, répond aux questions, qualifie les leads et vous pouvez personnaliser la voix.",
  features: ["Réponses automatiques 24/7", "Réservation intelligente", "Qualification des leads", "Voix personnalisable"]
}, {
  title: "Réservation et planification",
  subtitle: "Automatisation complète",
  description: "Automatisation complète des rendez-vous, rappels, etc et s'intègre parfaitement à votre calendrier.",
  features: ["Gestion automatique des RDV", "Rappels intelligents", "Intégration calendrier", "Réduction des no-shows"]
}, {
  title: "Suivis client automatisés",
  subtitle: "Aucun client oublié",
  description: "Suivis intelligents basés sur les comportements clients et l'historique de service. Assure qu'aucun client ou prospect ne soit oublié.",
  features: ["Suivis comportementaux", "Analyse de l'historique", "Relances automatiques", "Personnalisation avancée"]
}, {
  title: "CRM intelligent",
  subtitle: "Toutes vos données centralisées",
  description: "Centralise les données des clients, automatise les entrées de données avec une analyse claire.",
  features: ["Centralisation des données", "Saisie automatique", "Tableaux de bord personnalisés", "Analyses en temps réel"]
}, {
  title: "Intégration nouveaux clients",
  subtitle: "Processus fluide et rapide",
  description: "Séquences de bienvenue, collecte de documents, premiers appels. Votre processus, mais automatisé.",
  features: ["Séquences de bienvenue", "Collecte automatisée", "Onboarding accéléré", "Charge de travail réduite"]
}, {
  title: "Solutions personnalisées",
  subtitle: "Adapté à vos besoins uniques",
  description: "Chez Alfa on sait que chaque entreprise est unique. C'est pour ça qu'on construit les outils pour faire face à vos défis.",
  features: ["Analyse personnalisée", "Développement sur mesure", "Intégration flexible", "Support dédié"]
}];
export function Services() {
  const handleCtaClick = () => {
    // TODO: Open contact form modal
    console.log("Open contact form");
  };
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 justify-items-center">
          {services.map((service, index) => <CardFlip key={index} title={service.title} subtitle={service.subtitle} description={service.description} features={service.features} onCtaClick={handleCtaClick} />)}
        </div>

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