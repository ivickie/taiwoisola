import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gold-gradient">Building</span> Leaders.
              <br />
              <span className="text-gold-gradient">Leading</span> Learning.
              <br />
              <span className="text-gold-gradient">Driving</span> Systems Change.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Transformational leader, public speaker, and learning and development specialist passionate about developing people, strengthening learning systems, and helping individuals translate their potential into meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/programs">
                  <ArrowRight className="mr-2" size={18} />
                  Explore My Work
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-gold">
              <img src={heroPortrait} alt="Taiwo Isola" className="w-full h-auto object-cover rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  Transformational Leader
                </span>
                <h3 className="text-xl font-serif font-bold text-foreground">Taiwo Isola</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
