import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blogCategories = [
  "All Posts",
  "Education",
  "Publishing",
  "Academic Tips",
  "Industry News",
  "Success Stories",
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Academic Publishing in Digital Age",
    excerpt:
      "Exploring how digital transformation is reshaping the landscape of academic publishing and what it means for students and educators.",
    author: "Dr. Rajesh Kumar",
    date: "January 15, 2026",
    readTime: "5 min read",
    category: "Publishing",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "10 Effective Study Techniques for Academic Excellence",
    excerpt:
      "Discover proven study methods that can help students maximize their learning potential and achieve better academic results.",
    author: "Prof. Anita Sharma",
    date: "January 12, 2026",
    readTime: "7 min read",
    category: "Academic Tips",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "How Quality Educational Resources Transform Learning",
    excerpt:
      "Understanding the impact of well-researched and carefully crafted educational materials on student success.",
    author: "Dr. Vikram Patel",
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "From Student to Scholar: Success Stories",
    excerpt:
      "Inspiring journeys of students who excelled with the help of Reliance publications and dedicated mentorship.",
    author: "Prof. Meera Iyer",
    date: "January 8, 2026",
    readTime: "8 min read",
    category: "Success Stories",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "The Role of Publishers in Educational Development",
    excerpt:
      "An in-depth look at how publication houses contribute to the advancement of education and knowledge dissemination.",
    author: "Dr. Sanjay Gupta",
    date: "January 5, 2026",
    readTime: "5 min read",
    category: "Industry News",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Building Better Curriculum with Modern Resources",
    excerpt:
      "Strategies for educators to integrate contemporary educational materials into traditional curriculum frameworks.",
    author: "Prof. Kavita Singh",
    date: "January 3, 2026",
    readTime: "6 min read",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
              <Tag className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Insights & Knowledge
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Explore articles on education, publishing, academic tips, and
              success stories from the world of learning
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-card text-foreground border-border/50 focus:border-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background sticky top-[72px] z-30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-accent hover:bg-gold-dark whitespace-nowrap"
                    : "whitespace-nowrap"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All Posts" && !searchQuery && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-8 animate-in fade-in duration-700">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Featured Article
              </span>
            </div>
            <Link
              to={`/blog/${featuredPost.id}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
            >
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4 w-fit">
                  <Tag className="w-3 h-3" />
                  {featuredPost.category}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="flex items-center text-accent font-medium group-hover:gap-3 gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {regularPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No articles found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover-lift border border-border/50 flex flex-col h-full">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium mb-3 w-fit">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50 mt-auto">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-8 lg:p-12 text-primary-foreground text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Subscribe to receive the latest articles, educational resources,
              and publishing news directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-card text-foreground border-border/50"
              />
              <Button
                size="lg"
                className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
