import { Target, Eye } from 'lucide-react';

export default function CorporateOverview() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-black via-[#FFD700]/18 via-black to-[#FFA500]/12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Corporate Overview
              </h2>
              <p className="text-[#F5E6A3] text-lg leading-relaxed mb-4">
                Kashe Energy is a leading global energy brand specializing in premium lubricants, car care products, and sustainable energy solutions. With operations spanning across Africa and the Middle East, we combine international expertise with local market knowledge.
              </p>
              <p className="text-[#F5E6A3] text-lg leading-relaxed">
                Our commitment to quality, innovation, and sustainability drives everything we do. From protecting engines with high-performance lubricants to powering homes and businesses with clean solar energy, we're fueling progress across the continent.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#FFD700]/20 via-black/70 to-[#FFA500]/15 backdrop-blur-sm border border-[#FFD700]/30 rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-[#F5E6A3] leading-relaxed">
                    To be Africa's most trusted energy partner, delivering innovative solutions that power progress while protecting our planet for future generations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFA500]/20 via-black/70 to-[#FFD700]/15 backdrop-blur-sm border border-[#FFA500]/30 rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-[#F5E6A3] leading-relaxed">
                    To provide world-class lubricants and sustainable energy solutions that exceed customer expectations, support economic growth, and contribute to a cleaner environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
