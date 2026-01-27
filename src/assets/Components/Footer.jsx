import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-6 text-center text-gray-500 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      © {new Date().getFullYear()} Daniel — All rights reserved.
    </motion.footer>
  );
};

export default Footer;