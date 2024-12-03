import { FooterSection } from "./footer/footer-section";
import { FooterLink } from "./footer/footer-link";
import { NewsletterForm } from "./footer/newsletter-form";
import { LanguageSelector } from "./footer/language-selector";
import { SocialLinks } from "./footer/social-links";
import { BackToTop } from "./footer/back-to-top";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-purple-600">Tehify</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Revolutionizing digital advertising with AI-powered solutions.
                </p>
              </div>
              <NewsletterForm />
              <SocialLinks />
            </div>

            {/* Resources */}
            <FooterSection title="Resources">
              <div className="space-y-2">
                <FooterLink href="/help">Help Center</FooterLink>
                <FooterLink href="/guides">Guides</FooterLink>
                <FooterLink href="/api">API Documentation</FooterLink>
                <FooterLink href="/status">System Status</FooterLink>
                <FooterLink href="/changelog">Changelog</FooterLink>
              </div>
            </FooterSection>

            {/* Company */}
            <FooterSection title="Company">
              <div className="space-y-2">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/press">Press</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </div>
            </FooterSection>

            {/* Legal & Settings */}
            <FooterSection title="Legal & Settings">
              <div className="space-y-4">
                <div className="space-y-2">
                  <FooterLink href="/privacy">Privacy Policy</FooterLink>
                  <FooterLink href="/terms">Terms of Service</FooterLink>
                  <FooterLink href="/cookies">Cookie Policy</FooterLink>
                </div>
                <Separator />
                <LanguageSelector />
              </div>
            </FooterSection>
          </div>
        </div>

        <Separator />

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tehify. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <FooterLink href="/accessibility">Accessibility</FooterLink>
            <FooterLink href="/sitemap">Sitemap</FooterLink>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}