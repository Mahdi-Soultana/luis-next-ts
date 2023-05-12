import { AnimatePresence, motion } from 'framer-motion';
import useNav from '../../../hooks/useNav';
import {
  VariantType,
  VariantTypeOptional,
} from '../../animation/types/animation';
import GlareCircle from '../../commun/GlareCircle';

const container: VariantType = {
  hidden: { x: '100%', opacity: 1 },
  exit: { x: '100%', opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'linear',
    },
  },
};

const ulVariant: VariantType = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
      type: 'linear',
    },
  },
  exit: {
    opacity: 0,
  },
};

const item: VariantTypeOptional = {
  hidden: {
    opacity: 0,
    transition: { type: 'spring', stiffness: 100, duration: 0.2 },
  },
  exit: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, duration: 0.2 },
  },
};

function AsideNav() {
  const { isNavOpen } = useNav();

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.div
          exit="exit"
          initial="hidden"
          animate="show"
          variants={container}
          className=" bg-[#101010] text-2xl overflow-hidden   top-0 right-0 h-screen w-[400px] absolute z-[100] shadow-lg"
        >
          <img
            className=" w-full h-full absolute   bg-cover object-cover"
            src="/texture.png"
          />

          <motion.ul
            variants={ulVariant}
            className=" relative mt-20 text-gray-400 space-y-4   text-3xl font-extralight  p-5 py-2"
          >
            {[
              'Home',
              'Selected Work',
              'Work',
              'Clients',
              'Awards',
              'Contact',
              'Blog',
              'Testimonials',
            ].map((link, index) => {
              if (index == 0) {
                return (
                  <motion.li
                    variants={item}
                    key={index}
                    className="inline-block group cursor-pointer"
                  >
                    <span className="block text-white">{link}</span>
                    <span className="block duration-200 w-[30px] h-[2px] bg-white group-hover:w-[70px]"></span>
                  </motion.li>
                );
              }
              return (
                <motion.li variants={item} key={index}>
                  {link}
                </motion.li>
              );
            })}
          </motion.ul>
          <div className="pr-10 p-4 font-light space-y-2 text-white text-sm text-right">
            <p>+43 2343 5432 32</p>
            <p>hello@gerogelewis.com</p>
          </div>
          <motion.div
            animate={{
              x: [-200, 100],
              y: [-100, 100],
              transition: {
                repeatType: 'reverse',
                repeat: Infinity,
                duration: 3,
              },
            }}
            className={`absolute z-[100] ${
              false ? 'bottom-0' : 'top-0'
            } right-[0px] opacity-10`}
          >
            <GlareCircle reverse width={600} height={600} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AsideNav;
