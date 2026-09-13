import { motion } from "framer-motion";
import { Code2, Bitcoin, Palette, GraduationCap, Layers, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Development",
    description: "We have extensive experience in creating applications for all platforms",
    features: ["Web Apps", "Mobile Apps", "Desktop", "API"],
  },
  {
    icon: Bitcoin,
    title: "Crypto & Web3",
    description: "We offer highly experienced professionals to help you understand this industry",
    features: ["Blockchain", "Smart Contracts", "DeFi", "NFT"],
  },
  {
    icon: Palette,
    title: "Creative",
    description: "Full-cycle creative production from concept to final delivery",
    features: ["Branding", "UI/UX Design", "Motion", "3D"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "We conduct internships for those interested, both beginners and with experience",
    features: ["Courses", "Mentorship", "Workshops", "Internship"],
  },
  {
    icon: Layers,
    title: "Asset Management",
    description: "Strategic management of digital assets for maximum returns",
    features: ["Portfolio", "Analytics", "Strategy", "Consulting"],
  },
  {
    icon: Globe,
    title: "Marketing",
    description: "Data-driven marketing strategies that deliver measurable results",
    features: ["SEO", "SMM", "Content", "Analytics"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-quantico text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariants}
              className="group relative rounded-xl border border-border bg-card/50 p-6 hover:border-smartdev-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-smartdev-gold/5"
            >
              <div className="w-12 h-12 rounded-lg bg-smartdev-gold/10 flex items-center justify-center mb-4 group-hover:bg-smartdev-gold/20 transition-colors">
                <svc.icon className="w-6 h-6 text-smartdev-gold" />
              </div>
              <h3 className="font-quantico text-lg font-bold mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{svc.description}</p>
              <div className="flex flex-wrap gap-2">
                {svc.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
