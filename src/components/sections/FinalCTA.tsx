import { ContactSection } from "@/components/ui/contact";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FinalCTA() {
  const { toast } = useToast();

  const handleSubmit = (data: any) => {
    toast({
      title: "Demande reçue!",
      description: "Nous vous contacterons dans les 24 heures pour planifier votre consultation."
    });
  };

  return (
    <ScrollReveal animation="fade-up" config={{ delay: 0.1 }}>
      <ContactSection onSubmit={handleSubmit} />
    </ScrollReveal>
  );
}
