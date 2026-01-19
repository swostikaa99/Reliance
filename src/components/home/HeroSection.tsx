import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const useCounter = (
  end: number,
  duration: number = 2000,
  delay: number = 0,
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, duration, delay]);

  return count;
};

const HeroSection = () => {
  const years = useCounter(28, 3500, 600);
  const publications = useCounter(2500, 3500, 600);
  const institutions = useCounter(500, 3500, 600);
  const students = useCounter(1000000, 3500, 600);

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-in fade-in zoom-in duration-700">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground/90">
              Trusted by 500+ Academic Institutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-[1500ms] delay-150">
            Empowering Minds Through
            <span className="block text-gradient-gold mt-2 animate-in fade-in slide-in-from-bottom-4 duration-[1500ms] delay-[600ms]">
              Quality Publications
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-[1500ms] delay-[900ms]">
            Reliance Publication House has been at the forefront of academic
            excellence, delivering meticulously crafted educational resources
            that inspire learning and advance knowledge.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-[1500ms] delay-[1200ms]">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-6 text-base group"
            >
              <Link to="/publications">
                Explore Our Books
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-blue hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-6 text-base group"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-foreground/10">
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {years}+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Years of Excellence
              </div>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[800ms]">
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {publications.toLocaleString()}+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Publications
              </div>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[900ms]">
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {institutions}+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Institutions Served
              </div>
            </div>
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[1000ms]">
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {(students / 1000000).toFixed(1)}M+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Students Reached
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
