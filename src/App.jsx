import Navbar from "./navbar/navbar.jsx";
import Section from "./SectionOne/Section.jsx";
import Forms from "./Form/forms.jsx";
import Promotions from "./Promotions/Promotions.jsx";
import FeaturesSection from './Features Section/FeaturesSection.jsx';
import FeaturedHotels from './Featured Hotels/FeaturedHotels.jsx';
import Brands from './Brands/Brands.jsx';
import Nearby from './ExploreNearby/ExploreNearby.jsx';
import FooterFeatures from './FooterFeatures/FooterFeatures.jsx';
import Footer from './Footer/Footer.jsx';
import TechnicalNames from './Technical Names/TechnicalNames.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#222529] overflow-x-hidden">
      <Navbar />
      <Section />
      <Forms />
      <Promotions />
      <FeaturesSection/>
      <FeaturedHotels/>
      <Brands/>
      <Nearby/>
      <FooterFeatures/>
      <Footer/>
      <TechnicalNames/>
    </div>
  );
}

export default App;
