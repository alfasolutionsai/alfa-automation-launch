import { useState } from "react";
import CardFlip from "@/components/ui/card-flip";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { PulseBeams } from "@/components/ui/pulse-beams";
import dashboardPreview from "@/assets/dashboard-preview.png";
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
const beams = [{
  path: "M400 300H80C74.4772 300 70 304.477 70 310V580",
  gradientConfig: {
    initial: {
      x1: "0%",
      x2: "0%",
      y1: "80%",
      y2: "100%"
    },
    animate: {
      x1: ["0%", "0%", "200%"],
      x2: ["0%", "0%", "180%"],
      y1: ["80%", "0%", "0%"],
      y2: ["100%", "20%", "20%"]
    },
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
      repeatDelay: 3,
      delay: Math.random() * 2
    }
  },
  connectionPoints: [{
    cx: 70,
    cy: 580,
    r: 6
  }, {
    cx: 400,
    cy: 300,
    r: 6
  }]
}, {
  path: "M800 300H1120C1125.52 300 1130 295.523 1130 290V20",
  gradientConfig: {
    initial: {
      x1: "0%",
      x2: "0%",
      y1: "80%",
      y2: "100%"
    },
    animate: {
      x1: ["20%", "100%", "100%"],
      x2: ["0%", "90%", "90%"],
      y1: ["80%", "80%", "-20%"],
      y2: ["100%", "100%", "0%"]
    },
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
      repeatDelay: 3,
      delay: Math.random() * 2
    }
  },
  connectionPoints: [{
    cx: 1130,
    cy: 20,
    r: 6.5
  }, {
    cx: 800,
    cy: 300,
    r: 6
  }]
}, {
  path: "M550 350V420C550 425.523 545.523 430 540 430H120C114.477 430 110 434.477 110 440V590",
  gradientConfig: {
    initial: {
      x1: "0%",
      x2: "0%",
      y1: "80%",
      y2: "100%"
    },
    animate: {
      x1: ["20%", "100%", "100%"],
      x2: ["0%", "90%", "90%"],
      y1: ["80%", "80%", "-20%"],
      y2: ["100%", "100%", "0%"]
    },
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
      repeatDelay: 3,
      delay: Math.random() * 2
    }
  },
  connectionPoints: [{
    cx: 110,
    cy: 590,
    r: 6.5
  }, {
    cx: 550,
    cy: 350,
    r: 6
  }]
}, {
  path: "M650 350V420C650 425.523 654.477 430 660 430H1080C1085.52 430 1090 434.477 1090 440V590",
  gradientConfig: {
    initial: {
      x1: "40%",
      x2: "50%",
      y1: "160%",
      y2: "180%"
    },
    animate: {
      x1: "0%",
      x2: "10%",
      y1: "-40%",
      y2: "-20%"
    },
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
      repeatDelay: 3,
      delay: Math.random() * 2
    }
  },
  connectionPoints: [{
    cx: 1090,
    cy: 590,
    r: 6.5
  }, {
    cx: 650,
    cy: 350,
    r: 6
  }]
}, {
  path: "M600 250V30C600 24.4772 604.477 20 610 20H680",
  gradientConfig: {
    initial: {
      x1: "-40%",
      x2: "-10%",
      y1: "0%",
      y2: "20%"
    },
    animate: {
      x1: ["40%", "0%", "0%"],
      x2: ["10%", "0%", "0%"],
      y1: ["0%", "0%", "180%"],
      y2: ["20%", "20%", "200%"]
    },
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
      repeatDelay: 3,
      delay: Math.random() * 2
    }
  },
  connectionPoints: [{
    cx: 680,
    cy: 20,
    r: 6
  }, {
    cx: 600,
    cy: 250,
    r: 6
  }]
}];
const gradientColors = {
  start: "#18CCFC",
  middle: "#6344F5",
  end: "#AE48FF"
};
const DashboardImage = () => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
  return <div className="relative w-full h-full">
      {imageState === 'loading' && <div className="absolute inset-0 bg-muted/50 rounded-2xl animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground">Chargement...</div>
        </div>}
      {imageState === 'error' && <div className="absolute inset-0 bg-muted/30 rounded-2xl flex items-center justify-center">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">Impossible de charger l'image</p>
            <button onClick={() => setImageState('loading')} className="text-primary hover:underline text-sm">
              Réessayer
            </button>
          </div>
        </div>}
      <img src={dashboardPreview} alt="Tableau de bord personnalisé avec métriques et graphiques en temps réel" className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${imageState === 'loaded' ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setImageState('loaded')} onError={() => setImageState('error')} />
    </div>;
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
        <div className="mt-20 overflow-hidden">
          <PulseBeams beams={beams} gradientColors={gradientColors} width={1200} height={600} className="bg-background rounded-3xl h-[400px] md:h-[600px]">
            <a href="tel:+15818725167" className="bg-slate-800 w-[320px] z-40 h-[120px] no-underline group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex justify-center w-[320px] text-center space-x-2 h-[120px] items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span className="md:text-4xl text-xl inline-block bg-clip-text bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300 bg-primary font-sans text-center font-medium text-white/25">
                  Testez un agent
                </span>
              </div>
            </a>
          </PulseBeams>
        </div>

        {/* Dashboard Preview Section */}
        <div>
          <ContainerScroll titleComponent={<div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Suivez vos clients et vos données
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Supervisez vos automatisations et bien plus encore avec des tableaux de bord ou CRM personnalisés et intuitifs.</p>
              </div>}>
            <DashboardImage />
          </ContainerScroll>
        </div>
      </div>
    </section>;
}