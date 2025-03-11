import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Smartphone, Upload, Map, Plane as Plant, Shield } from 'lucide-react';

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: MessageSquare,
      title: 'Start with WhatsApp',
      description: 'Send "Hi" to our WhatsApp chatbot to begin your smart farming journey.'
    },
    {
      icon: Map,
      title: 'Share Your Details',
      description: 'Provide your location, crop type, and soil conditions for personalized assistance.'
    },
    {
      icon: Upload,
      title: 'Upload Images',
      description: 'Share photos of your crops for instant disease detection and treatment suggestions.'
    },
    {
      icon: Shield,
      title: 'Get AI Recommendations',
      description: 'Receive tailored advice on pest control, fertilizers, and weather precautions.'
    }
  ];

  const appFeatures = [
    {
      icon: Smartphone,
      title: 'Smart Dashboard',
      description: 'Track farm analytics, expenses, and crop health in real-time.'
    },
    {
      icon: Plant,
      title: 'Crop Management',
      description: 'Monitor growth stages and get stage-specific recommendations.'
    }
  ];

  return (
    <section id="chatbot" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            How Agripulse AI Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started with our AI-powered farming assistant in minutes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* WhatsApp Chatbot Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              WhatsApp AI Chatbot
            </h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile App Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Mobile App Features
            </h3>
            <div className="bg-gray-50 rounded-2xl p-8 space-y-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-white rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-8 flex gap-4">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;