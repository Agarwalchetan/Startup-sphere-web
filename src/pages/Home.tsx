import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Users, Code, Camera, Calendar, Share2, Pen, DollarSign, MessageCircle } from 'lucide-react';
import RegistrationModal from '../components/RegistrationModal';

const departments = [
  { icon: <Code />, name: 'Research & Development' },
  { icon: <Share2 />, name: 'Marketing' },
  { icon: <Code />, name: 'Tech and Development' },
  { icon: <Camera />, name: 'Photography & Videography' },
  { icon: <Calendar />, name: 'Event Management' },
  { icon: <Rocket />, name: 'Startup Development' },
  { icon: <Pen />, name: 'Content Creation' },
  { icon: <MessageCircle />, name: 'Social Media Management' },
  { icon: <DollarSign />, name: 'Monitization Strategies' },
  { icon: <Users />, name: 'Public Relations' }
];

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [ref, inView] = useInView({
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="pt-20">
      <RegistrationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type="community"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3')] bg-cover bg-center"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-7xl font-bold mb-6 gradient-text"
          >
            Startup Sphere
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-white/80 max-w-3xl mx-auto mb-12"
          >
            Empowering innovation and entrepreneurship through technology and culture.
            Join us in shaping the future of startups and technology.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(254, 185, 11, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="bg-[#FEB90B] text-black px-12 py-4 rounded-full font-semibold text-lg transform transition-all duration-300"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </section>

      {/* Departments Section */}
      <section ref={ref} className="py-32 bg-black/90">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-24 gradient-text"
          >
            Our Departments
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(254, 185, 11, 0.2)",
                  y: -5
                }}
                className="department-card backdrop-blur-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-[#FEB90B] mb-6 w-16 h-16"
                >
                  {dept.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{dept.name}</h3>
                <p className="text-white/60 text-lg">
                  Driving innovation and excellence in {dept.name.toLowerCase()}.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;