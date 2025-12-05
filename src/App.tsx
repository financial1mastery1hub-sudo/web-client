import Header from './components/Header';
import { HeroOdyssey } from './components/ui/hero-odyssey';
import PillarCards from './components/PillarCards';
import ProductsSection from './components/ProductsSection';
import VideoShowcase from './components/VideoShowcase';
import GlobalPresence from './components/GlobalPresence';
import CorporateOverview from './components/CorporateOverview';
import Industries from './components/Industries';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFD700]/10 via-black via-[#FFA500]/8 to-black">
      <Header />
      <HeroOdyssey />
      <PillarCards />
      <ProductsSection />
      <VideoShowcase />
      <GlobalPresence />
      <CorporateOverview />
      <Industries />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
