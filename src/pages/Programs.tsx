import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Briefcase, GraduationCap, Mic } from "lucide-react";

const programs = [
  {
    icon: Calendar,
    title: "Future Impact Conference",
    description: "A seven-day immersive leadership and professional development experience preparing participants for the future of work. The program builds capacity in self-leadership, purpose-driven career development, workplace excellence, enterprise development, and future-ready skills for a rapidly changing world.",
  },
  {
    icon: Users,
    title: "Young Leaders Summit",
    description: "An annual high-impact leadership summit designed for student leaders and high school prefects, focused on early leadership development and character formation. Through lectures, workshops, and experiential learning, participants are prepared with the strength, wisdom, and courage to lead with purpose and responsibility.",
  },
  {
    icon: GraduationCap,
    title: "Graduate Employability Program",
    description: "A structured, bi-annual employability and career-readiness program designed to bridge the gap between education and the workplace for entry-level graduates. It equips participants with practical workplace skills, foundational professional competencies, career clarity, confidence, and the mindset required to thrive in real-world work environments.",
  },
  {
    icon: Briefcase,
    title: "Career Accelerator Program",
    description: "An intensive four-week program supporting professionals navigating career transitions, growth phases, or career breaks. Participants build leadership capacity, sharpen career clarity, and gain access to new professional opportunities and networks.",
  },
  {
    icon: Mic,
    title: "TEDxArkilla",
    description: "In the spirit of ideas worth spreading, TEDxArkilla convenes pacesetters, creatives, innovators, and risk-takers across disciplines. It serves as a platform for bold ideas, meaningful conversations, and collaboration that sparks innovation and community impact.",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Leadership Programs & Training"
        description="Explore Taiwo Isola's leadership development programs including Future Impact Conference, Young Leaders Summit, Graduate Employability Program, Career Accelerator, and TEDxArkilla."
        path="/programs"
      />
      <Navbar />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Programs</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Building Impact Through Leadership, Education, and Workforce Development
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Programs, initiatives, and learning experiences designed to equip individuals and institutions with the skills, clarity, and leadership capacity needed to thrive in a rapidly changing world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface-elevated rounded-xl p-8 border border-border/50 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-surface-elevated rounded-xl p-12 border border-border/50"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Leadership Journey?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Whether you are looking to strengthen your self-leadership, develop practical leadership skills, or grow your capacity to lead people and ideas effectively, there is a program designed to support your growth.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:isolavisionpower@gmail.com">Get Started Today</a>
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Programs;
