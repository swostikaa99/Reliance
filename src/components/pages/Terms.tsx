import {
  FileText,
  CheckCircle,
  XCircle,
  Scale,
  AlertTriangle,
  Users,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

const sections = [
  {
    icon: Users,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using our website, you accept and agree to be bound by these terms",
      "These terms apply to all visitors, users, and others who access our services",
      "If you disagree with any part of these terms, you may not use our services",
      "We reserve the right to modify these terms at any time without prior notice",
      "Your continued use after changes constitutes acceptance of the modified terms",
    ],
  },
  {
    icon: CheckCircle,
    title: "User Responsibilities",
    content: [
      "You must provide accurate and complete information when creating an account",
      "You are responsible for maintaining the confidentiality of your account credentials",
      "You must not use our services for any unlawful or unauthorized purpose",
      "You agree not to reproduce, distribute, or resell our publications without permission",
      "Any violation of these terms may result in immediate termination of your account",
    ],
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    content: [
      "All content, trademarks, and data on this website are owned by Reliance Publication House",
      "Publications are protected by copyright and other intellectual property laws",
      "Unauthorized use, reproduction, or distribution is strictly prohibited",
      "Fair use exceptions apply for educational and research purposes as defined by law",
      "Authors retain certain rights as specified in their publishing agreements",
    ],
  },
  {
    icon: Scale,
    title: "Purchases & Payments",
    content: [
      "All prices are listed in the specified currency and subject to change",
      "Payment must be received in full before digital content is delivered",
      "We accept various payment methods as displayed during checkout",
      "Refunds are subject to our refund policy and must be requested within the specified period",
      "Bulk purchase discounts and institutional licenses are available upon request",
    ],
  },
  {
    icon: XCircle,
    title: "Prohibited Activities",
    content: [
      "Attempting to gain unauthorized access to our systems or user accounts",
      "Using automated systems or bots to access our services without permission",
      "Uploading or distributing malicious code, viruses, or harmful software",
      "Impersonating any person or entity, or falsely stating your affiliation",
      "Engaging in activities that could damage, disable, or impair our services",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: [
      "Services are provided 'as is' without warranties of any kind, express or implied",
      "We are not liable for any indirect, incidental, or consequential damages",
      "Our total liability shall not exceed the amount you paid for the specific service",
      "We do not guarantee uninterrupted or error-free operation of our services",
      "You use our services at your own risk and discretion",
    ],
  },
];

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500 delay-150">
              <Scale className="w-10 h-10 text-accent" />
            </div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Legal Agreement
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Please read these terms carefully before using our services. Last
              updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to Reliance Publication House. These Terms of Service
              govern your use of our website and services. By accessing or using
              our services, you agree to comply with and be bound by these
              terms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These terms constitute a legally binding agreement between you and
              Reliance Publication House Pvt. Ltd. Please read them carefully.
              If you do not agree to these terms, you should not use our
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Additional Terms */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 animate-in fade-in duration-700">
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of Nepal, without regard to its conflict of law
                provisions. Any disputes arising from these terms shall be
                subject to the exclusive jurisdiction of the courts in
                Kathmandu, Nepal.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 animate-in fade-in duration-700 delay-150">
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any
                time. Material changes will be notified through our website or
                via email. Your continued use of our services after any changes
                constitutes acceptance of the new Terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-8 lg:p-12 text-primary-foreground text-center animate-in fade-in zoom-in duration-700">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about our Terms of Service,
              our legal team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent hover:bg-gold-dark text-accent-foreground font-medium transition-all duration-200 hover-lift"
              >
                Contact Legal Team
              </a>
              <a
                href="mailto:legal@reliancepublication.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-medium transition-all duration-200"
              >
                legal@reliancepublication.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
