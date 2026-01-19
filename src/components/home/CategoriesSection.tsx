import { Link } from "react-router-dom";
import {
  BookOpen,
  Microscope,
  GraduationCap,
  Briefcase,
  Palette,
  Globe,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const categories = [
  {
    icon: BookOpen,
    title: "Literature",
    description: "Classic and contemporary literary works, poetry, and fiction",
    count: "450+ Books",
    path: "/publications?category=literature",
  },
  {
    icon: Microscope,
    title: "Science & Technology",
    description:
      "Cutting-edge research, textbooks, and scientific publications",
    count: "380+ Books",
    path: "/publications?category=science",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Teaching resources, curricula, and pedagogical guides",
    count: "520+ Books",
    path: "/publications?category=education",
  },
  {
    icon: Briefcase,
    title: "Business & Economics",
    description: "Management, finance, and economic theory publications",
    count: "290+ Books",
    path: "/publications?category=business",
  },
  {
    icon: Palette,
    title: "Arts & Humanities",
    description: "History, philosophy, art, and cultural studies",
    count: "340+ Books",
    path: "/publications?category=arts",
  },
  {
    icon: Globe,
    title: "Social Sciences",
    description: "Psychology, sociology, political science, and more",
    count: "410+ Books",
    path: "/publications?category=social",
  },
];

const CategoriesSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-24 gradient-subtle">
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
            Our Collection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our extensive range of academic publications across diverse
            fields of study
          </p>
        </div>

        {/* Categories Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className={cn(
                "group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover hover-lift border border-border/50 scroll-animate scroll-slide-up",
                gridVisible && "is-visible",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <category.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Count Badge */}
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
