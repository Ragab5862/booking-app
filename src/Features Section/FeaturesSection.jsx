import React from "react";
import { Utensils, Timer, ShieldCheck, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Utensils size={20} className="text-[#4ade80]" />,
      bg: "bg-[#14532d]/30",
      title: "Quality Food",
      desc: "Departure defective arranging rapturous did. Conduct denied adding worthy little.",
    },
    {
      icon: <Timer size={20} className="text-[#f87171]" />,
      bg: "bg-[#7f1d1d]/30",
      title: "Quick Services",
      desc: "Supposing so be resolving breakfast am or perfectly.",
    },
    {
      icon: <ShieldCheck size={20} className="text-[#fb923c]" />,
      bg: "bg-[#7c2d12]/30",
      title: "High Security",
      desc: "Arranging rapturous did believe him all had supported.",
    },
    {
      icon: <Zap size={20} className="text-[#22d3ee]" />,
      bg: "bg-[#164e63]/30",
      title: "24 Hours Alert",
      desc: "Rapturous did believe him all had supported.",
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-24 px-6 py-16 max-w-7xl mx-auto overflow-hidden">
      <div className="relative shrink-0">
        <div className="hidden sm:grid absolute -bottom-5 -right-10 grid-cols-12 gap-2 z-0 opacity-40">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#3d6666]"
            ></div>
          ))}
        </div>

        <div className="relative z-10 w-[280px] sm:w-[320px] h-[400px] sm:h-[470px]">
          <img
            src="/public/imgs/11.jpg"
            alt="Feature"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
        </div>

        <div className="absolute -top-10 sm:top-20 -left-4 sm:-left-[45] bg-[#1e2125] p-5 rounded-2xl shadow-2xl z-20 min-w-[260px] sm:min-w-[280px] border border-white/5">
          <div className="absolute -top-6 -left-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#6528DC] to-[#a855f7] rounded-full flex items-center justify-center shadow-lg border-4 border-[#1e2125]">
            <span className="text-xl">👍</span>
          </div>

          <div className="flex justify-between items-end gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-xs font-medium">Client</span>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((num) => (
                  <img
                    key={num}
                    src={`imgs/users/${num}.jpg`}
                    alt="user"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#1e2125] object-cover"
                  />
                ))}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6528DC] border-2 border-[#1e2125] flex items-center justify-center text-white text-[10px] font-bold">
                  2K+
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-xs font-medium">Rating</span>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-lg">4.5</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 text-center xl:text-left">
        <div className="mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-xl mx-auto xl:mx-0">
            The Best Holidays <br className="hidden sm:block" /> Start Here!
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed mt-4 mx-auto xl:mx-0 text-sm sm:text-base">
            Book your hotel with us and don't forget to grab an awesome hotel
            deal to save massive on your stay.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center xl:items-start group"
            >
              <div
                className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}
              >
                {item.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[240px] mx-auto xl:mx-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
