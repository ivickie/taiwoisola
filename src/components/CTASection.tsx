import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Impact Together?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Whether you're interested in leadership education, workforce development programs, speaking engagements, consulting, or strategic partnerships, I'm open to meaningful collaborations that drive real change.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                <ArrowRight className="mr-2" size={18} />
                Get In Touch
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
