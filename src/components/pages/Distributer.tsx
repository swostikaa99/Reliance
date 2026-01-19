import { useState } from "react";
import Layout from "@/components/layout/Layout";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  Search,
  Map,
  Filter,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const regions = [
  "All Regions",
  "Central Nepal",
  "Eastern Nepal",
  "Western Nepal",
  "Mid-Western Nepal",
  "Far-Western Nepal",
  "International",
];

const distributors = [
  {
    id: 1,
    name: "Kathmandu Educational Distributors",
    region: "Central Nepal",
    address: "New Baneshwor, Kathmandu 44600",
    city: "Kathmandu",
    phone: "+977-1-4785623",
    email: "kathmandu@distributors.com",
    website: "www.keddistributors.com.np",
    coverage: ["Kathmandu", "Bhaktapur", "Lalitpur"],
    established: "2010",
    featured: true,
  },
  {
    id: 2,
    name: "Pokhara Book Center",
    region: "Western Nepal",
    address: "Lakeside, Pokhara 33700",
    city: "Pokhara",
    phone: "+977-61-465123",
    email: "pokhara@distributors.com",
    website: "www.pokharabooks.com.np",
    coverage: ["Pokhara", "Syangja", "Parbat"],
    established: "2012",
    featured: false,
  },
  {
    id: 3,
    name: "Biratnagar Academic Supplies",
    region: "Eastern Nepal",
    address: "Traffic Chowk, Biratnagar 56600",
    city: "Biratnagar",
    phone: "+977-21-528456",
    email: "biratnagar@distributors.com",
    website: "www.biratacademic.com.np",
    coverage: ["Biratnagar", "Dharan", "Itahari"],
    established: "2015",
    featured: false,
  },
  {
    id: 4,
    name: "Butwal Education Hub",
    region: "Western Nepal",
    address: "Traffic Chowk, Butwal 32900",
    city: "Butwal",
    phone: "+977-71-545789",
    email: "butwal@distributors.com",
    website: "www.butwaledu.com.np",
    coverage: ["Butwal", "Bhairahawa", "Tansen"],
    established: "2013",
    featured: false,
  },
  {
    id: 5,
    name: "Nepalgunj Book Distributors",
    region: "Mid-Western Nepal",
    address: "Dhamboji Road, Nepalgunj 21900",
    city: "Nepalgunj",
    phone: "+977-81-525634",
    email: "nepalgunj@distributors.com",
    website: "www.nepalgunjbooks.com.np",
    coverage: ["Nepalgunj", "Kohalpur", "Surkhet"],
    established: "2016",
    featured: false,
  },
  {
    id: 6,
    name: "Dhangadhi Academic Center",
    region: "Far-Western Nepal",
    address: "Attariya Road, Dhangadhi 10900",
    city: "Dhangadhi",
    phone: "+977-91-523478",
    email: "dhangadhi@distributors.com",
    website: "www.dhangadhiacademic.com.np",
    coverage: ["Dhangadhi", "Mahendranagar", "Dadeldhura"],
    established: "2017",
    featured: false,
  },
  {
    id: 7,
    name: "Hetauda Educational Supplies",
    region: "Central Nepal",
    address: "Main Road, Hetauda 44100",
    city: "Hetauda",
    phone: "+977-57-523691",
    email: "hetauda@distributors.com",
    website: "www.hetaudaedu.com.np",
    coverage: ["Hetauda", "Chitwan", "Makwanpur"],
    established: "2014",
    featured: false,
  },
  {
    id: 8,
    name: "Janakpur Book House",
    region: "Central Nepal",
    address: "Ramananda Chowk, Janakpur 45600",
    city: "Janakpur",
    phone: "+977-41-523847",
    email: "janakpur@distributors.com",
    website: "www.janakpurbooks.com.np",
    coverage: ["Janakpur", "Dhanusha", "Mahottari"],
    established: "2011",
    featured: false,
  },
  {
    id: 9,
    name: "Global Education Partners (India)",
    region: "International",
    address: "Connaught Place, New Delhi 110001",
    city: "New Delhi",
    phone: "+91-11-23456789",
    email: "india@globalpartners.com",
    website: "www.globaleduindia.com",
    coverage: ["India", "Nepal Border Regions"],
    established: "2008",
    featured: false,
  },
];

