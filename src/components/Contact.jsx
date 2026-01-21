import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "Solar Installation",
  "Water & Waste-water Management",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <section id="contact-us" className="bg-white pt-4 pb-4 sm:pt-8 sm:pb-8 lg:py-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">

        <div className="text-center mb-0 sm:mb-4 lg:mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h2>
        </div>

        {}

        <div className="max-w-xl mx-auto">
          <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg animate-fade-in-right overflow-visible">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" autoComplete="off">
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
              {}
              <div className="relative">
                <select
                  name="service"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-sm sm:text-base appearance-none pr-8 sm:pr-10"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Choose Service</option>
                  {services.map((svc) => (
                    <option key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors animate-fade-up"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}