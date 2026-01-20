import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Listings = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
    <div ref={ref} className="relative">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 cursor-pointer hover:bg-[#3f4451] rounded-xl transition  hover:text-white  select-none text-gray-300 "
      >
        Listings
        <ChevronDown
          size={20}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      <div
        className={`
          absolute top-full mt-2 w-44
          bg-[#2b2f33] text-gray-300
          rounded-md shadow-lg
          transition-all duration-200
          z-[999]
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer">
          Hotel
        </div>
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer">
          Flight
        </div>
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer">
          Tour
        </div>
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer">
          Cab
        </div>
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer">
          Pooop
        </div>
      </div>
    </div>
  );
};

export default Listings;
