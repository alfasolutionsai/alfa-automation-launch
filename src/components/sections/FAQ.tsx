import FAQs from "@/components/ui/faq";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-background via-accent-blue/5 to-background">
      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent-cyan/10 to-transparent rounded-full blur-3xl" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <FAQs />
      </motion.div>
    </section>
  );
}