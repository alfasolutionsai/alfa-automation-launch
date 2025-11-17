import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation, AnimationType, AnimationConfig } from "@/hooks/use-scroll-animation";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  config?: AnimationConfig;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  animation = "fade-up", 
  config = {},
  className = ""
}: ScrollRevealProps) => {
  const animationProps = useScrollAnimation(animation, config);

  return (
    <motion.div
      {...animationProps}
      className={className}
    >
      {children}
    </motion.div>
  );
};
