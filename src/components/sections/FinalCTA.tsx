import { ContactSection } from "@/components/ui/contact";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit contenir moins de 100 caractères"),
  company: z.string().trim().min(1, "L'entreprise est requise").max(200, "L'entreprise doit contenir moins de 200 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email doit contenir moins de 255 caractères"),
  phone: z.string().trim().max(20, "Le téléphone doit contenir moins de 20 caractères").optional().or(z.literal('')),
  industry: z.string().trim().min(1, "L'industrie est requise").max(200, "L'industrie doit contenir moins de 200 caractères"),
  challenges: z.string().trim().min(1, "Les défis sont requis").max(5000, "Les défis doivent contenir moins de 5000 caractères")
});

export function FinalCTA() {
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      // Validate input data
      const validatedData = leadSchema.parse(data);

      const { error } = await supabase
        .from('leads')
        .insert({
          name: validatedData.name,
          company: validatedData.company,
          email: validatedData.email,
          phone: validatedData.phone || null,
          industry: validatedData.industry,
          challenges: validatedData.challenges
        });

      if (error) throw error;

      toast({
        title: "Formulaire envoyé!",
        description: "Vous pouvez maintenant réserver votre consultation gratuite. Vous recevrez votre audit gratuit par courriel d'ici 48 heures."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        console.error('Form submission failed');
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    }
  };

  return <ContactSection onSubmit={handleSubmit} />;
}