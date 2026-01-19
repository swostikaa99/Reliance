import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "/lib/utils";

const Message = () => {
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-navy-dark to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={contentRef}
            className={cn(
              "scroll-animate scroll-slide-up",
              contentVisible && "is-visible",
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
              <Quote className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Leadership Message
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Message From <span className="text-gradient-gold">Chairman</span>
            </h2>

            <div className="space-y-6 text-primary-foreground/90 leading-relaxed">
              <p className="text-lg font-medium">
                <span className="text-accent font-semibold">Namaskar!</span>
              </p>

              <p className="text-base">
                <span className="text-accent font-semibold">
                  The Reliance Publication House was established in 2065
                </span>{" "}
                with the fundamental motto of Scientific Education For All. The
                fact that, just within a short span of time, Reliant Books have
                become a craze among the students as well as teachers, is a
                matter of immense satisfaction. It is a general belief that
                behind every successful story, there is some force and I believe
                in my case, is the trust of readers in Reliant Books. It is only
                their persistent faith that keeps on motivating me to give them
                the best of-to-date books year after year.
              </p>

              <p className="text-base text-primary-foreground/80 italic">
                My foremost effort is to provide students with the proper
                knowledge of subject matter: as you know "less eating and over
                eating" are not good for sound health. So, I have tried to
                present the books in detail, however, strictly according to the
                syllabus. Learning becomes easy and purposeful if one is aware
                of the goals and targets of study. Thus, a lucid introduction to
                the chapter has ever been given to stimulate the interest of the
                learners in the respective topics. Informal and interactive
                style has been used throughout the text.
              </p>

              {/* Signature */}
              <div className="pt-6 border-t border-primary-foreground/20">
                <p className="text-primary-foreground font-semibold text-lg">
                  Chairman
                </p>
                <p className="text-accent font-medium">
                  Reliance Publication House Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className={cn(
              "scroll-animate scroll-zoom-in",
              imageVisible && "is-visible",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative group">
              {/* Decorative Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-gold-dark rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />

              {/* Image Container */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-elegant transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted">
                  {/* Chairman's Photo */}
                  <img
                    src="/chairperson.png"
                    alt="Chairman - Reliance Publication House"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay Border */}
                <div className="absolute inset-0 border-4 border-accent/30 rounded-2xl" />
              </div>

              {/* Quote Icon Decoration */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-elegant animate-in zoom-in duration-700 delay-700">
                <Quote className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
