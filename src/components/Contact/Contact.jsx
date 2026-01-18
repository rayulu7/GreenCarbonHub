import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ required import

const services = [
  "Solar Installation",
  "Water & Waste-water Management",
 
];

// const cities = [
//   "Hyderabad",
//   "Bangalore",
//   "Chennai",
//   "Delhi",
//   "Mumbai"
// ];

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
    <section id="contact-us" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1D3E]">
            Contact Us
          </h2>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4" autoComplete="off">
            <input
              type="text"
              name="name"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 text-sm sm:text-base"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 text-sm sm:text-base"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 text-sm sm:text-base"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 text-sm sm:text-base"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
            <select
              name="service"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 text-sm sm:text-base"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Choose Service</option>
              {services.map((svc) => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
            <button
              type="submit"
              className="
                bg-green-500 
                text-white 
                font-bold 
                py-2 sm:py-3 
                rounded 
                hover:bg-green-600 
                transition
                text-sm sm:text-base
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
