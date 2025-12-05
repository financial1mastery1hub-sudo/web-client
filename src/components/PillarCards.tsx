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

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#2A1F0A] to-[#3D2F15]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Three Pillars of Excellence
          </h2>
          <p className="text-[#D4AF37] text-lg max-w-2xl mx-auto">
            Our commitment to quality, sustainability, and global reach defines everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#FFD700]/10 to-transparent backdrop-blur-sm border border-[#FFD700]/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-[#D4AF37] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
