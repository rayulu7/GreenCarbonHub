import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Home";
import Services from "./components/Services/Services";
import WhyGCHSection from "./components/GCH/WhyGCH";
import Clients from "./components/Clients/Clients";
import Team from "./components/OurTeam/Team";
import Board from "./components/AdvisoryBoard/Board";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Loading/LoadingScreen";
import SolarInstallation from "./components/pages/SolarInstallation/SolarInstallation";
import Residential from "./components/pages/SolarInstallation/Residential";
import HousingSociety from "./components/pages/SolarInstallation/HousingSociety";
import IndustrialCommercial from "./components/pages/SolarInstallation/IndustrialCommercial";
import WaterManagementPage from "./components/pages/WaterManagement/WaterManagementPage";
import BioMethanationPage from "./components/pages/BioMethanation/BioMethanationPage";
import SolarMaintenance from "./components/pages/SolarMaintenance/SolarMaintenance";
import Investments from "./components/pages/Investments/Investments";
import Store from "./components/pages/Store/Store";

// Layout Component with Navbar and Footer
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <Layout>
      <Hero />
      <section id="why-gch">
        <WhyGCHSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="our-team">
        <Team />
      </section>
      <section id="advisory-board">
        <Board />
      </section>
      <section id="contact-us">
        <Contact />
      </section>
    </Layout>
  );
}

// Solar Installation Page
function SolarInstallationPage() {
  return (
    <Layout>
      <SolarInstallation />
    </Layout>
  );
}

// Residential Page
function ResidentialPage() {
  return (
    <Layout>
      <Residential />
    </Layout>
  );
}

// Housing Society Page
function HousingSocietyPage() {
  return (
    <Layout>
      <HousingSociety />
    </Layout>
  );
}

// Industrial Commercial Page
function IndustrialCommercialPage() {
  return (
    <Layout>
      <IndustrialCommercial />
    </Layout>
  );
}

// Water Management Page
function WaterManagementPageComponent() {
  return (
    <Layout>
      <WaterManagementPage />
    </Layout>
  );
}

// Bio Methanation Page
function BioMethanationPageComponent() {
  return (
    <Layout>
      <BioMethanationPage />
    </Layout>
  );
}

// Solar Maintenance Page
function SolarMaintenancePage() {
  return (
    <Layout>
      <SolarMaintenance />
    </Layout>
  );
}

// Investments Page
function InvestmentsPage() {
  return (
    <Layout>
      <Investments />
    </Layout>
  );
}

// Store Page
function StorePage() {
  return (
    <Layout>
      <Store />
    </Layout>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - you can adjust this duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solar-installation" element={<SolarInstallationPage />} />
        <Route path="/water-management" element={<WaterManagementPageComponent />} />
        <Route path="/bio-methanation" element={<BioMethanationPageComponent />} />
        <Route path="/solar-maintenance" element={<SolarMaintenancePage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/residential" element={<ResidentialPage />} />
        <Route path="/housing-society" element={<HousingSocietyPage />} />
        <Route path="/industrial-commercial" element={<IndustrialCommercialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
