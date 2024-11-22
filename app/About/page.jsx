"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-36 space-y-8">
      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Vision Statement:
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Our vision is to create apparel that empowers you to dress to impress,
          showcasing your unique style and confidence in every moment.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Mission Statement:
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Our mission is to design apparel that embodies confidence and
          creativity, blending innovative design with timeless elegance, so our
          customers can make a statement wherever life takes them.
        </p>
      </motion.div>
    </div>
  );
}
