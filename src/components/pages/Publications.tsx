import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";

const categories = [
  { id: "all", name: "All Categories" },
  { id: "literature", name: "Literature" },
  { id: "science", name: "Science & Technology" },
  { id: "education", name: "Education" },
  { id: "business", name: "Business & Economics" },
  { id: "arts", name: "Arts & Humanities" },
  { id: "social", name: "Social Sciences" },
];

const publications = [
  {
    id: 1,
    title: "Foundations of Modern Physics",
    author: "Dr. Rajesh Kumar",
    category: "science",
    categoryLabel: "Science",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2024,
  },
  {
    id: 2,
    title: "Advanced Calculus for Engineers",
    author: "Prof. Anita Sharma",
    category: "science",
    categoryLabel: "Mathematics",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2024,
  },
  {
    id: 3,
    title: "Principles of Economics",
    author: "Dr. Vikram Patel",
    category: "business",
    categoryLabel: "Business",
    cover:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2023,
  },
  {
    id: 4,
    title: "History of Indian Literature",
    author: "Prof. Meera Iyer",
    category: "literature",
    categoryLabel: "Literature",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2023,
  },
  {
    id: 5,
    title: "Educational Psychology",
    author: "Dr. Sunita Menon",
    category: "education",
    categoryLabel: "Education",
    cover:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2024,
  },
  {
    id: 6,
    title: "Art Through the Ages",
    author: "Prof. Arun Desai",
    category: "arts",
    categoryLabel: "Arts",
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2023,
  },
  {
    id: 7,
    title: "Introduction to Sociology",
    author: "Dr. Priya Nair",
    category: "social",
    categoryLabel: "Social Sciences",
    cover:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2024,
  },
  {
    id: 8,
    title: "Organic Chemistry Essentials",
    author: "Prof. Ramesh Gupta",
    category: "science",
    categoryLabel: "Science",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2023,
  },
  {
    id: 9,
    title: "Modern Marketing Strategies",
    author: "Dr. Kavita Singh",
    category: "business",
    categoryLabel: "Business",
    cover:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2024,
  },
  {
    id: 10,
    title: "Contemporary World Poetry",
    author: "Prof. Lakshmi Rao",
    category: "literature",
    categoryLabel: "Literature",
    cover:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2024,
  },
  {
    id: 11,
    title: "Curriculum Development",
    author: "Dr. Neha Kapoor",
    category: "education",
    categoryLabel: "Education",
    cover:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2023,
  },
  {
    id: 12,
    title: "Philosophy of Mind",
    author: "Prof. Sanjay Joshi",
    category: "arts",
    categoryLabel: "Philosophy",
    cover:
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2024,
  },
];

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publications.filter((pub) => {
    const matchesCategory =
      activeCategory === "all" || pub.category === activeCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700">
              Our Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Publications
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Explore our extensive catalog of academic publications spanning
              multiple disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-card border-b border-border sticky top-[72px] z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground mr-2 hidden sm:block" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-primary"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredPublications.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {filteredPublications.length} publication
                {filteredPublications.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredPublications.map((book, index) => (
                  <Link
                    key={book.id}
                    to={`/publications/${book.id}`}
                    className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${(index % 8) * 100 + 700}ms` }}
                  >
                    <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover-lift border border-border/50">
                      {/* Book Cover */}
                      <div className="aspect-[3/4] overflow-hidden bg-secondary">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Book Info */}
                      <div className="p-5">
                        {/* Category & Year */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-secondary text-primary">
                            {book.categoryLabel}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {book.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors line-clamp-2">
                          {book.title}
                        </h3>

                        {/* Author */}
                        <p className="text-sm text-muted-foreground">
                          by {book.author}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No publications found
              </p>
              <Button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us for custom publications, bulk orders, or to inquire
              about upcoming releases.
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-navy-light text-primary-foreground"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;
