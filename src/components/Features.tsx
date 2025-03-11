import React from 'react';
import { Brain, Cloud, LineChart, ShoppingBag, Camera, Leaf, Wallet, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Camera,
    title: 'AI-Powered Crop & Pest Detection',
    description: 'Upload images of your crops and let our AI detect diseases and suggest targeted treatments.'
  },
  {
    icon: Leaf,
    title: 'Stage-Based Smart Recommendations',
    description: 'Get personalized guidance on fertilizers, irrigation, and harvesting at each growth stage.'
  },
  {
    icon: Wallet,
    title: 'Financial & Expense Tracking',
    description: 'Log income, track investments, and receive cost-saving suggestions for better profitability.'
  },
  {
    icon: Sun,
    title: 'Climate & Weather Alerts',
    description: 'Access real-time weather updates, pest outbreak warnings, and storage recommendations.'
  },
  {
    icon: Brain,
    title: 'Smart Farming Assistant',
    description: 'AI-powered chatbot providing 24/7 support and instant answers to farming queries.'
  },
  {
    icon: Cloud,
    title: 'Weather Monitoring',
    description: 'Advanced weather forecasting and field condition monitoring for informed decision-making.'
  },
  {
    icon: LineChart,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and insights for better farm management and yield optimization.'
  },
  {
    icon: ShoppingBag,
    title: 'Direct Marketplace',
    description: 'Connect with buyers directly and get the best prices for your produce.'
  }
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Agripulse AI?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Revolutionize your farming with our comprehensive suite of smart solutions
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <feature.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;