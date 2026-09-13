import { Send, Github, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: ["Development", "Crypto & Web3", "Creative", "Education"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Blog"],
  },
  {
    title: "Support",
    links: ["Contact", "FAQ", "Privacy Policy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-smartdev-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-smartdev-gold/20 border border-smartdev-gold/30 flex items-center justify-center">
                <span className="font-quantico font-bold text-smartdev-gold text-xs">SD</span>
              </div>
              <span className="font-quantico font-bold">
                Smart<span className="text-smartdev-red">Dev</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Smart approach to creating and developing ideas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-smartdev-gold/20 transition-colors">
                <Send className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-smartdev-gold/20 transition-colors">
                <Github className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-smartdev-gold/20 transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SmartDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
