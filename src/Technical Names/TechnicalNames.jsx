import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronUp,
} from "lucide-react";
import { useState, useEffect } from "react";
const TechnicalNames = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#1a1c22] text-white py-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 ml-12">
          <h3 className="text-xl font-bold mb-4">Top Links</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-400 text-sm">
            {[
              "Flights",
              "Hotels",
              "Tours",
              "Cabs",
              "About",
              "Contact us",
              "Blogs",
              "Services",
              "Policy",
              "Testimonials",
              "Newsletters",
              "Podcasts",
              "Protests",
              "NewsCyber",
              "Education",
              "Sports",
              "Tech and Auto",
              "Opinion",
              "Share Market",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div className="ml-12">
            <h4 className="font-semibold mb-4 text-gray-200">
              Payment & Security
            </h4>
            <div className="flex gap-3">
              <img
                src="/public/imgs/Payment/expresscard.svg"
                alt="PayPal"
                className="h-8 rounded bg-white px-1"
              />
              <img
                src="/public/imgs/Payment/visa.svg"
                className="h-8 rounded"
              />
              <img
                src="/public/imgs/Payment/mastercard.svg"
                alt="MasterCard"
                className="h-8"
              />
              <img
                src="/public/imgs/Payment/paypal.svg"
                alt="Amex"
                className="h-8"
              />
            </div>
          </div>

          <div className="ml-12">
            <h4 className="font-semibold mb-4 text-gray-200">Follow us on</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/bookingcom"
                className="p-2 bg-blue-600 rounded hover:opacity-80"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/bookingcom"
                className="p-2 bg-pink-600 rounded hover:opacity-80"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/bookingcom"
                className="p-2 bg-sky-400 rounded hover:opacity-80"
              >
                <Twitter
                  className="text-white hover:text-gray-400 transition"
                  size={20}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/booking.com/"
                className="p-2 bg-blue-800 rounded hover:opacity-80"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:row justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-6">
          <p>Copyrights ©2023 Booking. Build by .</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <a href="#" className="hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="hover:underline">
              Refund policy
            </a>
          </div>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default TechnicalNames;
