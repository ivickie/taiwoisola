import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Calendar,
    title: "Future Impact Conference",
    description: "A seven-day immersive leadership and professional development experience preparing participants for the future of work.",
  },
  {
    icon: Users,
    title: "Young Leaders Summit",
    description: "An annual high-impact leadership summit designed for student leaders and high school prefects, focused on early leadership development.",
  },
  {
    icon: Briefcase,
    title: "Career Accelerator Program",
    description: "An intensive four-week program supporting professionals navigating career transitions, growth phases, or career breaks.",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24 bg-surface-elevated relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Building Impact Through Leadership, Education, and Workforce Development
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Programs, initiatives, and learning experiences designed to equip individuals and institutions with the skills, clarity, and leadership capacity needed to thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-background rounded-xl p-8 border border-border/50 hover:border-primary/40 transition-all duration-300 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <program.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{program.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{program.description}</p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-6 hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
