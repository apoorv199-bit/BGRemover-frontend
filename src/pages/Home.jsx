import BgRemovalSteps from "../components/BgRemovalSteps";
import BgSlider from "../components/BgSlider";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import TryNow from "../components/TryNow";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 lg:py-16 font-['Outfit']">
      {/* Hero Section */}
      <Header />
      {/* Background removal steps section */}
      <BgRemovalSteps />
      {/* Background removal slider section */}
      <BgSlider />
      {/* Buy credit plan section */}
      <Pricing />
      {/* User testimonial section */}
      <Testimonials />
      {/* Try now section */}
      <TryNow />
    </div>
  );
};

export default Home;
