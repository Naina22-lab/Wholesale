import React from "react";
import { motion } from "framer-motion";

const SecureWarehousing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="page-container"
    >
      <h1>Secure Warehousing</h1>
      <p>Our secure warehousing solutions are designed to protect your goods with the highest standards of safety and reliability.</p>
    </motion.div>
  );
};

export default SecureWarehousing;
