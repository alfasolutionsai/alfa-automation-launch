import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { FeaturesSectionMinimal } from "@/components/ui/bento-monochrome";
import { Wrench, Cloud, Settings, Rocket, Lock } from "lucide-react";
export function Solutions() {
  const features = [{
    title: "Sécurité et confidentialité",
    blurb: "Nos systèmes sécurisés protègent parfaitement vos informations et nos solutions garantissent la sécurité et la confidentialité de vos données et celles de vos clients. Tous nos systèmes les lois relatives à la protection des renseignements personnels ou n'importe quelle règles de conformités spécifiques à votre industrie ou votre entreprise. Avec Alfa vous pouvez avoir la conscience tranquille et vous concentrez sur ce qui compte vraiment.",
    meta: "Sécurité",
    icon: Lock,
    animation: "bento2-glow 7s ease-in-out infinite"
  }, {
    title: "Intégration facile et rapide",
    blurb: "Se connecte parfaitement à vos outils actuels sans mal de tête technique ni formation compliquée pour votre équipe. Aucune interruption, tout roule dès le jour 1.",
    meta: "Intégration",
    icon: Cloud,
    animation: "bento2-pulse 4s ease-in-out infinite"
  }, {
    title: "Tableaux de bord personnalisés",
    blurb: "Des tableaux de bord et CRM faits pour vous montrer exactement ce dont vous avez besoin et suivre vos clients comme vous le souhaitez. Une vision claire, des données utiles et un contrôle total.",
    meta: "Tableaux",
    icon: Settings,
    animation: "bento2-tilt 5.5s ease-in-out infinite"
  }, {
    title: "Pensé pour la croissance",
    blurb: "Conçu pour vous aider à augmenter vos revenus, pas seulement à économiser du temps. Plus de volume, plus de clients et plus de profit sans agrandir votre équipe.",
    meta: "Croissance",
    icon: Rocket,
    animation: "bento2-drift 8s ease-in-out infinite"
  }, {
    title: "Vraiment fait sur mesure",
    blurb: "Construit exactement pour vos opérations, pas de logiciel générique imposé. Tout fonctionne comme vos processus actuels. Zéro friction, zéro adaptation forcée.",
    meta: "Sur mesure",
    icon: Wrench,
    animation: "bento2-float 6s ease-in-out infinite"
  }];
  return <section id="solutions" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Featured 3D Section */}
        <Card className="w-full h-[500px] mb-16 bg-card relative overflow-hidden border-border">
          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">IA sur mesure qui travaille comme VOUS travaillez</h2>
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
      </div>

      {/* Stack Integration Section - Full Width */}
      <div className="w-full">
        <StackFeatureSection headline="Nos systèmes s'intègrent aux outils que vous connaissez et aimez" subheadline="Alfa offre des intégrations avec plus de 500 outils standards utilisés par les entreprises. Nos services vous permettent d'améliorer vos opérations existantes tout en vous permettant de continuer d'utiliser les outils que vous connaissez déjà." />
      </div>

      {/* Key Differentiators */}
      <div className="container mx-auto px-4">
        <div className="mt-20">
          <FeaturesSectionMinimal features={features} headline="Tout ce qu'il faut pour opérer mieux" subheadline="" />
        </div>
      </div>
    </section>;
}