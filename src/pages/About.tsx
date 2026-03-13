import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Award, Lightbulb, Shield, Compass, Target, Heart, Eye } from "lucide-react";
import speakingPhoto from "@/assets/speaking-photo.jpg";
import educationPhoto from "@/assets/about-education.jpeg";
import awardsPhoto from "@/assets/about-awards.jpeg";

const coreValues = [
  { icon: Eye, title: "Clarity", description: "Leadership begins with clarity. I help individuals and institutions move beyond confusion to define purpose, sharpen vision, and make disciplined decisions." },
  { icon: Shield, title: "Principle-Centered Leadership", description: "Decisions, systems, and strategies must be anchored in integrity, responsibility, and moral conviction." },
  { icon: Heart, title: "Stewardship", description: "Leaders are stewards of people, resources, and opportunities, entrusted to use their influence wisely." },
  { icon: Target, title: "Sustainable Impact", description: "Building leaders and systems that endure through structures, habits, and learning frameworks that produce lasting transformation." },
  { icon: Compass, title: "Intentional Leadership", description: "Moving from reactive patterns to thoughtful leadership guided by vision, discipline, and commitment to growth." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Taiwo Isola"
        description="Learn about Taiwo Isola — a transformational leader, public speaker, and learning & development specialist with expertise in leadership training, workforce development, and systems change in Nigeria."
        path="/about"
      />
      <Navbar />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Me</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Builder Of People, Platforms, And Purpose-Driven Communities
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I work at the intersection of learning, leadership, and workforce development, helping individuals think critically, live intentionally, and translate potential into impact. At the core of my work is a commitment to shaping people who can lead themselves effectively, contribute meaningfully, and build systems that outlast them.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={speakingPhoto} alt="Taiwo Isola" className="rounded-xl w-full h-auto object-cover glow-gold" />
            </motion.div>
          </div>

          {/* Professional Path */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-primary" size={20} />
                  <h2 className="text-2xl font-bold">Professional Path</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I have spent more than a decade at the intersection of leadership development, learning science, and public speaking across the nonprofit, private, and public sectors. My career has been shaped by high-impact roles at Career Impact Lab, African Development University, Junior Achievement Nigeria, and Jake Riley Limited.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Having travelled and managed programs in over 30 of Nigeria's 36 states, I have delivered speaking and facilitation engagements across universities, NYSC orientation camps, youth conferences, leadership forums, government agencies, and faith-based platforms.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-primary" size={20} />
                  <h2 className="text-2xl font-bold">Learning & Formation</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My academic foundation combines science, education, and management. I hold a BSc in Human Anatomy from the University of Maiduguri, an MSc in Education from Liverpool John Moores University, UK, and an MBA in Leadership and Management from Quantic School of Business and Technology, US.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I also completed the Venture in Management Program (ViMP) at Lagos Business School and earned a Postgraduate Diploma in IT Project Management.
                </p>
                <img src={educationPhoto} alt="Taiwo Isola at UN IP Labs program" className="rounded-xl w-full h-auto object-cover mt-4" />
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={20} />
              <h2 className="text-2xl font-bold">Milestones & Recognition</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Embassy of Pakistan Teaching Excellence Award",
                "UNICAF National Writing Contest Winner",
                "UN Alliance of Civilizations Young Peacebuilders Programme (Certified Peacebuilder)",
                "Lagos Business School ViMP Scholarship Recipient",
                "Mandela Washington Fellowship Semi-Finalist",
                "Nigerian Delegate — UN Foundation's Our Future Agenda",
                "UN WIPO IP Incubator/Accelerator Lab Participant",
                "Nigerian Mathematics Olympiad Awardee",
              ].map((milestone, i) => (
                <div key={i} className="bg-surface-elevated rounded-lg p-4 border border-border/50 flex items-start gap-3">
                  <Lightbulb className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-sm text-muted-foreground">{milestone}</p>
                </div>
              ))}
            </div>
            </div>
            <img src={awardsPhoto} alt="Taiwo Isola receiving an award" className="rounded-xl w-full h-auto object-cover" />
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Guiding Principles</span>
              <h2 className="text-3xl font-bold mt-3">Core Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface-elevated rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <v.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12 border-t border-border/30"
          >
            <p className="text-xl md:text-2xl font-serif italic text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              "Whether I am teaching leadership, facilitating learning experiences, or designing systems that help people grow, my commitment remains the same: to help individuals and institutions lead with clarity, responsibility, and purpose."
            </p>
            <footer className="mt-4 text-muted-foreground">— Taiwo Isola</footer>
          </motion.blockquote>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
