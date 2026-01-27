import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
<motion.section
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md p-8 rounded-2xl space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </motion.section>
);

export default Contact;