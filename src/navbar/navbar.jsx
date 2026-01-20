import React, { useState } from "react";
import {
  ChevronDown,
  MoreHorizontal,
  Plane,
  Hotel,
  Globe,
  Car,
  Bell,
  Menu, // أيقونة القائمة للموبايل
  X,    // أيقونة الإغلاق للموبايل
} from "lucide-react";

import Listings from "./Listings/Listings";
import Page from "./pages/Page";
import Accounts from "./Accounts/Accounts";
import Notification from "./Notification/Notification";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1e2125] text-white font-sans relative">
      {/* Container الرئيسي */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        
        {/* اليسار: اللوجو والقائمة الأساسية (تختفي في الموبايل) */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-indigo-600 p-1.5 rounded-full">
              <Plane className="w-5 h-5 md:w-6 md:h-6 rotate-45 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight">Booking</span>
          </div>

          {/* الروابط: تظهر فقط من شاشة lg فأعلى */}
          <div className="hidden lg:flex items-center gap-6 text-gray-300 font-medium">
            <Listings />
            <Page />
            <Accounts />
            <MoreHorizontal className="cursor-pointer hover:text-white" size={20} />
          </div>
        </div>

        {/* المنتصف: أزرار الفئات (تختفي في الموبايل والتابلت الصغير) */}
        <div className="hidden md:flex items-center bg-[#2b2e35] rounded-lg p-1">
          <button className="flex items-center gap-2 bg-[#3f4451] text-white px-3 lg:px-4 py-2 rounded-md transition text-sm">
            <Hotel size={16} className="text-indigo-400" />
            <span>Hotel</span>
          </button>
          <button className="flex items-center gap-2 px-3 lg:px-4 py-2 hover:bg-[#3f4451] rounded-md transition text-gray-400 hover:text-white text-sm">
            <Plane size={16} className="rotate-45" />
            <span>Flight</span>
          </button>
          <button className="flex items-center gap-2 px-3 lg:px-4 py-2 hover:bg-[#3f4451] rounded-md transition text-gray-400 hover:text-white text-sm">
            <Globe size={16} />
            <span>Tour</span>
          </button>
          <button className="flex items-center gap-2 px-3 lg:px-4 py-2 hover:bg-[#3f4451] rounded-md transition text-gray-400 hover:text-white text-sm">
            <Car size={16} />
            <span>Cab</span>
          </button>
        </div>

        {/* اليمين: الإشعارات، البروفايل، وزر المنيو للموبايل */}
        <div className="flex items-center gap-3 md:gap-4">
          <Notification />
          
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden border border-gray-600 cursor-pointer">
            <img
              src="/public/imgs/ragab.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* زر الهامبرجر يظهر فقط في الشاشات أقل من lg */}
          <button 
            className="lg:hidden p-1 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل (Mobile Menu) */}
      <div className={`
        lg:hidden absolute top-full left-0 w-full bg-[#1e2125] border-t border-gray-800 z-[100] transition-all duration-300
        ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
      `}>
        <div className="p-4 flex flex-col gap-4">
          {/* روابط القائمة */}
          <div className="flex flex-col gap-2 border-b border-gray-800 pb-4">
             <div className="text-gray-300 py-2 border-b border-gray-800/50"><Listings /></div>
             <div className="text-gray-300 py-2 border-b border-gray-800/50"><Page /></div>
             <div className="text-gray-300 py-2"><Accounts /></div>
          </div>

          {/* أزرار الفئات داخل الموبايل (إذا كانت الشاشة صغيرة جداً) */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            <button className="flex items-center justify-center gap-2 bg-[#2b2e35] p-3 rounded-lg text-sm">
              <Hotel size={16} className="text-indigo-400" />
              <span>Hotel</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#2b2e35] p-3 rounded-lg text-sm text-gray-400">
              <Plane size={16} className="rotate-45" />
              <span>Flight</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;