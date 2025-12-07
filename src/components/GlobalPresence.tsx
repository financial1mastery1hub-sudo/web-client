import { MapPin } from 'lucide-react';
import { Globe } from './ui/globe';
import { COBEOptions } from 'cobe';

export default function GlobalPresence() {
  const locations = [
    { name: 'Dubai', country: 'UAE', status: 'Headquarters', coordinates: [25.2048, 55.2708] },
    { name: 'Lagos', country: 'Nigeria', status: 'Regional Hub', coordinates: [6.5244, 3.3792] },
    { name: 'Accra', country: 'Ghana', status: 'Distribution Center', coordinates: [5.6037, -0.1870] },
    { name: 'Yaoundé', country: 'Cameroon', status: 'Operations', coordinates: [3.8480, 11.5021] },
    { name: 'Kampala', country: 'Uganda', status: 'Operations', coordinates: [0.3476, 32.5825] }
  ];

  const globeConfig: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 3,
    mapSamples: 16000,
    mapBrightness: 1,
    baseColor: [0, 0, 0],
    markerColor: [255 / 255, 215 / 255, 0 / 255],
    glowColor: [255 / 255, 215 / 255, 0 / 255],
    markers: locations.map(loc => ({
      location: loc.coordinates,
      size: loc.status === 'Headquarters' ? 0.12 : 0.08
    }))
  };

  return (
    <section id="presence" className="relative py-20 bg-gradient-to-br from-[#FFD700]/12 via-black via-[#FFA500]/8 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F5E6A3] mb-4">
            Global Presence
          </h2>
          <p className="text-[#D4AF37] text-lg max-w-2xl mx-auto">
            Operating across Africa and the Middle East, bringing world-class energy solutions to emerging markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[#FFD700]/30 shadow-xl bg-gradient-to-br from-[#FFD700]/10 via-black to-[#FFA500]/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe config={globeConfig} className="top-0" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-10">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-[#FFD700]" />
                <p className="text-[#F5E6A3] font-semibold">Serving Africa & Middle East</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#FFD700]/15 via-black/80 to-[#FFA500]/10 backdrop-blur-sm border border-[#FFD700]/30 rounded-xl p-6 hover:border-[#FFD700]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#F5E6A3] font-semibold text-lg">{location.name}</h3>
                      <p className="text-[#D4AF37] text-sm">{location.country}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#FFD700] bg-[#FFD700]/10 px-3 py-1 rounded-full">
                    {location.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
