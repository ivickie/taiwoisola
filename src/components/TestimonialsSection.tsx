import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emmanuel O",
    location: "UK",
    text: "I participated in the Future Impact Conference, the one-week intensive leadership program organized by Mr. Taiwo. The simplicity with which he taught self-leadership and purpose-driven growth was remarkable. Those sessions became my compass as I navigated my master's and PhD programs in the UK.",
  },
  {
    name: "Tomiwa F",
    location: "Nigeria",
    text: "I remember clearly the Young Leaders Summit Mr. Taiwo hosted years ago. There were over 200 of us young leaders from different Federal Unity Schools. That day shifted something fundamental in me. He didn't just speak about leadership as a title; he defined it as service, modeling, and measurable impact.",
  },
  {
    name: "Sienka D",
    location: "Madagascar",
    text: "I met Mr. Taiwo at African Development University when he lectured us on Leading Nations, and that experience became a defining moment in my journey. His mentorship goes beyond advice — he challenges you to think clearly and act courageously.",
  },
  {
    name: "Tola A",
    location: "US",
    text: "Mr. Taiwo Isola spoke at the NYSC leadership lecture series in Katsina. His session completely transformed how I approached my career. He broke down a clear roadmap for moving from uncertainty to intentional growth. That lecture became a turning point in how I lead now in corporate settings.",
  },
  {
    name: "Oluchi J",
    location: "Nigeria",
    text: "When I resumed my first job as an intern, my supervisor told me, 'If you want to succeed here, schedule a coaching session with Mr. Taiwo.' From our very first session, I gained clarity on how to approach my role strategically. What stood out was his ability to simplify ambiguity.",
  },
  {
    name: "Hannah F",
    location: "UK",
    text: "I have worked with Mr. Taiwo on multiple projects for many years. He is our go-to person for planning, strategy, and innovation. He doesn't just lead; he empowers everyone involved to think better and execute stronger.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Impact Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Hear from learners, partners, and stakeholders who have experienced transformation through programs and initiatives I've led, designed, or supported.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface-elevated rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300 flex flex-col"
            >
              <Quote className="text-primary/40 mb-4" size={24} />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              <div className="mt-5 pt-4 border-t border-border/30">
                <p className="font-serif font-semibold text-foreground">{t.name}</p>
                <p className="text-primary text-xs">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
