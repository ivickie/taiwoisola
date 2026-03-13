import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GWRSection from "@/components/GWRSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taiwo Isola",
  jobTitle: "Transformational Leader & Learning and Development Specialist",
  description: "Public speaker, leadership development specialist, and workforce development expert driving systems change in Nigeria and beyond.",
  url: "https://taiwoisola.com",
  sameAs: [
    "https://www.linkedin.com/in/thetaiwoisola/",
    "https://x.com/TheTaiwoIsola",
    "https://www.facebook.com/thetaiwoisola",
    "https://www.instagram.com/thetaiwoisola"
  ],
  knowsAbout: ["Leadership Development", "Workforce Development", "Public Speaking", "Learning and Development", "Leadership Training"],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Taiwo Isola — Transformational Leader, Public Speaker & Leadership Development Specialist"
        description="Taiwo Isola is a transformational leader, public speaker, and learning & development specialist driving leadership training, workforce development, and systems change in Nigeria and beyond."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <TestimonialsSection />
      <GWRSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
