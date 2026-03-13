import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/thetaiwoisola/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/TheTaiwoIsola", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/thetaiwoisola", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/thetaiwoisola", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/">
            <img src={logo} alt="Taiwo Isola" className="h-10 w-auto" />
          </Link>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
            <Link to="/gwr" className="hover:text-primary transition-colors">GWR</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-surface-elevated flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  title={s.label}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Taiwo Isola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
