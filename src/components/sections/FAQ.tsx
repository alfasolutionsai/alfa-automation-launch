import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "How long does implementation actually take?",
  answer: "Most systems are live within 14 days. We start with a discovery call to understand your needs, then build, test, and deploy. You'll see progress within the first week."
}, {
  question: "What if it doesn't work for my business?",
  answer: "Before we build anything, we conduct a thorough analysis to ensure AI automation is right for your business. If for any reason you're not satisfied, we'll work with you to make it right or provide a full refund within the first 30 days."
}, {
  question: "Do I need technical knowledge?",
  answer: "Not at all. We handle all the technical heavy lifting. You'll get a system that's simple to use, and we provide complete training for your team."
}, {
  question: "How much does it cost?",
  answer: "Pricing depends on the complexity of your automation needs. Most clients invest between $2,000-$5,000/month and see ROI within 3 months. We'll provide a detailed quote after understanding your specific requirements."
}, {
  question: "Will this integrate with my existing tools?",
  answer: "Yes. We integrate with virtually any tool you're using—CRMs, calendars, email platforms, phone systems, and more. If it has an API or integration capability, we can connect it."
}, {
  question: "What happens if something breaks?",
  answer: "We provide ongoing monitoring and support. If anything goes wrong, we'll fix it immediately. Plus, all our systems have built-in redundancy to minimize any disruption to your business."
}];
export function FAQ() {
  return <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Questions fréquentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Tout ce que vous voulez savoir sur Alfa Solutions</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
}