import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  BookOpen,
  User,
  Tag,
  ShoppingCart,
  Heart,
  Share2,
  ArrowLeft,
  CheckCircle,
  Star,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Mock publication data (in a real app, this would come from an API)
const publications = [
  {
    id: "1",
    title: "Foundations of Modern Physics",
    author: "Dr. Rajesh Kumar",
    category: "Science",
    isbn: "978-9937-123-456-7",
    pages: 450,
    edition: "3rd Edition",
    publishedDate: "2025",
    language: "English",
    price: "NPR 1,200",
    description:
      "A comprehensive guide to modern physics covering quantum mechanics, relativity, and atomic structure. This textbook is designed for undergraduate students and provides a solid foundation in contemporary physics principles.",
    features: [
      "Detailed explanations with real-world examples",
      "Practice problems with step-by-step solutions",
      "Chapter summaries and review questions",
      "Illustrated with diagrams and photographs",
      "Aligned with latest curriculum standards",
    ],
    tableOfContents: [
      "Chapter 1: Introduction to Modern Physics",
      "Chapter 2: Quantum Mechanics Fundamentals",
      "Chapter 3: Special Theory of Relativity",
      "Chapter 4: Atomic Structure and Spectroscopy",
      "Chapter 5: Nuclear Physics",
      "Chapter 6: Particle Physics",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 128,
    inStock: true,
  },
  {
    id: "2",
    title: "Advanced Calculus for Engineers",
    author: "Prof. Anita Sharma",
    category: "Mathematics",
    isbn: "978-9937-123-457-4",
    pages: 520,
    edition: "2nd Edition",
    publishedDate: "2025",
    language: "English",
    price: "NPR 1,350",
    description:
      "An essential resource for engineering students covering differential equations, multivariable calculus, and vector analysis. Includes numerous solved examples and practical applications.",
    features: [
      "Comprehensive coverage of engineering mathematics",
      "Real-world engineering applications",
      "Detailed problem-solving strategies",
      "MATLAB integration examples",
      "Online resource materials",
    ],
    tableOfContents: [
      "Chapter 1: Differential Equations",
      "Chapter 2: Multivariable Calculus",
      "Chapter 3: Vector Calculus",
      "Chapter 4: Fourier Series and Transforms",
      "Chapter 5: Laplace Transforms",
      "Chapter 6: Numerical Methods",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 96,
    inStock: true,
  },
  {
    id: "3",
    title: "Principles of Economics",
    author: "Dr. Vikram Patel",
    category: "Business",
    isbn: "978-9937-123-458-1",
    pages: 380,
    edition: "4th Edition",
    publishedDate: "2025",
    language: "English",
    price: "NPR 950",
    description:
      "A foundational text in economics covering microeconomics and macroeconomics principles. Perfect for students pursuing business and economics degrees.",
    features: [
      "Clear explanations of economic concepts",
      "Current economic data and case studies",
      "Policy analysis and real-world applications",
      "Graphical illustrations and charts",
      "End-of-chapter exercises",
    ],
    tableOfContents: [
      "Chapter 1: Introduction to Economics",
      "Chapter 2: Supply and Demand",
      "Chapter 3: Market Structures",
      "Chapter 4: National Income Accounting",
      "Chapter 5: Monetary Policy",
      "Chapter 6: International Economics",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviews: 82,
    inStock: true,
  },
  {
    id: "4",
    title: "History of Indian Literature",
    author: "Prof. Meera Iyer",
    category: "Literature",
    isbn: "978-9937-123-459-8",
    pages: 420,
    edition: "1st Edition",
    publishedDate: "2024",
    language: "English",
    price: "NPR 1,100",
    description:
      "An exploration of Indian literary traditions from ancient times to the modern era. Covers major authors, movements, and literary forms.",
    features: [
      "Comprehensive historical coverage",
      "Analysis of major literary works",
      "Cultural and social context",
      "Biographical sketches of authors",
      "Critical essays and interpretations",
    ],
    tableOfContents: [
      "Chapter 1: Ancient Indian Literature",
      "Chapter 2: Medieval Period",
      "Chapter 3: Colonial Literature",
      "Chapter 4: Modern Indian Writing",
      "Chapter 5: Contemporary Voices",
      "Chapter 6: Literary Criticism",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 54,
    inStock: true,
  },
];

const PublicationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // Find the publication by ID
  const publication = publications.find((pub) => pub.id === id);

  if (!publication) {
    return (
      <Layout>
        <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Publications
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Explore our extensive catalog of academic publications spanning
                multiple disciplines
              </p>
            </div>
          </div>
        </section>
        <section className="pt-42 pb-20 min-h-screen">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h1 className="font-serif text-3xl font-bold text-primary mb-4">
                Publication Not Found
              </h1>
              <p className="text-muted-foreground mb-8">
                The publication you're looking for doesn't exist.
              </p>
              <Button asChild>
                <Link to="/publications">Back to Publications</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Publications
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Explore our extensive catalog of academic publications spanning
              multiple disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>
        </div>
      </section>

      {/* Publication Details */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Image */}
            <div className="animate-in fade-in zoom-in duration-700">
              <div className="sticky top-24">
                <div className="relative group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant bg-card">
                    <img
                      src={publication.coverImage}
                      alt={publication.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {publication.inStock && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500 text-white text-sm font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      In Stock
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <Tag className="w-4 h-4" />
                {publication.category}
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                {publication.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-2 text-lg text-muted-foreground mb-4">
                <User className="w-5 h-5" />
                <span>by {publication.author}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(publication.rating)
                          ? "text-accent fill-accent"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {publication.rating} ({publication.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-accent">
                  {publication.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {publication.description}
              </p>

              {/* Meta Information */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-card rounded-xl border border-border/50">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">ISBN</p>
                  <p className="font-medium text-primary">{publication.isbn}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Edition</p>
                  <p className="font-medium text-primary">
                    {publication.edition}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pages</p>
                  <p className="font-medium text-primary">
                    {publication.pages}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Published
                  </p>
                  <p className="font-medium text-primary">
                    {publication.publishedDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Language</p>
                  <p className="font-medium text-primary">
                    {publication.language}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold flex-1 min-w-[200px]"
                  asChild
                >
                  <Link to="/contact">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Order Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500 border-red-500" : ""}
                >
                  <Heart
                    className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                  />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Delivery Info */}
              <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <Package className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary mb-1">
                    Fast Delivery Available
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ships within 2-3 business days across Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publication.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">
            Table of Contents
          </h2>
          <div className="bg-card rounded-xl p-8 border border-border/50">
            <ol className="space-y-3">
              {publication.tableOfContents.map((chapter, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="font-semibold text-accent min-w-[24px]">
                    {index + 1}.
                  </span>
                  <span>{chapter}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Related Publications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">
            Related Publications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publications
              .filter(
                (pub) => pub.category === publication.category && pub.id !== id,
              )
              .slice(0, 4)
              .map((relatedPub, index) => (
                <Link
                  key={relatedPub.id}
                  to={`/publications/${relatedPub.id}`}
                  className="group flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover-lift border border-border/50 flex flex-col h-full">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary">
                      <img
                        src={relatedPub.coverImage}
                        alt={relatedPub.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-secondary text-primary mb-3 w-fit">
                        {relatedPub.category}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors line-clamp-2 flex-grow">
                        {relatedPub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-auto">
                        by {relatedPub.author}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PublicationDetails;
