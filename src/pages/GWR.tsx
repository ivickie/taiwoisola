import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Calendar, Users, Compass, Building, Globe } from "lucide-react";
import gwrBadge from "@/assets/gwr-badge.jpeg";

const dimensions = [
  { icon: Users, num: "1", title: "Leading Self", description: "Leadership begins with self-mastery. This session explores identity, discipline, clarity of purpose, emotional intelligence, and personal responsibility. Participants will learn how leaders develop the internal stability required to guide others." },
  { icon: Compass, num: "2", title: "Leading Teams", description: "Great leadership multiplies through people. This segment focuses on building trust, communication, collaboration, and psychological safety within teams. It explores how leaders create environments where individuals perform at their best." },
  { icon: Building, num: "3", title: "Leading Organizations", description: "Organizations require leaders who understand systems. This session covers strategy, culture, decision-making, innovation, and institutional performance. Participants will explore how effective leaders design systems that enable sustained results." },
  { icon: Globe, num: "4", title: "Leading Nations", description: "The final dimension examines leadership at the societal level, exploring governance, public accountability, civic responsibility, and nation-building. The conversation focuses on how leadership principles shape the future of communities and nations." },
];

const GWR = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Guinness World Record — Longest Leadership Lesson"
        description="Taiwo Isola attempts the Guinness World Record for the Longest Leadership Lesson — a 50+ hour marathon session on Leading Self, Teams, Organizations, and Nations. May 1–3, 2026, Ilorin, Nigeria."
        path="/gwr"
      />
      <Navbar />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <img src={gwrBadge} alt="Guinness World Records Official Attempt" className="h-20 mx-auto mb-6" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Guinness World Records Attempt</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-6">The Longest Leadership Lesson</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-8">
              Every generation eventually confronts a defining question: who will lead the future? This Guinness World Records attempt is built on the belief that building leaders requires intention, depth, and sustained learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-surface-elevated rounded-lg px-5 py-3 border border-border/50">
                <Calendar className="text-primary" size={18} />
                <span className="text-foreground font-medium">May 1 – 3, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-elevated rounded-lg px-5 py-3 border border-border/50">
                <MapPin className="text-primary" size={18} />
                <span className="text-foreground font-medium">Osogbo, Osun State</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-elevated rounded-lg px-5 py-3 border border-border/50">
                <Clock className="text-primary" size={18} />
                <span className="text-foreground font-medium">48 Hours Continuous</span>
              </div>
            </div>
          </motion.div>

          {/* The Problem */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Problem We Cannot Ignore</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Across Nigeria and much of Africa, one challenge continues to shape the future of our societies: the leadership gap. Young people graduate from universities without ever learning how to lead themselves. Professionals enter organizations without frameworks for ethical leadership, decision-making, or systems thinking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Leadership cannot remain an abstract idea. It must become a discipline that can be taught, practiced, and strengthened.
            </p>
          </motion.div>

          {/* Four Dimensions */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-10">Four Dimensions of Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {dimensions.map((dim, i) => (
                <motion.div
                  key={dim.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface-elevated rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <dim.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <span className="text-primary text-xs font-semibold">Dimension {dim.num}</span>
                      <h3 className="font-serif text-xl font-semibold text-foreground">{dim.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{dim.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join + Support */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-elevated rounded-xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold mb-4">Join the Experience</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This event is open to students, professionals, educators, policymakers, entrepreneurs, and anyone interested in understanding leadership more deeply. Participants can attend in person or follow through livestream.
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                Please note that onsite attendance is strictly by invitation. Special provisions will be made for individuals who intend to remain throughout the full three-day event.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:isolavisionpower@gmail.com">
                  <ArrowRight className="mr-2" size={18} />
                  Register Interest
                </a>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface-elevated rounded-xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold mb-4">A Call for Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Delivering a Guinness World Records attempt of this scale requires collaboration. We are inviting partners, institutions, and supporters who believe in the importance of leadership development to join us.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Together, we can turn this moment into a powerful movement for leadership development across Nigeria and Africa.
              </p>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="mailto:isolavisionpower@gmail.com">Partner With Us</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GWR;
