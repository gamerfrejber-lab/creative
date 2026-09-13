import { motion } from "framer-motion";
import { Lightbulb, Monitor, Smartphone, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, label: "Idea", desc: "Concept & Strategy" },
  { icon: Monitor, label: "Design", desc: "UI/UX & Prototyping" },
  { icon: Smartphone, label: "Develop", desc: "Build & Test" },
  { icon: Rocket, label: "Launch", desc: "Deploy & Scale" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-smartdev-navy/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-quantico text-3xl sm:text-4xl font-bold mb-6">
              SMART APPROACH{" "}
              <span className="text-gradient">CREATING IDEAS</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We like it when people can see what they get after investing. Our team combines creativity with technical expertise to deliver solutions that stand out.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From initial concept to final deployment, we ensure every step is crafted with precision and purpose. Our agile methodology allows us to adapt quickly and deliver results that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border"
                >
                  <step.icon className="w-5 h-5 text-smartdev-gold shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card/30 p-8">
              <div className="relative z-10">
                <div className="w-full aspect-[4/3] rounded-xl bg-smartdev-navy border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-smartdev-gold/5 to-smartdev-red/5" />
                  <div className="relative text-center">
                    <div className="w-20 h-20 mx-auto mb-4 hexagon bg-smartdev-gold/10 border border-smartdev-gold/30 flex items-center justify-center">
                      <span className="font-quantico font-bold text-smartdev-gold text-2xl">SD</span>
                    </div>
                    <p className="font-quantico font-bold text-lg">Smart Approach</p>
                    <p className="text-sm text-muted-foreground">Creating & Developing</p>
                  </div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-dashed border-smartdev-teal/20 rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                {["Development", "Branding", "Design", "Marketing"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-muted flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-smartdev-gold" />
                    </div>
                    <p className="text-[10px] text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
