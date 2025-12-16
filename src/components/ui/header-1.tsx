import React, { useState } from 'react';
import { buttonVariants } from '@/components/ui/neon-button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import alfaLogo from '@/assets/alfa-logo.svg';
import { CtaButton } from '@/components/ui/cta-button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { MapPin } from 'lucide-react';

export function Header() {
  const scrolled = useScroll(10);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links = [
    { label: 'À propos', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Comment ça marche?', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
      scrolled && 'bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border backdrop-blur-xl'
    )}>
      <nav className="mx-auto flex h-14 sm:h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-1.5 md:gap-2 transition-opacity hover:opacity-80"
        >
          <img src={alfaLogo} alt="Alfa Solutions" className="h-6 sm:h-7 md:h-8 w-auto" />
          <span className="font-semibold text-sm sm:text-base md:text-lg text-foreground">
            Alfa Solutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {links.map(link => (
            <a 
              key={link.label} 
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-sm xl:text-base relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4'
              )} 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="ml-2">
            <CtaButton headline="Commencer" subheadline="Obtenez un audit gratuit" />
          </a>
        </div>

        {/* Mobile/Tablet: CTA + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a href="#contact">
            <CtaButton 
              headline="Commencer" 
              subheadline="Audit gratuit" 
              className="text-xs [&_span:first-child]:text-xs [&_span:last-child]:text-[9px]" 
            />
          </a>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button 
                className="p-2 rounded-md hover:bg-accent transition-colors"
                aria-label="Menu"
              >
                <MenuToggleIcon 
                  open={mobileMenuOpen} 
                  className="h-6 w-6 text-foreground" 
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col h-full pt-8">
                {/* Quebec badge */}
                <div className="flex items-center gap-2 px-2 py-3 mb-4 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Entreprise fièrement québécoise</span>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                  {links.map(link => (
                    <SheetClose asChild key={link.label}>
                      <a 
                        href={link.href}
                        onClick={handleLinkClick}
                        className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                
                {/* CTA at bottom */}
                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <a href="#contact" onClick={handleLinkClick} className="block">
                      <CtaButton 
                        headline="Commencer" 
                        subheadline="Obtenez un audit gratuit" 
                        className="w-full justify-center"
                      />
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}