import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import Slide from '../components/animation/texts/Slide';
import {
  VariantType,
  staggerVariant,
} from '../components/animation/types/animation';
const vart: VariantType = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};
function MyWork() {
  return (
    <section className="p-6 pr-14 h-full">
      <h1 className="w-[90%] text-5xl  font-light">
        <Slide words={[' My work ', 'and skills', ' are recognized']} />
      </h1>
      <motion.div className="h-full pt-6" variants={staggerVariant()}>
        {[
          { title: 'German Design Award', sub: 'Daily Rise' },
          { title: 'Developer Award', sub: 'Madmullet' },
          { title: 'Red Dot Award', sub: 'Sunrisescones' },
          { title: 'World Brand Design Awards', sub: 'Unique Trends' },
        ].map((item, key, arr) => (
          <CardWork index={key} item={item} key={key} />
        ))}
      </motion.div>
    </section>
  );
}

function CardWork({
  item,
  index,
}: {
  index: number;
  item: { title: string; sub: string };
}) {
  const LineControl = useAnimationControls();
  const contentControl = useAnimationControls();

  useEffect(() => {
    LineControl.start((i) => ({
      opacity: 1,
      width: '100%',
      transition: { duration: 1, delay: i * 2 },
    })).then(() => {
      contentControl.start((i) => {
        console.log(i);
        return {
          opacity: 1,
          transition: { delay: i * 0.2 },
        };
      });
    });
  }, []);

  return (
    <motion.div>
      <motion.div
        className={`h-[105px]    py-2 flex items-center justify-between overflow-hidden`}
      >
        <motion.span
          className="h-full bg-gray-300/50  w-[200px] opacity-0 "
          animate={contentControl}
          custom={0}
        />
        <motion.p
          animate={contentControl}
          custom={1}
          className="text-2xl font-light w-1/3 text-center text-gray-300 opacity-0"
        >
          {item.title}
        </motion.p>
        <motion.p
          animate={contentControl}
          custom={2}
          className="text-xs  font-light text-gray-300 opacity-0"
        >
          {item.sub}
        </motion.p>
        <motion.p
          animate={contentControl}
          custom={3}
          className="text-xs  font-light text-gray-300 opacity-0"
        >
          2022
        </motion.p>
      </motion.div>
      <motion.span
        custom={index}
        className={`w-0 h-[1px] bg-gray-200 block  opacity-0`}
        animate={LineControl}
      />
    </motion.div>
  );
}
export default MyWork;
