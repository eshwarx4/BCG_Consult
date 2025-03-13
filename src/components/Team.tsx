import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Eshwar Naik',
    image: '/Eshwar_Passphoto-removebg-preview.png',
    linkedin: 'https://linkedin.com',
    bio: 'Expert in Agricultural Technology and AI Implementation'
  },
  {
    name: 'Mahim Dungarwal',
    image: 'mahim photo.jpeg.jpg',
    linkedin: 'https://linkedin.com',
    bio: 'Specialist in Machine Learning and Computer Vision'
  },
  {
    name: 'Madava Sai Charan Chowdary',
    image: '/Charan.jpeg.jpg',
    linkedin: 'https://linkedin.com',
    bio: 'Expert in Agricultural Operations and Farmer Relations'
  }
];

const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 p-6 bg-gray-100 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{selectedMember.name}</h3>
            <p className="text-gray-600">{selectedMember.bio}</p>
            <a
              href={selectedMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View LinkedIn
            </a>
          </div>

          {/* Team Members Grid */}
          <motion.div
            ref={ref}
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setSelectedMember(member)}
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
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
