import React from "react";
import { Business, CardDeal, Hero, Navbar, Stats } from "./components";
import styles from "./styles";

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
          component Billings Testmonials Clients CTA Footer
          <CardDeal />
        </div>
      </div>
    </div>
  );
};

export default App;
