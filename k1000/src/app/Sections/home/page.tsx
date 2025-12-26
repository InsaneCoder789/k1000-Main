import React from "react";
import Hero from "../hero/Hero";
import Benifits from "../benefits/BenefitsSection";
import AboutSection from "../about/AboutSection";
import BenefitsSection from "../benefits/BenefitsSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <BenefitsSection />
    </div>
  );
};

export default Home;