import FAQs from "@/components/ui/faq";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FAQ() {
  return (
    <section id="faq">
      <ScrollReveal animation="fade-up" config={{ delay: 0.1 }}>
        <FAQs />
      </ScrollReveal>
    </section>
  );
}
