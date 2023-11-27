import Navbar from "./Components/Navbar";
import Billing from "./Components/Billing";
import Business from "./Components/Business";
import Button from "./Components/Button";
import CardDeal from "./Components/CardDeal";
import Clients from "./Components/Clients";
import CTA from "./Components/CTA";
import FeedBack from "./Components/FeedBack";
import Footer from "./Components/Footer";
import GetStarted from "./Components/GetStarted";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Testimonials from "./Components/Testimonials";

const App = () => (
  <div className="bg-[#000000] w-full overflow-hidden">
    <div className="sm:px-16 px-16 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-[#000000] sm:px-16 px-6 flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-[#000000] sm:px-16 px-6 flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Billing />
        <Business />
        <Button />
        <CardDeal />
        <Clients />
        <CTA />
        <FeedBack />
        <Footer />
        <Stats />
        <Testimonials />
      </div>
    </div>
  </div>
);

export default App;
