import { ContactSection } from "@/components/ui/contact";
import { useToast } from "@/hooks/use-toast";

export function FinalCTA() {
  const { toast } = useToast();

  const handleSubmit = (data: any) => {
    toast({
      title: "Demande reçue!",
      description: "Nous vous contacterons dans les 24 heures pour planifier votre consultation."
    });
  };

  return <ContactSection onSubmit={handleSubmit} />;
}