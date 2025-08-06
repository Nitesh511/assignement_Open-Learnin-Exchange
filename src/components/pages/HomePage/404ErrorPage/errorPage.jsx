import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col justify-center items-center p-4">
      <motion.h1
        className="text-[8rem] sm:text-[10rem] font-extrabold leading-none select-none"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center max-w-md mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-purple-500/50"
        >
          <IoMdArrowBack className="size-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
