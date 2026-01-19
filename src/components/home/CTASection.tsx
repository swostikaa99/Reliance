import { Link } from "react-router-dom";
import { ArrowRight, PenLine, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const CTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={elementRef} className="grid md:grid-cols-2 gap-8">
          {/* For Authors */}
          <div
            className={cn(
              "relative bg-primary rounded-2xl p-10 lg:p-12 overflow-hidden group scroll-animate scroll-slide-up",
              isVisible && "is-visible",
            )}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <PenLine className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                Are You an Author?
              </h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Join our prestigious network of academic authors. We offer
                comprehensive publishing support, competitive royalties, and
                global distribution for your scholarly works.
              </p>
              <Button
                asChild
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group/btn"
              >
                <Link to="/contact?type=author">
                  Submit Your Manuscript
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* For Institutions */}
          <div
            className={cn(
              "relative bg-secondary rounded-2xl p-10 lg:p-12 overflow-hidden group border border-border scroll-animate scroll-slide-up",
              isVisible && "is-visible",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Background Pattern */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Building className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-4">
                Institutional Partnership
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Partner with us for bulk orders, custom publications, and
                exclusive institutional licensing. We offer special rates and
                dedicated support for educational institutions.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-navy-light text-primary-foreground group/btn"
              >
                <Link to="/contact?type=institution">
                  Become a Partner
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
