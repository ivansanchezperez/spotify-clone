import React from 'react';
import { motion } from 'framer-motion';

const slideInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const withTransition = (Component: React.ComponentType) => {
  return () => (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={slideInVariants}
    >
      <Component />
    </motion.div>
  );
};

export default withTransition;
