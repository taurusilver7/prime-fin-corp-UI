import React from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonial,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary w-full items-start justify-center">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="bg-primary w-full px-6 sm:px-16 items-start justify-center">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
