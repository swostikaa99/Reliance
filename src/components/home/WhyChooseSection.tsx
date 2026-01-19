import { Award, Users, BookCheck, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Every publication undergoes rigorous peer review and editorial scrutiny to ensure the highest standards of academic quality and accuracy.",
  },
  {
    icon: Users,
    title: "Trusted by Institutions",
    description:
      "Over 500 universities, colleges, and educational institutions rely on our publications for their curriculum and research needs.",
  },
  {
    icon: BookCheck,
    title: "Quality Publications",
    description:
      "Our meticulous production process ensures beautifully crafted books with premium materials that stand the test of time.",
  },
  {
    icon: Shield,
    title: "Expert Authors",
    description:
      "We partner with leading academics, researchers, and subject matter experts to bring authoritative content to our readers.",
  },
];

const WhyChooseSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 scroll-animate scroll-fade-in",
            headerVisible && "is-visible",
          )}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Excellence in Every Page
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Discover what makes Reliance Publication House the preferred choice
            for academic publishing
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "text-center p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 scroll-animate scroll-slide-up",
                gridVisible && "is-visible",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
