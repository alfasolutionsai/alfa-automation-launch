import React from 'react';
import { Button } from '@/components/ui/neon-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from "lucide-react";
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
  riskReversal = "100% gratuit. Aucune carte de crédit requise. Voyez les résultats avant d'investir.",
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
    // Redirect to Calendly
    window.location.href = "https://calendly.com/alfasolutionsai/30min";
  };
  return <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{
      backgroundImage: `url(${backgroundImageSrc})`
    }} />
      
      {/* Animated Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({
        length: 12
      }).map((_, i) => <div key={i} className="absolute bg-primary/10 rounded-full animate-bubble opacity-0" style={{
        width: `${Math.random() * 30 + 15}px`,
        height: `${Math.random() * 30 + 15}px`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${Math.random() * 15 + 12}s`,
        top: `${Math.random() * 100}%`
      }} />)}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Calendar className="h-4 w-4" />
              Consultation Gratuite
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              {subtitle}
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {supportingCopy}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-border/50 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input id="name" name="name" placeholder="Jean Dupont" value={formData.name} onChange={handleChange} required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise *</Label>
                  <Input id="company" name="company" placeholder="Votre Entreprise Inc." value={formData.company} onChange={handleChange} required className="bg-background/50" />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" placeholder="jean@entreprise.com" value={formData.email} onChange={handleChange} required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange} className="bg-background/50" />
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-2">
                <Label htmlFor="industry">Industrie / Type d'entreprise *</Label>
                <Input id="industry" name="industry" placeholder="Ex: Commerce de détail, Services professionnels, Santé..." value={formData.industry} onChange={handleChange} required className="bg-background/50" />
              </div>

              {/* Challenges */}
              <div className="space-y-2">
                <Label htmlFor="challenges">Quels sont vos principaux défis opérationnels actuellement? *</Label>
                <Textarea id="challenges" name="challenges" placeholder="Décrivez les problèmes que vous rencontrez au quotidien..." rows={8} value={formData.challenges} onChange={handleChange} required className="bg-background/50 resize-none" />
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button type="submit" size="lg" className="w-full text-lg text-blue-700">
                  Réserver ma consultation gratuite
                </Button>
                
                {/* Risk Reversal */}
                <p className="text-center text-sm text-muted-foreground">
                  {riskReversal}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CSS for bubble animation */}
      <style dangerouslySetInnerHTML={{
      __html: `
          @keyframes bubble {
            0% {
              transform: translateY(0) translateX(0) scale(0.5);
              opacity: 0;
            }
            50% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-100vh) translateX(calc((var(--rand-x-offset, 0.5) - 0.5) * 20vw)) scale(1.2);
              opacity: 0;
            }
          }
          .animate-bubble {
            animation: bubble var(--animation-duration, 15s) ease-in-out infinite;
            animation-fill-mode: forwards;
          }
        `
    }} />
    </section>;
};