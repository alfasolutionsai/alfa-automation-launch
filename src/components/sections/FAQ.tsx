import { FAQMonochrome } from "@/components/ui/faq-monocrhome";

const faqs = [
  {
    question: "Est-ce que ça va être compliqué à utiliser?",
    answer: "Non. On construit des systèmes intuitifs et faciles pour votre équipe. On fournit aussi la formation complète et le support continu. Si vous savez utiliser un courriel et un calendrier, vous pouvez utiliser nos solutions.",
    meta: "Facilité"
  },
  {
    question: "Est-ce que ça va fonctionner avec mes logiciels actuels?",
    answer: "Oui. On s'intègre à pratiquement tous les outils que vous utilisez déjà que ce soit prise de rendez-vous, CRM, e-mails, système de paiement, etc. Aucun besoin de remplacer ce qui fonctionne.",
    meta: "Intégration"
  },
  {
    question: "Combien de temps dure l'implémentation?",
    answer: "La majorité de nos clients sont opérationnels en 2 à 4 semaines mais tout cela dépend des solutions choisies et de vos systèmes. On s'occupe de tout l'aspect technique pendant que vous continuez de gérer votre entreprise.",
    meta: "Délais"
  },
  {
    question: "Et si mes besoins changent?",
    answer: "C'est tout l'intérêt de l'IA sur mesure. À mesure que votre entreprise évolue, on ajoute de nouvelles automatisations et on adapte celles en place. Vous n'êtes jamais coincé avec un logiciel rigide.",
    meta: "Flexibilité"
  },
  {
    question: "Est-ce que j'ai besoin de connaissances techniques?",
    answer: "Pas du tout. On gère toute la complexité. Vous nous dites simplement les problèmes à régler, et on construit la solution.",
    meta: "Expertise"
  },
  {
    question: "Comment fonctionnent les prix?",
    answer: "On commence par un audit gratuit pour comprendre vos besoins, puis on vous propose une offre personnalisée. L'implémentation comporte des frais uniques, suivis d'un abonnement mensuel pour la maintenance, le support et l'optimisation continue. On discutera des détails lors de votre appel stratégique.",
    meta: "Tarification"
  }
];

export function FAQ() {
  return (
    <section id="faq">
      <FAQMonochrome 
        faqs={faqs}
        title="Questions fréquentes"
        subtitle="Questions"
        description="Tout ce que vous devez savoir sur nos solutions d'automatisation par IA"
      />
    </section>
  );
}