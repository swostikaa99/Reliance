import { useState } from "react";
import Layout from "@/components/layout/Layout";
import {
  Play,
  Video,
  Clock,
  Eye,
  Calendar,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const videoCategories = [
  "All Videos",
  "Tutorials",
  "Lectures",
  "Webinars",
  "Author Talks",
  "Product Reviews",
];

const videos = [
  {
    id: 1,
    title: "Introduction to Advanced Calculus - Complete Course",
    description:
      "A comprehensive overview of calculus concepts for engineering students",
    category: "Lectures",
    duration: "45:30",
    views: "12.5K",
    date: "Jan 15, 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example1",
    featured: true,
  },
  {
    id: 2,
    title: "How to Use Our Digital Learning Platform",
    description: "Step-by-step guide to accessing and using digital resources",
    category: "Tutorials",
    duration: "15:20",
    views: "8.2K",
    date: "Jan 12, 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example2",
    featured: false,
  },
  {
    id: 3,
    title: "Author Interview: Writing Educational Content",
    description:
      "Insights from our lead author on creating effective textbooks",
    category: "Author Talks",
    duration: "32:15",
    views: "5.7K",
    date: "Jan 10, 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example3",
    featured: false,
  },
  {
    id: 4,
    title: "Physics Fundamentals Webinar - Part 1",
    description:
      "Live session covering core physics concepts for high school students",
    category: "Webinars",
    duration: "58:45",
    views: "15.3K",
    date: "Jan 8, 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example4",
    featured: false,
  },
  {
    id: 5,
    title: "Book Review: Modern Economics Textbook",
    description:
      "Detailed review of our latest economics publication with sample chapters",
    category: "Product Reviews",
    duration: "22:10",
    views: "4.1K",
    date: "Jan 5, 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1554224311-beee4ead2e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example5",
    featured: false,
  },
  {
    id: 6,
    title: "Study Tips for Exam Preparation",
    description:
      "Proven strategies to maximize your study efficiency and retention",
    category: "Tutorials",
    duration: "18:30",
    views: "20.1K",
    date: "Jan 3, 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example6",
    featured: false,
  },
  {
    id: 7,
    title: "Chemistry Lab Techniques Demonstration",
    description: "Essential laboratory procedures for chemistry students",
    category: "Lectures",
    duration: "40:25",
    views: "9.8K",
    date: "Dec 28, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1532634926-8f5ba2e7e1e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example7",
    featured: false,
  },
  {
    id: 8,
    title: "Q&A Session with Educational Experts",
    description: "Live audience questions answered by our academic team",
    category: "Webinars",
    duration: "52:00",
    views: "11.2K",
    date: "Dec 25, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example8",
    featured: false,
  },
  {
    id: 9,
    title: "Literature Analysis: Classic Works",
    description:
      "Deep dive into classical literature and analytical techniques",
    category: "Lectures",
    duration: "35:50",
    views: "6.5K",
    date: "Dec 20, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example9",
    featured: false,
  },
];

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState("All Videos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videos.filter((video) => {
    const matchesCategory =
      activeCategory === "All Videos" || video.category === activeCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredVideo = videos.find((video) => video.featured);
  const regularVideos = filteredVideos.filter((video) => !video.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
              <Video className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Video Library
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Educational <span className="text-gradient-gold">Videos</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Explore our collection of tutorials, lectures, webinars, and
              expert talks designed to enhance your learning experience
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search videos..."
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
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              Filter by Category:
            </span>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {videoCategories.map((category) => (
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

      {/* Featured Video */}
      {featuredVideo && activeCategory === "All Videos" && !searchQuery && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-8 animate-in fade-in duration-700">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Featured Video
              </span>
            </div>
            <a
              href={featuredVideo.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
            >
              <div className="relative aspect-video lg:aspect-auto overflow-hidden bg-black">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-elegant">
                    <Play className="w-10 h-10 text-accent-foreground ml-1" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/80 text-white text-sm font-medium flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredVideo.duration}
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4 w-fit">
                  <Video className="w-3 h-3" />
                  {featuredVideo.category}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {featuredVideo.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {featuredVideo.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {featuredVideo.views} views
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredVideo.date}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* Videos Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {regularVideos.length === 0 ? (
            <div className="text-center py-16">
              <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No videos found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularVideos.map((video, index) => (
                <a
                  key={video.id}
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover-lift border border-border/50 flex flex-col h-full">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-elegant">
                          <Play className="w-8 h-8 text-accent-foreground ml-1" />
                        </div>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 text-white text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary text-primary text-xs font-medium mb-3 w-fit">
                        <Video className="w-3 h-3" />
                        {video.category}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {video.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                        {video.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50 mt-auto">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {video.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {video.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-8 lg:p-12 text-primary-foreground text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Subscribe to Our YouTube Channel
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get notified when we upload new educational videos, tutorials, and
              lectures. Join our growing community of learners!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold"
            >
              <a
                href="https://youtube.com/@reliancepublication"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
