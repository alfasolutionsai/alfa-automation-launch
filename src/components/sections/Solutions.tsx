import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconLock,
  IconRocket,
  IconTool,
} from "@tabler/icons-react";
export function Solutions() {
  const features = [
    {
      title: "Vraiment fait sur mesure",
      description: "Construit exactement pour vos opérations, pas de logiciel générique imposé. Tout fonctionne comme vos processus actuels. Zéro friction, zéro adaptation forcée.",
      icon: <IconTool className="w-6 h-6" />,
    },
    {
      title: "Intégration facile et rapide",
      description: "Se connecte parfaitement à vos outils actuels sans mal de tête technique ni formation compliquée pour votre équipe. Aucune interruption, tout roule dès le jour 1.",
      icon: <IconCloud className="w-6 h-6" />,
    },
    {
      title: "Tableaux de bord personnalisés",
      description: "Des tableaux de bord et CRM faits pour vous montrer exactement ce dont vous avez besoin et suivre vos clients comme vous le souhaitez. Une vision claire, des données utiles et un contrôle total.",
      icon: <IconAdjustmentsBolt className="w-6 h-6" />,
    },
    {
      title: "Pensé pour la croissance",
      description: "Conçu pour vous aider à augmenter vos revenus, pas seulement à économiser du temps. Plus de volume, plus de clients et plus de profit sans agrandir votre équipe.",
      icon: <IconRocket className="w-6 h-6" />,
    },
    {
      title: "Sécurité et confidentialité",
      description: "Nos systèmes sécurisés protègent parfaitement vos informations et nos solutions garantissent la sécurité et la confidentialité de vos données et celles de vos clients. Tous nos systèmes les lois relatives à la protection des renseignements personnels ou n'importe quelle règles de conformités spécifiques à votre industrie ou votre entreprise. Avec Alfa vous pouvez avoir la conscience tranquille et vous concentrez sur ce qui compte vraiment.",
      icon: <IconLock className="w-6 h-6" />,
    },
  ];

  return <section id="solutions" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Featured 3D Section */}
        <Card className="w-full h-[500px] mb-16 bg-card relative overflow-hidden border-border">
          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Une IA sur mesure qui travaille comme VOUS travaillez
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Alfa crée des systèmes d'IA adaptés à vos processus d'affaires. Pas des outils génériques que vous devez tordre pour faire fonctionner. On construit des automatisations intelligentes conçues autour de votre manière réelle de travailler.
              </p>
            </div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative hidden md:block">
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
            </div>
          </div>
        </Card>

        {/* Stack Integration Section */}
        <StackFeatureSection 
          headline="Nos systèmes s'intègrent aux outils que vous connaissez et aimez"
          subheadline="Alfa offre des intégrations avec plus de 500 outils standards utilisés par les entreprises. Nos services vous permettent d'améliorer vos opérations existantes tout en vous permettant de continuer d'utiliser les outils que vous connaissez déjà."
        />

        {/* Key Differentiators */}
        <div className="mt-20">
          <FeaturesSectionWithHoverEffects features={features} />
        </div>
      </div>
    </section>;
}