import { motion } from 'framer-motion';
import { Car, Factory, Sparkles, Home, Building2, Zap } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      icon: Car,
      title: 'Automotive Lubricants',
      description: 'Engine oils, transmission fluids, and greases for all vehicle types.',
      color: 'from-[#FFD700] to-[#FFA500]'
    },
    {
      icon: Factory,
      title: 'Industrial Lubricants',
      description: 'Heavy-duty solutions for manufacturing and industrial equipment.',
      color: 'from-[#FFA500] to-[#DAA520]'
    },
    {
      icon: Sparkles,
      title: 'Car Care Products',
      description: 'Premium detailing, cleaning, and maintenance products.',
      color: 'from-[#FFD700] to-[#FF8C00]'
    },
    {
      icon: Home,
      title: 'Residential Solar Systems',
      description: 'Complete home solar solutions with battery backup.',
      color: 'from-[#FFA500] to-[#FF8C00]'
    },
    {
      icon: Building2,
      title: 'Commercial Solar Solutions',
      description: 'Large-scale solar installations for businesses and industries.',
      color: 'from-[#FF8C00] to-[#FFA500]'
    },
    {
      icon: Zap,
      title: 'EV Charging Stations',
      description: 'Fast and reliable electric vehicle charging infrastructure.',
      color: 'from-[#FFD700] to-[#DAA520]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="solutions" className="relative py-20 bg-gradient-to-br from-black via-[#FFD700]/15 via-black to-[#FFA500]/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#F5E6A3] mb-4"
          >
            Products & Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-lg max-w-2xl mx-auto"
          >
            Comprehensive energy solutions for every need, from automotive to renewable energy.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => {
            const images = [
              'https://images.pexels.com/photos/159591/car-maintenance-car-care-tools-159591.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/8566458/pexels-photo-8566458.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3944390/pexels-photo-3944390.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/8566941/pexels-photo-8566941.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/8566462/pexels-photo-8566462.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/17842610/pexels-photo-17842610.jpeg?auto=compress&cs=tinysrgb&w=600'
            ];

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-gradient-to-br from-[#FFD700]/15 via-black/95 to-[#FFA500]/12 backdrop-blur-sm border border-[#FFD700]/30 rounded-2xl overflow-hidden hover:border-[#FFD700]/60 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={images[index]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-7 h-7 text-black" />
                  </div>

                  <h3 className="text-xl font-bold text-[#F5E6A3] mb-2 group-hover:text-[#FFD700] transition-colors">{product.title}</h3>
                  <p className="text-[#D4AF37] text-sm leading-relaxed mb-4">{product.description}</p>

                  <div className="text-[#FFD700] text-sm font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Learn More →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}