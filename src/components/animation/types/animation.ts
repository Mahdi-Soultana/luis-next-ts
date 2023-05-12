import { Variant } from 'framer-motion';

export type VariantType = {
  show: Variant;
  hidden: Variant;
  exit: Variant;
};
export type VariantTypeOptional = {
  show?: Variant;
  hidden?: Variant;
  exit?: Variant;
};

export const staggerVariant = (
  variant: VariantTypeOptional | void,
): VariantType => ({
  show: { opacity: 1, transition: { staggerChildren: 1 }, ...variant?.show },
  exit: { opacity: 0, transition: { staggerDirection: -1 }, ...variant?.exit },
  hidden: { opacity: 0, ...variant?.hidden },
});
export const LineAnimation: VariantType = {
  show: {
    opacity: 1,
    width: '100%',
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    width: '0%',
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    width: '0%',
    transition: { duration: 1 },
  },
};
export const WorkCardAnimation: VariantType = {
  show: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    y: '100%',
    opacity: 0,
  },
  exit: {
    y: '100%',
    opacity: 0,
  },
};
