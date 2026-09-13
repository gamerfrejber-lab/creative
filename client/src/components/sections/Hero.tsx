import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Education", angle: -60, delay: 0.3 },
  { label: "Develop", angle: -20, delay: 0.4 },
  { label: "Crypto", angle: 20, delay: 0.5 },
  { label: "Design", angle: 140, delay: 0.6 },
  { label: "Asset\nManagement", angle: 180, delay: 0.7 },
  { label: "Creative", angle: 100, delay: 0.8 },
];

function HexShape({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      <svg viewBox="0 0 100 115" className="w-full h-full">
        <polygon
          points="50,0 100,28.75 100,86.25 50,115 0,86.25 0,28.75"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-smartdev-teal/40"
        />
      </svg>
    </motion.div>
  );
}

function DottedHex({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -30 }}
      animate={{ opacity: 0.3, rotate: 0 }}
      transition={{ duration: 1.2, delay }}
      className={className}
    >
      <svg viewBox="0 0 100 115" className="w-full h-full">
        <polygon
          points="50,0 100,28.75 100,86.25 50,115 0,86.25 0,28.75"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          className="text-smartdev-gold/50"
        />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-smartdev-dark via-smartdev-navy to-smartdev-dark" />

      <div className="absolute top-20 right-10 w-[500px] h-[500px] opacity-20 hidden lg:block">
        <HexShape className="absolute top-0 right-0 w-32 h-36" delay={0.2} />
        <HexShape className="absolute top-24 right-28 w-40 h-44" delay={0.4} />
        <DottedHex className="absolute top-10 right-40 w-48 h-52" delay={0.6} />
        <DottedHex className="absolute bottom-10 right-10 w-36 h-40" delay={0.8} />
        <HexShape className="absolute bottom-0 left-10 w-28 h-32" delay={1.0} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-smartdev-gold/10 border border-smartdev-gold/20 flex items-center justify-center">
                <span className="font-quantico font-bold text-smartdev-gold text-xl">SD</span>
              </div>
            </div>

            <h1 className="font-quantico text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              CREATE{" "}
              <span className="text-gradient">YOUR IDEA</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-8">
              We like it when people can see what they get after investing. Smart approach to creating and developing ideas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="#contact">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">About Us</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 hexagon bg-smartdev-navy border-2 border-smartdev-gold/30 flex items-center justify-center">
                  <span className="font-quantico font-bold text-smartdev-gold text-2xl">SD</span>
                </div>
              </div>

              {services.map((svc, i) => {
                const r = 160;
                const rad = (svc.angle * Math.PI) / 180;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <motion.div
                    key={svc.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: svc.delay }}
                    className="absolute flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 44px)`,
                      top: `calc(50% + ${y}px - 44px)`,
                      width: 88,
                      height: 88,
                    }}
                  >
                    <div className="hexagon bg-smartdev-blue/60 w-full h-full flex items-center justify-center border border-smartdev-teal/30 hover:border-smartdev-gold/50 transition-colors cursor-pointer group">
                      <span className="text-[10px] font-medium text-center leading-tight px-1 group-hover:text-smartdev-gold transition-colors whitespace-pre-line">
                        {svc.label}
                      </span>
                    </div>
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ overflow: "visible" }}
                    >
                      <line
                        x1="44" y1="44"
                        x2={44 - x * 0.5} y2={44 - y * 0.5}
                        stroke="rgba(218,188,146,0.15)"
                        strokeWidth="1"
                      />
                    </svg>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Scroll down
        </a>
      </motion.div>
    </section>
  );
}
