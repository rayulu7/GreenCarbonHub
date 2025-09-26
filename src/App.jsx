import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Services from './components/Services/Services';
import FooterContent from './components/Footer/Footer';

const CONTACT_ICONS = [
  {
    icon: FaPhoneAlt,
    href: 'tel:+1234567890',
    bg: 'from-blue-600 to-blue-700',
    label: 'Call Phone'
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/your-number',
    bg: 'from-green-500 to-green-600',
    label: 'WhatsApp',
    target: '_blank'
  }
];

const FloatingContactIcons = () => {
  return (
    <div className="fixed right-2 bottom-4 sm:right-4 sm:bottom-6 md:right-6 md:bottom-8 flex flex-col gap-2 sm:gap-3 z-40">
      {CONTACT_ICONS.map((item, index) => (
        <ContactIcon key={index} {...item} />
      ))}
    </div>
  );
};

const ContactIcon = ({ icon: Icon, href, bg, label, target }) => (
  <a
    href={href}
    aria-label={label}
    target={target}
    rel={target ? 'noopener noreferrer' : undefined}
    className="group transition-transform duration-300 hover:scale-110"
  >
    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${bg} shadow-lg hover:shadow-xl border-2 border-white`}>
      <Icon className="text-white text-base sm:text-lg md:text-xl" />
    </div>
  </a>
);

const App = () => {
  return (
    <BrowserRouter>
      <FloatingContactIcons />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <FooterContent />
    </BrowserRouter>
  );
};

export default App;
