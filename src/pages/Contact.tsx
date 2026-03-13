import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/thetaiwoisola/" },
  { icon: Twitter, label: "Twitter / X", href: "https://x.com/TheTaiwoIsola" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/thetaiwoisola" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/thetaiwoisola" },
];

const subjects = [
  "Speaking Engagement",
  "Program Partnership",
  "Leadership Workshop",
  "Mentorship Inquiry",
  "General Inquiry",
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:isolavisionpower@gmail.com?subject=${encodeURIComponent(formData.subject || "Website Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Taiwo Isola"
        description="Get in touch with Taiwo Isola for speaking engagements, leadership workshops, program partnerships, and collaboration opportunities."
        path="/contact"
      />
      <Navbar />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you are interested in speaking engagements, program partnerships, leadership training, or collaboration opportunities, I would be glad to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Contact Information</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Reach out for speaking invitations, leadership workshops, program partnerships, or to learn more about my initiatives.
                </p>
                <div className="space-y-4">
                  <a href="mailto:isolavisionpower@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="text-primary" size={18} />
                    <span className="text-sm">isolavisionpower@gmail.com</span>
                  </a>
                  <a href="tel:+2348035470965" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="text-primary" size={18} />
                    <span className="text-sm">+234 (0) 8035470965</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Connect</h3>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-surface-elevated border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                      title={s.label}
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">Engagement Opportunities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Speaking engagements and leadership workshops</li>
                  <li>• Program partnerships and institutional collaborations</li>
                  <li>• Leadership and workforce development initiatives</li>
                  <li>• Mentorship and learning opportunities</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-surface-elevated rounded-xl p-8 border border-border/50 space-y-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your inquiry…"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
