import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const publications = [
  {
    id: 1,
    title: "Foundations of Modern Physics",
    author: "Dr. Rajesh Kumar",
    category: "Science",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Advanced Calculus for Engineers",
    author: "Prof. Anita Sharma",
    category: "Mathematics",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Principles of Economics",
    author: "Dr. Vikram Patel",
    category: "Business",
    cover:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "History of Indian Literature",
    author: "Prof. Meera Iyer",
    category: "Literature",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const FeaturedBooks = () => {
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
            "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 scroll-animate scroll-fade-in",
            headerVisible && "is-visible",
          )}
        >
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Featured Publications
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3">
              Our Latest Releases
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group self-start md:self-auto"
          >
            <Link to="/publications">
              View All Publications
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Books Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {publications.map((book, index) => (
            <Link
              key={book.id}
              to={`/publications/${book.id}`}
              className={cn(
                "group flex scroll-animate scroll-slide-up",
                gridVisible && "is-visible",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover-lift border border-border/50 flex flex-col h-full w-full">
                {/* Book Cover */}
                <div className="aspect-[3/4] overflow-hidden bg-secondary flex-shrink-0">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Book Info */}
                <div className="p-5 flex-grow flex flex-col">
                  {/* Category Badge */}
                  <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-secondary text-primary mb-3 w-fit">
                    {book.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors line-clamp-2">
                    {book.title}
                  </h3>

                  {/* Author */}
                  <p className="text-sm text-muted-foreground mt-auto">
                    by {book.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
