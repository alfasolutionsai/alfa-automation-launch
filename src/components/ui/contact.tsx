import React from 'react';
import { Button } from '@/components/ui/neon-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from "lucide-react";
import StarfieldCanvas from '@/components/ui/starfield-canvas';
interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  supportingCopy?: string;
  riskReversal?: string;
  backgroundImageSrc?: string;
  onSubmit?: (data: any) => void;
}
export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Prêts à enfin faire grandir votre entreprise et arrêter de perdre du temps et de l'argent?",
  subtitle = "Réservez une consultation gratuite de 30 minutes. Nous analyserons vos processus et vous montrerons précisément les avantages que l'IA peut vous apporter.",
  supportingCopy = "Aucune obligation ou pression, juste une feuille de route claire de ce qui pourrait vous aider.",
  riskReversal = "100% gratuit. Aucune carte de crédit requise. ",
  backgroundImageSrc = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
  onSubmit
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    challenges: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit?.(formData);
    // Redirect to Calendly after successful submission
    window.location.href = "https://calendly.com/alfasolutionsai/30min";
  };
  return <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Starfield Background */}
      <StarfieldCanvas className="absolute inset-0 z-0" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-black/30 to-black/60" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6 border border-primary/30">
              <Calendar className="h-4 w-4" />
              Consultation Gratuite
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4">
              {subtitle}
            </p>
            <p className="text-base text-white/60 max-w-2xl mx-auto">
              {supportingCopy}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-black/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-primary/30 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">Nom complet *</Label>
                  <Input id="name" name="name" placeholder="Jean Dupont" value={formData.name} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white font-medium">Entreprise *</Label>
                  <Input id="company" name="company" placeholder="Votre Entreprise Inc." value={formData.company} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">Email *</Label>
                  <Input id="email" name="email" type="email" placeholder="jean@entreprise.com" value={formData.email} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-medium">Téléphone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-2">
                <Label htmlFor="industry" className="text-white font-medium">Industrie / Type d'entreprise *</Label>
                <Input id="industry" name="industry" placeholder="Ex: Commerce de détail, Services professionnels, Santé..." value={formData.industry} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>

              {/* Challenges */}
              <div className="space-y-2">
                <Label htmlFor="challenges" className="text-white font-medium">Quels sont vos principaux défis opérationnels actuellement? *</Label>
                <Textarea id="challenges" name="challenges" placeholder="Décrivez les problèmes que vous rencontrez au quotidien..." rows={8} value={formData.challenges} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none" />
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button type="submit" size="lg" className="w-full text-lg text-white">
                  Réserver ma consultation gratuite
                </Button>
                
                {/* Risk Reversal */}
                <p className="text-center text-sm text-white/70">
                  {riskReversal}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};