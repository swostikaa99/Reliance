import { Shield, Lock, Eye, UserCheck, Database, Bell } from "lucide-react";
import Layout from "@/components/layout/Layout";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal identification information (Name, email address, phone number, etc.)",
      "Educational institution details and academic credentials",
      "Payment and billing information for publication purchases",
      "Usage data and analytics to improve our services",
      "Cookies and similar tracking technologies for website optimization",
    ],
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "To process and fulfill your publication orders and requests",
      "To communicate with you about our products, services, and updates",
      "To improve our website functionality and user experience",
      "To personalize content and recommendations based on your interests",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    icon: Shield,
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your data",
      "SSL encryption for all data transmission on our platform",
      "Regular security audits and vulnerability assessments",
      "Restricted access to personal information on a need-to-know basis",
      "Secure data storage with encrypted backups",
    ],
  },
  {
    icon: Eye,
    title: "Information Sharing",
    content: [
      "We never sell your personal information to third parties",
      "Data may be shared with trusted service providers for business operations",
      "Information disclosed when required by law or legal process",
      "Anonymous, aggregated data may be used for research and analytics",
      "Partners are contractually bound to maintain confidentiality",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "Access and review your personal information at any time",
      "Request correction or deletion of inaccurate data",
      "Opt-out of marketing communications",
      "Request data portability in machine-readable format",
      "Lodge complaints with relevant data protection authorities",
    ],
  },
  {
    icon: Bell,
    title: "Cookies & Tracking",
    content: [
      "We use cookies to enhance your browsing experience",
      "Essential cookies for website functionality and security",
      "Analytics cookies to understand user behavior and improve services",
      "Marketing cookies for personalized advertising (with your consent)",
      "You can manage cookie preferences through your browser settings",
    ],
  },
];

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500 delay-150">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Your Privacy Matters
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              We are committed to protecting your privacy and ensuring the
              security of your personal information. Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Reliance Publication House, we respect your privacy and are
              committed to protecting your personal data. This privacy policy
              explains how we collect, use, store, and protect your information
              when you use our website and services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By using our services, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-primary mt-1">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-8 lg:p-12 text-primary-foreground text-center animate-in fade-in zoom-in duration-700">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or how we
              handle your data, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent hover:bg-gold-dark text-accent-foreground font-medium transition-all duration-200 hover-lift"
              >
                Contact Us
              </a>
              <a
                href="mailto:privacy@reliancepublication.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-medium transition-all duration-200"
              >
                privacy@reliancepublication.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
