import React from "react";
import { motion } from "framer-motion";

const CompetitiveProgramming = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="page-container"
    >
      <h1>Competitive Pricing</h1>
      <p>We provide competitive pricing tailored to meet your business needs while ensuring value and transparency.</p>
    </motion.div>
  );
};

export default CompetitiveProgramming;
