import { Car, Truck, Factory, Home, Building2, Zap } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Car,
      title: 'Automotive',
      description: 'Premium lubricants and care products for passenger vehicles.'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Heavy-duty solutions for fleet operations and transport.'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial lubricants for machinery and equipment.'
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Home solar systems and energy management solutions.'
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Large-scale solar installations for businesses.'
    },
    {
      icon: Zap,
      title: 'EV Mobility',
      description: 'Charging infrastructure for electric vehicles.'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#2A1F0A] to-[#3D2F15]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-[#D4AF37] text-lg max-w-2xl mx-auto">
            Delivering specialized solutions across diverse sectors and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#FFD700]/10 to-transparent backdrop-blur-sm border border-[#FFD700]/20 rounded-2xl p-6 hover:border-[#FFD700]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
              <p className="text-[#D4AF37] text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
