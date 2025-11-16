import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Est-ce que ça va être compliqué à utiliser?',
            answer: 'Non. On construit des systèmes intuitifs et faciles pour votre équipe. On fournit aussi la formation complète et le support continu. Si vous savez utiliser un courriel et un calendrier, vous pouvez utiliser nos solutions.',
        },
        {
            id: 'item-2',
            question: 'Est-ce que ça va fonctionner avec mes logiciels actuels?',
            answer: 'Oui. On s\'intègre à pratiquement tous les outils que vous utilisez déjà que ce soit prise de rendez-vous, CRM, e-mails, système de paiement, etc. Aucun besoin de remplacer ce qui fonctionne.',
        },
        {
            id: 'item-3',
            question: 'Combien de temps dure l\'implémentation?',
            answer: 'La majorité de nos clients sont opérationnels en 2 à 4 semaines mais tout cela dépend des solutions choisies et de vos systèmes. On s\'occupe de tout l\'aspect technique pendant que vous continuez de gérer votre entreprise.',
        },
        {
            id: 'item-4',
            question: 'Et si mes besoins changent?',
            answer: 'C\'est tout l\'intérêt de l\'IA sur mesure. À mesure que votre entreprise évolue, on ajoute de nouvelles automatisations et on adapte celles en place. Vous n\'êtes jamais coincé avec un logiciel rigide.',
        },
        {
            id: 'item-5',
            question: 'Est-ce que j\'ai besoin de connaissances techniques?',
            answer: 'Pas du tout. On gère toute la complexité. Vous nous dites simplement les problèmes à régler, et on construit la solution.',
        },
        {
            id: 'item-6',
            question: 'Comment fonctionnent les prix?',
            answer: 'On commence par un audit gratuit pour comprendre vos besoins, puis on vous propose une offre personnalisée. L\'implémentation comporte des frais uniques, suivis d\'un abonnement mensuel pour la maintenance, le support et l\'optimisation continue. On discutera des détails lors de votre appel stratégique.',
        },
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Questions fréquentes</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Tout ce que vous devez savoir sur nos solutions d'automatisation par IA pour votre entreprise québécoise.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Vous avez d'autres questions?{' '}
                        <a
                            href="#contact"
                            className="text-primary font-medium hover:underline">
                            Contactez notre équipe
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
