import React from 'react';
import { Phone, Mail, Hotel, Plane, Map, Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        <div className="lg:col-span-1 space-y-6 ml-12">
          <div className="flex items-center gap-3">
             <div className="bg-blue-600 p-2 rounded-full">
                <Plane className="rotate-45 text-white" size={24} />
             </div>
             <h2 className="text-3xl font-bold italic">Booking</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Departure defective arranging rapturous did believe him all had supported.
          </p>
          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3 hover:text-white cursor-pointer">
              <Phone size={18} />
              <span>1234 568 963</span>
            </div>
            <div className="flex items-center gap-3 hover:text-white cursor-pointer">
              <Mail size={18} />
              <span>example@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 ml-12">
          <h3 className="text-xl font-bold">Page</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
            <li className="hover:text-white cursor-pointer">News and Blog</li>
            <li className="hover:text-white cursor-pointer">Meet a Team</li>
          </ul>
        </div>

        <div className="space-y-6 ml-12">
          <h3 className="text-xl font-bold">Link</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Sign up</li>
            <li className="hover:text-white cursor-pointer">Sign in</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li className="hover:text-white cursor-pointer">Cookie</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        <div className="space-y-6 ml-12">
          <h3 className="text-xl font-bold">Global Site</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">India</li>
            <li className="hover:text-white cursor-pointer">California</li>
            <li className="hover:text-white cursor-pointer">Indonesia</li>
            <li className="hover:text-white cursor-pointer">Canada</li>
            <li className="hover:text-white cursor-pointer">Malaysia</li>
          </ul>
        </div>

        <div className="space-y-6 ml-12">
          <h3 className="text-xl font-bold">Booking</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <Hotel size={18} />
              <span>Hotel</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <Plane size={18} />
              <span>Flight</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <Map size={18} />
              <span>Tour</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <Car size={18} />
              <span>Cabs</span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;