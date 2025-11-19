import CardFlip from "@/components/ui/card-flip";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { PulseBeams } from "@/components/ui/pulse-beams";
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
const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 6.5, cy: 398.5, r: 6 },
      { cx: 269, cy: 220.5, r: 6 }
    ]
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 851, cy: 34, r: 6.5 },
      { cx: 568, cy: 200, r: 6 }
    ]
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 142, cy: 427, r: 6.5 },
      { cx: 425.5, cy: 274, r: 6 }
    ]
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
      animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 770, cy: 427, r: 6.5 },
      { cx: 493, cy: 274, r: 6 }
    ]
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
      animate: {
        x1: ["40%", "0%", "0%"],
        x2: ["10%", "0%", "0%"],
        y1: ["0%", "0%", "180%"],
        y2: ["20%", "20%", "200%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 420.5, cy: 6.5, r: 6 },
      { cx: 380, cy: 168, r: 6 }
    ]
  }
];

const gradientColors = {
  start: "#18CCFC",
  middle: "#6344F5",
  end: "#AE48FF"
};

export function Services() {
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Des solutions IA qui règlent vos vrais problèmes
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32 justify-items-center">
          {services.map((service, index) => <CardFlip key={index} title={service.title} subtitle={service.subtitle} description={service.description} features={service.features} />)}
        </div>

        {/* PulseBeams CTA */}
        <div className="mt-20">
          <PulseBeams
            beams={beams}
            gradientColors={gradientColors}
            className="bg-background rounded-3xl h-[600px]"
          >
            <button className="bg-slate-800 w-[320px] z-40 h-[120px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex justify-center w-[320px] text-center space-x-2 h-[120px] items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span className="md:text-4xl text-base inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300">
                  Testez un agent
                </span>
              </div>
            </button>
          </PulseBeams>
        </div>

        {/* Dashboard Preview Section */}
        <div>
          <ContainerScroll titleComponent={<div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Suivez vos clients et vos données
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Supervisez vos automatisations et bien plus encore avec des tableaux de bord personnalisés et intuitifs.</p>
              </div>}>
            <img 
              src="https://drive.google.com/uc?export=view&id=17mb0FMRSUNUdnbWm5ynKUrxLCsGFOMRi" 
              alt="Tableau de bord personnalisé avec métriques et graphiques en temps réel"
              className="w-full h-full object-cover rounded-2xl"
            />
          </ContainerScroll>
        </div>
      </div>
    </section>;
}