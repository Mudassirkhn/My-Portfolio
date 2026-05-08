import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Intro from '../Components/Intro';
import { About } from './02-About';
import Services from '../Components/03-Services';
import { Contact } from './04-Contact';
import Footer from '../Components/04-Footer';
import Projects from './MyProjects';

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export const Home = () => {
  const { scrollY } = useScroll();
  const orbOneY = useTransform(scrollY, [0, 1200], [0, -130]);
  const orbTwoY = useTransform(scrollY, [0, 1200], [0, 180]);

  return (
    <main className="relative overflow-hidden">
      <motion.div className="parallax-orb parallax-orb-one" style={{ y: orbOneY }} />
      <motion.div className="parallax-orb parallax-orb-two" style={{ y: orbTwoY }} />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
      >
        <Intro />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
      >
        <About />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
      >
        <Services />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </main>
  );
};
