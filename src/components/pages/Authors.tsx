import { Link } from "react-router-dom";
import { BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const authors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    expertise: "Physics & Quantum Mechanics",
    publications: 12,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Professor of Physics at IIT Delhi with over 25 years of teaching and research experience.",
  },
  {
    id: 2,
    name: "Prof. Anita Sharma",
    expertise: "Mathematics & Statistics",
    publications: 8,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Former Head of Mathematics at JNU, specializing in applied mathematics and engineering calculus.",
  },
  {
    id: 3,
    name: "Dr. Vikram Patel",
    expertise: "Economics & Finance",
    publications: 15,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Renowned economist and former advisor to the Ministry of Finance, Government of India.",
  },
  {
    id: 4,
    name: "Prof. Meera Iyer",
    expertise: "Literature & Cultural Studies",
    publications: 10,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Award-winning author and professor of English Literature at Delhi University.",
  },
  {
    id: 5,
    name: "Dr. Sunita Menon",
    expertise: "Educational Psychology",
    publications: 7,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Leading researcher in child psychology and learning development with global recognition.",
  },
  {
    id: 6,
    name: "Prof. Arun Desai",
    expertise: "Art History & Aesthetics",
    publications: 9,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Curator and art historian with expertise in Indian classical and contemporary art.",
  },
  {
    id: 7,
    name: "Dr. Priya Nair",
    expertise: "Sociology & Anthropology",
    publications: 6,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Social scientist focusing on urban sociology and cultural transformations in modern India.",
  },
  {
    id: 8,
    name: "Prof. Ramesh Gupta",
    expertise: "Chemistry & Biochemistry",
    publications: 11,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Distinguished professor of Chemistry, recipient of the National Science Award.",
  },
];

const Authors = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Meet Our Experts
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Our Authors
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Discover the brilliant minds behind our publications — leading
              academics, researchers, and subject matter experts who bring
              knowledge to life.
            </p>
          </div>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {authors.map((author) => (
              <div
                key={author.id}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover-lift border border-border/50 group"
              >
                {/* Author Image */}
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Author Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                    {author.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {author.expertise}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {author.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>{author.publications} Publications</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become an Author CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Become a Published Author
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Are you an academic, researcher, or subject matter expert with
              knowledge to share? We're always looking for exceptional authors
              to join our publishing family. Submit your manuscript and let us
              help you reach learners worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-gold-dark text-accent-foreground px-8"
              >
                <Link to="/contact?type=author">Submit Your Manuscript</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10"
              >
                <Link to="/about">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Authors;