const Distributer = () => {
  const [activeRegion, setActiveRegion] = useState("All Regions");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDistributors = distributors.filter((distributor) => {
    const matchesRegion =
      activeRegion === "All Regions" || distributor.region === activeRegion;
    const matchesSearch =
      distributor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      distributor.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      distributor.coverage
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const featuredDistributor = distributors.find((d) => d.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Distribution Network
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Distributors</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Find authorized distributors near you for genuine Reliance
              publications across Nepal and internationally
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, city, or coverage area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-card text-foreground border-border/50 focus:border-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="py-8 bg-background sticky top-[72px] z-30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              Filter by Region:
            </span>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {regions.map((region) => (
              <Button
                key={region}
                variant={activeRegion === region ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveRegion(region)}
                className={
                  activeRegion === region
                    ? "bg-accent hover:bg-gold-dark whitespace-nowrap"
                    : "whitespace-nowrap"
                }
              >
                {region}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Distributor */}
      {featuredDistributor &&
        activeRegion === "All Regions" &&
        !searchQuery && (
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-8 animate-in fade-in duration-700">
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  Featured Distributor
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                {/* Map Placeholder */}
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-20 h-20 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {featuredDistributor.city} Location
                    </p>
                  </div>
                </div>

                {/* Distributor Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4 w-fit">
                    <Building2 className="w-3 h-3" />
                    {featuredDistributor.region}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                    {featuredDistributor.name}
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-muted-foreground">
                          {featuredDistributor.address}
                        </p>
                        <p className="text-sm text-muted-foreground/70 mt-1">
                          Coverage: {featuredDistributor.coverage.join(", ")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <a
                        href={`tel:${featuredDistributor.phone}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {featuredDistributor.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <a
                        href={`mailto:${featuredDistributor.email}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {featuredDistributor.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-accent" />
                      <a
                        href={`https://${featuredDistributor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                      >
                        {featuredDistributor.website}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    Established: {featuredDistributor.established}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* Distributors Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredDistributors.length === 0 ? (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No distributors found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50 border-b border-border">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-primary">
                        Distributor Name
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-primary">
                        Region
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-primary">
                        Location
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-primary">
                        Contact
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-primary">
                        Coverage Areas
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-primary">
                        Established
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDistributors.map((distributor, index) => (
                      <tr
                        key={distributor.id}
                        className="border-b border-border/50 hover:bg-secondary/30 transition-colors animate-in fade-in duration-500"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <Building2 className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <p className="font-serif font-semibold text-primary">
                                {distributor.name}
                              </p>
                              <p className="text-sm text-accent">
                                {distributor.city}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                            {distributor.region}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                            <p className="text-sm text-muted-foreground">
                              {distributor.address}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <a
                                href={`tel:${distributor.phone}`}
                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                              >
                                {distributor.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <a
                                href={`mailto:${distributor.email}`}
                                className="text-sm text-muted-foreground hover:text-accent transition-colors truncate max-w-[180px]"
                                title={distributor.email}
                              >
                                {distributor.email}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-1">
                            {distributor.coverage.map((area) => (
                              <span
                                key={area}
                                className="px-2 py-1 rounded bg-secondary text-xs text-primary whitespace-nowrap"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-sm text-muted-foreground">
                            {distributor.established}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden divide-y divide-border/50">
                {filteredDistributors.map((distributor, index) => (
                  <div
                    key={distributor.id}
                    className="p-6 hover:bg-secondary/30 transition-colors animate-in fade-in duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-serif text-lg font-semibold text-primary mb-1">
                          {distributor.name}
                        </h3>
                        <p className="text-sm font-medium text-accent mb-2">
                          {distributor.city}
                        </p>
                        <span className="inline-flex px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          {distributor.region}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          {distributor.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <a
                          href={`tel:${distributor.phone}`}
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {distributor.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <a
                          href={`mailto:${distributor.email}`}
                          className="text-sm text-muted-foreground hover:text-accent transition-colors truncate"
                        >
                          {distributor.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground/70 mb-2">
                          Coverage Areas:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {distributor.coverage.map((area) => (
                            <span
                              key={area}
                              className="px-2 py-1 rounded bg-secondary text-xs text-primary"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Established: {distributor.established}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Become Distributor CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-8 lg:p-12 text-primary-foreground text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Become a Distributor
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our growing network of authorized distributors and bring
              quality educational resources to your region
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold"
            >
              <a href="/contact">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Distributer;
