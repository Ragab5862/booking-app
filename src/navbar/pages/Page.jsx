import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Page = () => {
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
    <div ref={ref} className="relative ">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 cursor-pointer hover:bg-[#3f4451] rounded-xl transition  hover:text-white  select-none text-gray-300"
      >
        <span>Pages</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`
          absolute top-full mt-2 w-44 z-50
          bg-[#2b2f33] text-gray-300
          rounded-md shadow-lg
          transition-all duration-200
          ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
        `}
      >
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer transition-colors">
          About 
        </div>
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer transition-colors">
          Contact
        </div>
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer transition-colors">
          Out Team
        </div>
        <div className="px-4 py-2 hover:bg-[#3a3f45] hover:text-white cursor-pointer transition-colors">
          Help
        </div>
      </div>
    </div>
  );
};

export default Page;