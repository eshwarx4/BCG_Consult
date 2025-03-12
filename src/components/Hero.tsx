import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ChatbotInterface from './Chatbot';

const Hero = () => {
  return (
    <div id="home" className="relative bg-white min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
          alt="Smart Agriculture"
        />
        <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Farmers with AI
            <br />
            <span className="text-green-300">Smarter Agriculture for a Better Future!</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Transform your farming practices with AI-powered insights, real-time monitoring,
            and smart financial management.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              Try WhatsApp Chatbot
              <MessageCircle className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Download Our App
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>

          <div className="mt-12 flex gap-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 cursor-pointer"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden md:inline">Chat with Us</span>
        </motion.button>
      </motion.div> */}
      <ChatbotInterface />
    </div>
  );
};

export default Hero;