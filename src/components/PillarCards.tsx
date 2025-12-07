import { motion } from 'framer-motion';
import { Droplet, Leaf, Globe } from 'lucide-react';

export default function PillarCards() {
  const pillars = [
    {
      icon: Droplet,
      title: 'High-Performance Lubricants',
      description: 'Premium automotive and industrial lubricants engineered for maximum engine protection and efficiency.',
      gradient: 'from-[#FFD700] to-[#FFA500]'
    },
    {
      icon: Leaf,
      title: 'Sustainable Solar & EV Solutions',
      description: 'Clean energy systems and electric vehicle charging infrastructure for a greener tomorrow.',
      gradient: 'from-[#FFA500] to-[#FF8C00]'
    },
    {
      icon: Globe,
      title: 'Global Presence & Local Expertise',
      description: 'Serving customers across Africa and the Middle East with localized support and world-class service.',
      gradient: 'from-[#FFD700] to-[#DAA520]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#FFD700]/12 via-[#1a1a1a] via-[#FFA500]/8 to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#F5E6A3] mb-4"
          >
            Three Pillars of Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-lg max-w-2xl mx-auto"
          >
            Our commitment to quality, sustainability, and global reach defines everything we do.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-gradient-to-br from-[#FFD700]/12 via-[#1a1a1a]/90 to-[#FFA500]/8 backdrop-blur-sm border border-[#FFD700]/30 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/15 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <pillar.icon className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-2xl font-bold text-[#F5E6A3] mb-4 group-hover:text-[#FFD700] transition-colors">{pillar.title}</h3>
              <p className="text-[#D4AF37] leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
