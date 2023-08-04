import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bannerbottom from "./components/Banner-bottom-btn/BannerBottom";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import MobileApp from "./components/MobileApp";
import Faq from "./components/Faq";
import WhatsApp from "./components/whats-app/WhatsApp";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bannerbottom />
      <Services />
      <About />
      <Testimonials />
      <MobileApp />
      <Faq />
      {/* <WhatsApp /> */}
      <Footer />
    </>
  );
}

export default App;
