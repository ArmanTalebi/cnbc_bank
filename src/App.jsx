import React from "react";

import {
  Billing,
  Business,
  Button,
  CTA,
  Clients,
  CardDeal,
  FeedBack,
  Footer,
  GetStarted,
  Stats,
  Testimonials,
} from "./Components";

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
        <GetStarted />
        <Stats />
        <Testimonials />
      </div>
    </div>
  </div>
);
ß;

export default App;
