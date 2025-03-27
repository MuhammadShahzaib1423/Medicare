import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg w-full">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h2>
        
        <p className="text-gray-600 text-center mb-8">
          Have any questions? Feel free to reach out to us!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-600 text-xl" />
              <span className="text-gray-700 text-lg">+92 123 456 7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-gray-700 text-lg">info@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700 text-lg">Islamabad, Pakistan</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
