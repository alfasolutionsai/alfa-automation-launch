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
            <p className="text-sm text-muted-foreground">Solutions IA personnalisées pour entreprises </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Voice AI Agents</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Lead Qualification</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Alfa Solutions. Tous droits réservés. Fait au Québec </p>
        </div>
      </div>
    </footer>;
}