import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Plus,
  Minus,
  ChevronDown,
} from "lucide-react";

const Forms = () => {
  const [startDate, setStartDate] = useState(null);
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });

  const updateCount = (type, operation) => {
    setGuests((prev) => ({
      ...prev,
      [type]:
        operation === "add" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 -mt-[-100px] relative z-[100]">
      <div
        className="
        bg-[#1e2125]/80 backdrop-blur-xl 
        border border-white/10 
        p-3 rounded-2xl 
        shadow-[0_0_25px_rgba(83,29,181,0.3)] 
        hover:shadow-[0_0_40px_rgba(83,29,181,0.5)] 
        transition-all duration-500 
        flex flex-col lg:flex-row items-center gap-2
      "
      >
        <div className="flex-1 w-full p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-4 group">
          <div className="p-2.5 bg-[#531DB5]/20 rounded-lg group-hover:bg-[#531DB5]/40 transition-colors shadow-[inset_0_0_10px_rgba(83,29,181,0.2)]">
            <MapPin size={22} className="text-[#a855f7]" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              Location
            </span>
            <input
              type="text"
              placeholder="Where to?"
              className="bg-transparent text-white font-medium outline-none text-sm placeholder:text-gray-600 w-full"
            />
          </div>
        </div>

        <div className="flex-1 w-full p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-4 relative group">
          <div className="p-2.5 bg-[#531DB5]/20 rounded-lg group-hover:bg-[#531DB5]/40 transition-colors shadow-[inset_0_0_10px_rgba(83,29,181,0.2)]">
            <Calendar size={22} className="text-[#a855f7]" />
          </div>
          <div className="flex flex-col flex-1 cursor-pointer">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              Check in - out
            </span>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="bg-transparent text-white font-bold outline-none text-sm w-full cursor-pointer mt-0.5"
              placeholderText="Select dates"
              dateFormat="dd/MM/yyyy"
              minDate={new Date(2026, 0, 17)}
            />
          </div>
        </div>

        <div className="hidden lg:block w-[1px] h-10 bg-gradient-to-b from-transparent via-[#531DB5]/50 to-transparent"></div>

        <div
          className="flex-1 w-full p-3 rounded-xl hover:bg-white/5 transition-all flex items-center gap-4 relative cursor-pointer group"
          onClick={() => setShowGuests(!showGuests)}
        >
          <div className="p-2.5 bg-[#531DB5]/20 rounded-lg group-hover:bg-[#531DB5]/40 transition-colors shadow-[inset_0_0_10px_rgba(83,29,181,0.2)]">
            <Users size={22} className="text-[#a855f7]" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              Guests & rooms
            </span>
            <p className="text-white font-bold text-sm mt-0.5">{`${
              guests.adults + guests.children
            } Guests, ${guests.rooms} Room`}</p>
          </div>
          <ChevronDown
            size={16}
            className={`text-gray-500 transition-transform duration-300 ${
              showGuests ? "rotate-180 text-white" : ""
            }`}
          />

          {showGuests && (
            <div
              className="absolute top-[110%] left-0 w-full bg-[#1e2125] border border-white/10 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] z-[110] space-y-5 animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-200 font-medium">Adults</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateCount("adults", "sub")}
                    className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full text-white hover:bg-[#531DB5] transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-white font-bold w-4 text-center">
                    {guests.adults}
                  </span>
                  <button
                    onClick={() => updateCount("adults", "add")}
                    className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full text-white hover:bg-[#531DB5] transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-200 font-medium">Children</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateCount("children", "sub")}
                    className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full text-white hover:bg-[#531DB5] transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-white font-bold w-4 text-center">
                    {guests.children}
                  </span>
                  <button
                    onClick={() => updateCount("children", "add")}
                    className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full text-white hover:bg-[#531DB5] transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowGuests(false)}
                className="w-full py-2 bg-[#531DB5]/20 text-[#a855f7] rounded-lg font-bold text-xs hover:bg-[#531DB5] hover:text-white transition-all"
              >
                Apply Details
              </button>
            </div>
          )}
        </div>

        <button
          className="
          w-full lg:w-auto 
          bg-[#5317c3] hover:bg-[#6528DC] 
          p-5 rounded-2xl 
          transition-all duration-300 
          shadow-[0_0_15px_rgba(83,29,181,0.5)] 
          hover:shadow-[0_0_30px_rgba(83,29,181,0.7)] 
          active:scale-95 group
        "
        >
          <Search
            className="text-white group-hover:scale-110 transition-transform"
            size={26}
            strokeWidth={2.5}
          />
        </button>
      </div>
    </div>
  );
};

export default Forms;
