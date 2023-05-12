import { motion } from 'framer-motion';
import useNav from '../../hooks/useNav';
import { VariantTypeOptional } from '../animation/types/animation';

function Nav() {
  return (
    <nav className="flex items-center justify-between max-w-[1120px] m-auto py-5 font-light  relative z-[101] ">
      <article className="flex items-center">
        <p className="pr-[150px] font-bold italic text-3xl">
          LEWI<span className="text-blue-700">I</span>IS
        </p>
        <p> hello@georgelewis.com </p>
      </article>
      <article className="flex items-center">
        <ul className="flex items-center pr-[150px]">
          <li className="px-4">Bechance</li>
          <li className="px-4">Instagram</li>
        </ul>
        <ButtonNavigation />
      </article>
    </nav>
  );
}
function ButtonNavigation() {
  const { isNavOpen: isOpen, setNav } = useNav();
  const variant: VariantTypeOptional = {
    show: {
      rotate: '180deg',
    },
    hidden: {
      rotate: '0',
    },
  };
  const activeClass = { container: 'space-y-[30px]', span: '225deg' };
  return (
    <motion.button
      variants={variant}
      transition={{ duration: 1 }}
      animate={isOpen ? 'show' : 'hidden'}
      onClick={() => setNav((state) => ({ isNavOpen: !state.isNavOpen }))}
      className="w-[30px] h-[30px] "
    >
      <p className={isOpen ? 'space-y-[-3px]' : 'space-y-2'}>
        <motion.span
          animate={{
            rotate: isOpen ? '-' + activeClass.span : '0deg',
            transition: {
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
              duration: 0.5,
            },
          }}
          className="w-[30px] h-[2px] bg-gray-100 block"
        ></motion.span>
        <motion.span
          animate={{
            rotate: isOpen ? activeClass.span : '0deg',
            transition: {
              damping: 5,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}
          className="w-[30px] h-[2px] bg-gray-100 block"
        ></motion.span>
      </p>
    </motion.button>
  );
}
export default Nav;
