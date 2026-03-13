import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Handshake, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import speakingPhoto from "@/assets/speaking-photo.jpg";

const values = [
  { icon: Users, title: "Leadership", description: "Driving leadership and development initiatives that empower people to lead themselves, teams, and institutions effectively." },
  { icon: Target, title: "Impact", description: "Designing programs that deliver measurable outcomes in employability, entrepreneurship, and career readiness." },
  { icon: Lightbulb, title: "Innovation", description: "Building and improving systems that respond to the evolving future of work, education, and skills." },
  { icon: Handshake, title: "Collaboration", description: "Partnering with governments, donors, private sector leaders, and communities to unlock shared value." },
  { icon: Compass, title: "Purpose", description: "Helping others discover and pursue their unique calling with intentionality." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const MissionSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Mission & Values</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Building Capacity. Empowering Futures.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            My mission is to strengthen people and systems through education, leadership development, and workforce innovation. I'm committed to helping individuals discover their potential while enabling institutions to deliver lasting impact.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            I combine strategic thinking, evidence-based design, faith-based principles and deep contextual understanding of Africa's development landscape to build solutions that work at scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, i) => (
            <motion.div key={value.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
              className="bg-surface-elevated rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <img src={speakingPhoto} alt="Taiwo Isola speaking at an event" className="rounded-xl w-full h-auto object-cover" />
          </motion.div>
        </div>

        <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-serif italic text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            "My goal is to help you discover clarity in your purpose, consistency in your actions, and faith in your journey."
          </p>
          <footer className="mt-4 text-muted-foreground">— Taiwo Isola</footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default MissionSection;
