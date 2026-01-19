import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },

  { name: "Publications", path: "/publications" },
  { name: "Authors", path: "/authors" },
  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "About Us", path: "/about" },
      { name: "Blogs", path: "/blogs" },
      { name: "Videos", path: "/videos" },
      { name: "Our Distributors", path: "/distributor" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-20 h-20 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/favicon.ico"
                alt="Reliance Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-serif text-2xl font-semibold leading-tight transition-colors duration-300",
                  isScrolled ? "text-primary" : "text-primary-foreground",
                )}
              >
                Reliance
              </span>
              <span
                className={cn(
                  "text-xs font-bold tracking-wide uppercase transition-colors duration-300",
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-primary-foreground/80",
                )}
              >
                Publication House
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path} className="relative">
                  {link.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={cn(
                          "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1",
                          isScrolled
                            ? location.pathname === link.path ||
                              link.dropdown.some(
                                (item) => item.path === location.pathname,
                              )
                              ? "text-primary bg-secondary"
                              : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                            : location.pathname === link.path ||
                                link.dropdown.some(
                                  (item) => item.path === location.pathname,
                                )
                              ? "text-primary-foreground bg-primary-foreground/10"
                              : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10",
                        )}
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeDropdown === link.name && "rotate-180",
                          )}
                        />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="absolute top-full left-0 pt-2 w-56">
                          <div className="bg-card rounded-lg shadow-lg border border-border/50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                  "block px-4 py-2.5 text-sm font-medium transition-colors",
                                  location.pathname === item.path
                                    ? "text-primary bg-secondary"
                                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50",
                                )}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                        isScrolled
                          ? location.pathname === link.path
                            ? "text-primary bg-secondary"
                            : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                          : location.pathname === link.path
                            ? "text-primary-foreground bg-primary-foreground/10"
                            : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10",
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-medium px-6"
            >
              <Link to="/publications">Explore Publications</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              isScrolled
                ? "text-primary hover:bg-secondary"
                : "text-primary-foreground hover:bg-primary-foreground/10",
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isMobileMenuOpen
              ? "max-h-[32rem] opacity-100 mt-4"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="bg-card rounded-xl shadow-card p-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name,
                        )
                      }
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                        location.pathname === link.path ||
                          link.dropdown.some(
                            (item) => item.path === location.pathname,
                          )
                          ? "text-primary bg-secondary"
                          : "text-muted-foreground hover:text-primary hover:bg-secondary/50",
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === link.name && "rotate-180",
                        )}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="mt-1 ml-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                              "block px-4 py-2 rounded-lg text-sm transition-all duration-200",
                              location.pathname === item.path
                                ? "text-primary bg-secondary"
                                : "text-muted-foreground hover:text-primary hover:bg-secondary/50",
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      location.pathname === link.path
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary/50",
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-accent hover:bg-gold-dark text-accent-foreground font-medium"
              >
                <Link to="/publications">Explore Publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
