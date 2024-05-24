import React from "react";
import CircleIcon from "../components/CircleIcon";
import CompanyLogos from "../components/CompanyLogos";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <CompanyLogos />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
