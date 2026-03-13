import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Calendar, Users, Compass, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const dimensions = [
  { icon: Users, title: "Leading Self", description: "Identity, discipline, clarity of purpose, emotional intelligence, and personal responsibility." },
  { icon: Compass, title: "Leading Teams", description: "Building trust, communication, collaboration, and psychological safety within teams." },
  { icon: Building, title: "Leading Organizations", description: "Strategy, culture, decision-making, innovation, and institutional performance." },
  { icon: Globe, title: "Leading Nations", description: "Governance, public accountability, civic responsibility, and nation-building." },
];

const GWRSection = () => {
  return (
    <section className="py-24 bg-surface-elevated relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Guinness World Records Attempt</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">The Longest Leadership Lesson</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            48 continuous hours of intensive leadership teaching — a bold commitment to elevating the conversation about leadership education across Nigeria and Africa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 border border-border/50">
            <Calendar className="text-primary" size={18} />
            <span className="text-sm text-foreground">May 1 – 3, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 border border-border/50">
            <MapPin className="text-primary" size={18} />
            <span className="text-sm text-foreground">Osogbo, Osun State, Nigeria</span>
          </div>
          <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 border border-border/50">
            <Clock className="text-primary" size={18} />
            <span className="text-sm text-foreground">48 Hours Continuous</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dimensions.map((dim, i) => (
            <motion.div
              key={dim.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <dim.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{dim.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{dim.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/gwr">
              <ArrowRight className="mr-2" size={18} />
              Learn More About the Attempt
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GWRSection;
