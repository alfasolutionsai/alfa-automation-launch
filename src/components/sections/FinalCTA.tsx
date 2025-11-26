import { ContactSection } from "@/components/ui/contact";
import { useToast } from "@/hooks/use-toast";

export function FinalCTA() {
  const { toast } = useToast();

  const handleSubmit = (data: any) => {
    toast({
      title: "Formulaire envoyé!",
      description: "Vous pouvez maintenant réserver votre consultation gratuite. Vous recevrez votre audit gratuit par courriel d'ici 48 heures."
    });
  };

  return <ContactSection onSubmit={handleSubmit} />;
}