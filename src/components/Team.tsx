import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Eshwar Naik',
    // role: 'Co-Founder & CEO',
    image: '/Eshwar_Passphoto-removebg-preview.png',
    linkedin: 'https://www.linkedin.com/in/eshwarnaikb/',
    bio: '3rd year UG student of the department of Ocean Engineering and Naval Architecture, Public Realtions Chairman | Technology Students’ Gymkhana, IIT Kharagpur, Senior Executive | Innovation and Incubation cell '
  },
  {
    name: 'Mahim Dungarwal',
    // role: 'Co-Founder & CTO',
    image: 'mahim photo.jpeg.jpg',
    linkedin: 'https://www.linkedin.com/in/mahim-dungarwal-a61613255/',
    bio: '3rd year UG student of the department of Mining Engineering, General Secretary, Technology | Technology Students’ Gymkhana, IIT Kharagpur, Executive Head, Kshitij – Techno-Management Fest, IIT Kharagpur'
  },
  {
    name: 'Madava Sai Charan Chowdary',
    // role: 'Co-Founder & COO',
    image: '/Charan.jpeg.jpg',
    linkedin: 'https://www.linkedin.com/in/charan-mandava-416891281/',
    bio: '3rd Year UG student of the department of Chemistry, General Secretary, Technology | Technology Students’ Gymkhana, IIT Kharagpur, Executive Head, Kshitij – Techno-Management Fest, IIT Kharagpur'
  }
];

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            Passionate experts dedicated to revolutionizing agriculture through technology
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </motion.a>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                {/* <p className="text-green-600 font-medium mb-2">
                  {member.role}
                </p> */}
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;