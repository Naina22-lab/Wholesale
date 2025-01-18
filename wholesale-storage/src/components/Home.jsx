import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWarehouse, FaQuoteRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleGetQuote = () => {
    toast.info("Here's your quote: 'Save more with Wholesale Storage!'", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  if (!showContent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="splash-screen"
      >
        <h1>Wholesale Storage</h1>
      </motion.div>
    );
  }

  return (
    <main className="home-container">
      <ToastContainer /> {/* Required for toast notifications */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Wholesale Storage
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-description"
        >
          Reliable, secure, and efficient storage solutions tailored for your business needs.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="cta-button"
          onClick={handleGetQuote}
        >
          Get a Quote
        </motion.button>
      </section>

      <section className="features">
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/secure-warehousing")}
          transition={{ duration: 0.3 }}
        >
          <FaWarehouse size={50} color="#FF7A59" />
          <h3>Secure Warehousing</h3>
          <p>State-of-the-art facilities to keep your goods safe and sound.</p>
        </motion.div>
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/competitive-programming")}
          transition={{ duration: 0.3 }}
        >
          <FaQuoteRight size={50} color="#FF7A59" />
          <h3>Competitive Pricing</h3>
          <p>Get the best value for your storage needs with transparent pricing.</p>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
