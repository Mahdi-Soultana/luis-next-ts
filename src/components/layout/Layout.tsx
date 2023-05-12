import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { VariantType } from '../animation/types/animation';
import GlareCircle from '../commun/GlareCircle';
import Aside from './Aside';
import Nav from './Nav';
import AsideNav from './nav/AsideNav';
const variant: VariantType = {
  show: {},
  hidden: {},
  exit: {},
};
function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.section
      variants={variant}
      initial="hidden"
      exit="exit"
      animate="show"
      className="bg-[#101010] text-white min-h-screen font-SourceSansPro overflow-hidden w-[100vw]"
    >
      <div className="w-full h-full fixed top-0 left-0  ">
        {false && (
          <img
            className="w-full h-full fixed top-0 left-0   object-center   object-contain "
            src="/person.png"
          />
        )}
        <img
          className=" w-full h-full fixed top-0 left-0 bg-cover object-cover mix-blend-overlay"
          src="/texture.png"
        />
        <img
          className=" w-full h-full fixed top-0 left-0 bg-cover object-cover mix-blend-overlay"
          src="/texture.png"
        />
      </div>
      <div className="relative   h-screen">
        <div className="absolute  top-0 left-[0px]">
          <GlareCircle width={350} />
        </div>
        <div className="absolute   bottom-10 right-[50px]">
          <GlareCircle width={250} reverse={true} />
        </div>
        <div className="relative  z-[10]">
          <Nav />
          <AsideNav />
          <Aside />
          <motion.main className="pl-[240px] h-full relative  z-[10]">
            {children}
          </motion.main>
        </div>
      </div>
    </motion.section>
  );
}

export default Layout;
