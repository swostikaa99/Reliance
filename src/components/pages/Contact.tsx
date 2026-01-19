import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Reliance Publication House Pvt. Ltd",
      "Chandragiri",
      "Kathmandu 44600, Nepal",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+977-9851037627", "+01 5234568"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      " info@reliancepublicationhouse.com",
      "support@reliancepublication.com",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - will be replaced with actual email sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Have questions, suggestions, or interested in partnering with us?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We'll get back to you within 24-48 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-gold-dark text-accent-foreground font-medium py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                Contact Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${index * 100 + 700}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-xl overflow-hidden aspect-video animate-in fade-in zoom-in duration-700 delay-[1200ms]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.229336822119!2d85.2584744!3d27.684743599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19006b15ecdf%3A0x46392f06d8f04a2b!2sReliance%20publication%20house%20pvt.ltd!5e1!3m2!1sen!2snp!4v1768807488864!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
