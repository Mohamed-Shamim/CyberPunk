import React from "react";
import CubePunkSection from "./components/Hero";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Dreams from "./components/Dreams";
import Section from "./components/Section";
import Greetings from "./components/Greetings";
import Services from "./components/Services";
import FAQSection from "./components/FAQSection";
import CyberFooter from "./components/Footer";

const App = () => {
  return (
    <Section>
      <div className=" ">
        <Header />
        <Hero />
        <Dreams />
        <Greetings />
        <Services />
        <FAQSection />
        <CyberFooter />
      </div>
    </Section>
  );
};

export default App;
