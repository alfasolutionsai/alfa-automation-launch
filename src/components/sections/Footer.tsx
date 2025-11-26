import alfaLogo from "@/assets/alfa-logo.svg";
export function Footer() {
  return <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="/" className="hover:bg-accent rounded-md p-2 flex items-center gap-2">
              <img src={alfaLogo} alt="Alfa Solutions" className="h-8 w-auto" />
              <span className="text-foreground font-semibold text-lg">Alfa Solutions</span>
            </a>
            <p className="text-sm text-muted-foreground">Solutions IA personnalisées pour entreprises</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Agents IA vocaux</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Automatisations de processus</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Qualification de leads</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Intégrations personnalisées</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Études de cas</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Légal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sécurité des données</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Alfa Solutions AI. Tous droits réservés. Fait au Québec </p>
        </div>
      </div>
    </footer>;
}