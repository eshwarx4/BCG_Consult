import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'WhatsApp Chatbot', href: '#chatbot' },
    { name: 'Mobile App', href: '#app' },
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/45 backdrop-blur-md shadow-md'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={scrolled ? 'Logo_Black-removebg-preview.png' : 'Logo_White-removebg-preview.png'}
                  alt="Logo"
                  width={30}
                  height={50}
                // Hide on mobile, show on md and larger screens
                />
                <span
                  className={` text-lg font-bold ${scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                >
                  KrishiRakshak
                </span>

              </div>
            </motion.div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${scrolled
                    ? 'text-gray-700 hover:text-green-600'
                    : 'text-white hover:text-green-200'
                    }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className='hidden md:block'>
            <Link to="/login">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${scrolled
                  ? 'bg-green-600/90 text-white hover:bg-green-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </motion.a>

            </Link>

          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'
                } hover:text-green-600 focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Login Button in Mobile Menu */}
            <Link to="/login">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-green-600/90 text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </motion.a>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;