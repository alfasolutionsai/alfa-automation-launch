import React from 'react';
import { buttonVariants } from '@/components/ui/neon-button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import alfaLogo from '@/assets/alfa-logo.svg';
import { CtaButton } from '@/components/ui/cta-button';

export function Header() {
  const scrolled = useScroll(10);
  const links = [{
    label: 'À propos',
    href: '#solutions'
  }, {
    label: 'Services',
    href: '#services'
  }, {
    label: 'Comment ça marche?',
    href: '#process'
  }, {
    label: 'FAQ',
    href: '#faq'
  }];

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
      'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg': scrolled
    })}>
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <a href="/" className="hover:bg-accent rounded-md p-2 flex items-center gap-1.5 md:gap-2">
          <img src={alfaLogo} alt="Alfa Solutions" className="h-7 md:h-8 w-auto" />
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {links.map(link => (
            <a key={link.label} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact">
            <CtaButton headline="Commencer" subheadline="Obtenez un audit gratuit" />
          </a>
        </div>
        <a href="#contact" className="md:hidden">
          <CtaButton headline="Commencer" subheadline="Obtenez un audit gratuit" className="text-xs [&_span:first-child]:text-xs [&_span:last-child]:text-[9px]" />
        </a>
      </nav>
    </header>
  );
}
