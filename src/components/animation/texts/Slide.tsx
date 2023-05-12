import { motion } from 'framer-motion';
import { VariantType, VariantTypeOptional } from '../types/animation';
const variantContainer: VariantType = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const variantChildren: VariantTypeOptional = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: 150,
  },
};
interface SlideType {
  words: string[];
  className?: string;
}

function Slide({ words, className = '' }: SlideType) {
  return (
    <motion.div
      variants={variantContainer}
      className="overflow-hidden flex items-start justify-start space-x-2 py-2"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={variantChildren}
          className={className}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default Slide;
