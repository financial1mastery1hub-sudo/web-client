import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-r from-[#2A1F0A] via-[#B8860B] to-[#2A1F0A]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFA500] rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Ready to power your fleet, plant, or property?
        </h2>
        <p className="text-[#F5E6A3] text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
          Partner with Kashe Energy for premium lubricants and sustainable energy solutions that deliver results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-10 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#2A1F0A] rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all flex items-center justify-center gap-2">
            Contact Sales
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-4 border-2 border-[#FFD700] text-[#FFD700] rounded-full font-bold text-lg hover:bg-[#FFD700] hover:text-[#2A1F0A] transition-all">
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
