import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("red");
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev === "red" ? "green" : "red"));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setOpen(!open)}
        className="relative p-2 bg-[#2b2e35] rounded-md cursor-pointer hover:bg-[#3f4451] transition-all group"
      >
        <Bell
          size={20}
          className="text-gray-300 group-hover:text-white transition-colors"
        />

        <span className="absolute top-1.5 right-1.5 flex h-3 w-3">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              status === "red" ? "bg-red-400" : "bg-green-400"
            }`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 border border-[#1e2125] ${
              status === "red" ? "bg-red-500" : "bg-green-500"
            }`}
          ></span>
        </span>
      </div>

      <div
        className={`
          absolute right-0 mt-3 w-80 bg-[#1e2125] border border-gray-700 
          rounded-xl shadow-2xl z-50 overflow-hidden transition-all duration-300
          ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2"
          }
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#24272d]">
          <div className="flex items-center gap-2">
            <h3 className="text-white font-bold">Notifications</h3>
            <span
              className={`${
                status === "red" ? "bg-red-500" : "bg-green-500"
              } text-white text-[10px] px-1.5 py-0.5 rounded-full transition-colors duration-500`}
            >
              New activity
            </span>
          </div>
        </div>

        <div className="p-4 text-center text-gray-400 text-sm italic">
          Check your latest updates here...
        </div>
      </div>
    </div>
  );
};

export default Notification;
