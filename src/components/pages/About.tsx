import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const milestones = [
  {
    year: "1995",
    title: "Foundation",
    description:
      "Reliance Publication House was established with a vision to serve academic excellence",
  },
  {
    year: "2000",
    title: "Expansion",
    description:
      "Expanded our catalog to include science, technology, and business publications",
  },
  {
    year: "2008",
    title: "500+ Publications",
    description:
      "Reached a milestone of 500 published titles across multiple disciplines",
  },
  {
    year: "2015",
    title: "Digital Revolution",
    description:
      "Launched digital editions and e-book platform for modern readers",
  },
  {
    year: "2020",
    title: "1000+ Institutions",
    description: "Partnered with over 1000 educational institutions nationwide",
  },
  {
    year: "2024",
    title: "Global Reach",
    description:
      "Expanded distribution to international markets across Asia and Europe",
  },
];

const values = [
  {
    title: "Academic Integrity",
    description:
      "We uphold the highest standards of scholarly rigor in every publication",
  },
  {
    title: "Author Partnership",
    description:
      "We treat our authors as partners, providing comprehensive support throughout the publishing journey",
  },
  {
    title: "Innovation",
    description:
      "We continuously evolve our processes to meet the changing needs of academic publishing",
  },
  {
    title: "Accessibility",
    description:
      "We strive to make quality educational content accessible to all learners",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Our Story of Academic Excellence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              For nearly three decades, Reliance Publication House has been
              nurturing knowledge and empowering minds through quality academic
              publications.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                A Legacy Built on Trust
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Reliance Publication House was founded in 1995 with a simple
                  yet profound mission: to bridge the gap between knowledge and
                  learners through meticulously crafted academic publications.
                </p>
                <p>
                  What started as a small publishing venture in New Delhi has
                  grown into one of India's most respected academic publishers.
                  Our journey has been marked by an unwavering commitment to
                  quality, a deep respect for scholarly tradition, and an
                  embrace of innovation.
                </p>
                <p>
                  Today, we proudly serve millions of students, thousands of
                  educators, and hundreds of institutions across the country.
                  Our catalog spans over 2,500 titles across 15+ academic
                  disciplines.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Historic library interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-10 shadow-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower learners and educators with high-quality academic
                resources that inspire curiosity, foster understanding, and
                advance knowledge. We are committed to maintaining the highest
                standards of editorial excellence while making education
                accessible to all.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-10 shadow-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative academic publisher in the
                region, setting new standards for quality, accessibility, and
                impact in educational publishing. We aspire to shape the future
                of learning through our publications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3">
              Milestones of Excellence
            </h2>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-foreground/20 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}
                  >
                    <div className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10">
                      <span className="text-accent font-serif text-2xl font-bold">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-xl font-semibold mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 hidden lg:block" />
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're an author, educator, or institution, we'd love to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-gold-dark text-accent-foreground px-8 group"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/publications">View Publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
