import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);
  const links = [{
    label: 'À propos',
    href: '#about'
  }, {
    label: 'Services',
    href: '#services'
  }, {
    label: 'Processus',
    href: '#process'
  }, {
    label: 'FAQ',
    href: '#faq'
  }];
  return <header className={cn('sticky top-5 z-50', 'mx-auto w-full max-w-7xl rounded-lg border shadow', 'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg')}>
      <nav className="mx-auto flex items-center justify-between p-1.5">
        <div className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">A</span>
          </div>
          <p className="text-base font-bold">Alfa Solutions</p>
        </div>
        
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(link => <a key={link.label} className={buttonVariants({
          variant: 'ghost',
          size: 'sm'
        })} href={link.href}>
              {link.label}
            </a>)}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          
          <Button variant="ghost" size="sm">Connexion</Button>
          <Button size="sm">Commencer</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="ghost" size="sm">Connexion</Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <Button size="icon" variant="outline" onClick={() => setOpen(!open)}>
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg" showClose={false} side="left">
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                <Badge variant="outline" className="gap-1.5 px-3 py-1.5 text-xs font-medium mb-4 w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M12 2L9 9H2l6 4.5L5 22l7-5 7 5-3-8.5L22 9h-7l-3-7z" />
                  </svg>
                  Entreprise fièrement québécoise
                </Badge>
                {links.map(link => <a key={link.label} className={buttonVariants({
                variant: 'ghost',
                className: 'justify-start'
              })} href={link.href}>
                    {link.label}
                  </a>)}
              </div>
              <SheetFooter>
                <Button variant="outline">Connexion</Button>
                <Button>Commencer</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>;
}