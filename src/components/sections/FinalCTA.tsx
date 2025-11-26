import { ContactSection } from "@/components/ui/contact";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function FinalCTA() {
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone || null,
          industry: data.industry,
          challenges: data.challenges
        });

      if (error) throw error;

      toast({
        title: "Formulaire envoyé!",
        description: "Vous pouvez maintenant réserver votre consultation gratuite. Vous recevrez votre audit gratuit par courriel d'ici 48 heures."
      });
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    }
  };

  return <ContactSection onSubmit={handleSubmit} />;
}