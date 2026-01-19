import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const { elementRef: imageRef, isVisible: imageVisible } =
    useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            ref={imageRef}
            className={cn(
              "relative scroll-animate scroll-slide-up",
              imageVisible && "is-visible",
            )}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Library with extensive book collection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-xl p-6 shadow-elegant max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-serif text-xl font-bold text-accent-foreground">
                    28
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    Years of Excellence
                  </p>
                  <p className="text-sm text-muted-foreground">Since 1995</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            ref={contentRef}
            className={cn(
              "scroll-animate scroll-slide-up",
              contentVisible && "is-visible",
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6">
              A Legacy of Academic Publishing Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Founded in 1995, Reliance Publication House has established
                itself as a cornerstone of academic publishing in India. Our
                unwavering commitment to quality and scholarly rigor has made us
                the publisher of choice for leading educators and researchers.
              </p>
              <p>
                We take pride in our meticulous editorial process, ensuring that
                every publication meets the highest standards of academic
                integrity. Our diverse catalog spans multiple disciplines,
                serving the evolving needs of students, educators, and
                institutions across the nation.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: "2,500+", label: "Publications" },
                { value: "500+", label: "Institutional Partners" },
                { value: "850+", label: "Expert Authors" },
                { value: "15+", label: "Academic Disciplines" },
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-accent pl-4">
                  <div className="font-serif text-2xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-primary hover:bg-navy-light text-primary-foreground group"
            >
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
