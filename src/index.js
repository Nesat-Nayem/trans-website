import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAgreement from "./components/UserAgreements/UserAgreement";
import VendorAgreement from "./components/vendor-agreement/VendorAgreement";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms-and-condition" element={<UserAgreement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/vendorAgreement" element={<VendorAgreement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
