import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-[#FFD700]/20 via-black via-[#FFA500]/15 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFA500] rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold text-[#F5E6A3] mb-6"
        >
          Ready to power your fleet, plant, or property?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-[#D4AF37] text-lg lg:text-xl mb-10 max-w-2xl mx-auto"
        >
          Partner with Kashe Energy for premium lubricants and sustainable energy solutions that deliver results.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-4 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-black rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all flex items-center justify-center gap-2"
          >
            Contact Sales
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-[#FFD700] text-[#FFD700] rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] hover:text-black transition-all"
          >
            Download Catalog
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
