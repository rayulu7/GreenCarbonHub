import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ required import

const services = [
  "Solar Installation",
  "Water & Waste-water Management",
  "Bio-Methanation",
];

const cities = [
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Delhi",
  "Mumbai"
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
    <section id="contact-us" className="py-4 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1D3E]">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          
          <div className="lg:order-2">
            <div className="bg-white shadow-md rounded-lg p-6">
              
                {/* <div className="text-center my-2">
                  <Link
                    to="/residential-services"
                    className="text-xs sm:text-sm text-green-600 hover:text-blue-800 cursor-pointer whitespace-nowrap"
                  >
                    Click here for Residential
                  </Link>
                </div> */}

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

               
                <select
                  name="city"
                  required
                  className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-100 text-sm sm:text-base"
                  value={form.city}
                  onChange={handleChange}
                >
                  <option value="">Choose City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>

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

         
          <div className="order-2 lg:order-1 space-y-8 md:space-y-10">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight sm:leading-snug">
              Contact Us for Free
                <br />
                Net-Zero Consultancy
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg">
                We're here to help you. Reach out for inquiries, collaborations,
                or support and we'll respond promptly.
              </p>
            </div>

            <div className="space-y-5 md:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 md:p-3 bg-green-100 rounded-full">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <p className="text-base md:text-lg font-medium text-gray-800">
                +91-9182445715 / +91-9182445300
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 md:p-3 bg-green-100 rounded-full">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  Mansoorabad, Telangana, India
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 md:p-3 bg-green-100 rounded-full">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <p className="text-base md:text-lg font-medium text-gray-800">
                info@greencarbonhub.com
               
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
