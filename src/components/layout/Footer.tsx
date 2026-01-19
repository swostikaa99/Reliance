import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Publications", path: "/publications" },
  { name: "Authors", path: "/authors" },
  { name: "Contact", path: "/contact" },
];

const categories = [
  { name: "Literature", path: "/publications?category=literature" },
  { name: "Science & Technology", path: "/publications?category=science" },
  { name: "Education", path: "/publications?category=education" },
  { name: "Business & Economics", path: "/publications?category=business" },
  { name: "Arts & Humanities", path: "/publications?category=arts" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/favicon.ico"
                  alt="Reliance Publication House Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold leading-tight text-primary-foreground">
                  Reliance
                </span>
                <span className="text-xs text-primary-foreground/60 tracking-wider uppercase">
                  Publication House
                </span>
              </div>
            </Link>
            <p className="text-[15px] text-primary-foreground/70 leading-[1.7] mb-8 max-w-xs">
              A trusted name in academic publishing, delivering quality
              educational resources for students, educators, and institutions
              worldwide since 1995.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/8 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                >
                  <social.icon className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[19px] font-semibold mb-6 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[15px] text-primary-foreground/70 hover:text-accent hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[19px] font-semibold mb-6 text-primary-foreground">
              Categories
            </h4>
            <ul className="space-y-3.5">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-[15px] text-primary-foreground/70 hover:text-accent hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[19px] font-semibold mb-6 text-primary-foreground">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5">
                <MapPin className="w-[18px] h-[18px] text-accent/80 flex-shrink-0 mt-1" />
                <span className="text-[15px] text-primary-foreground/70 leading-[1.6]">
                  Reliance Publication House Pvt. Ltd.
                  <br />
                  Chandragiri, Kathmandu
                  <br />
                  44600, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <Phone className="w-[18px] h-[18px] text-accent/80 flex-shrink-0" />
                <a
                  href="tel:+9779851037627"
                  className="text-[15px] text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  +977 9851037627
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail className="w-[18px] h-[18px] text-accent/80 flex-shrink-0" />
                <a
                  href="mailto:info@reliancepublication.com"
                  className="text-[15px] text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  info@reliancepublication.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-primary-foreground/55">
            <p>
              © {currentYear} Reliance Publication House Pvt. Ltd. All rights
              reserved. | Powered by{" "}
              <a
                href="https://anoopinnovations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:text-gold-dark transition-colors duration-200"
              >
                Anoop Innovations
              </a>
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
