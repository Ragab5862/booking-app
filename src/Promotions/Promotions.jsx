import React from "react";

const Promotions = () => {
  const offers = [
    { id: 1, title: "Daily 50 Lucky Winners get a Free Stay", validity: "Valid till: 16 Nov", image: "/imgs/Promotions imgs/01.jpg", bgColor: "bg-[#1e2125]" },
    { id: 2, title: "Daily 60 Lucky Winners get a Free Stay", validity: "Valid till: 17 Nov", image: "/imgs/Promotions imgs/821237_85037191.jpg", bgColor: "bg-[#1e2125]" },
    { id: 3, title: "Daily 70 Lucky Winners get a Free Stay", validity: "Valid till: 18 Nov", image: "/imgs/Promotions imgs/03.jpg", bgColor: "bg-[#1e2125]" },
  ];

  const doubledOffers = [...offers, ...offers];

  return (
    <div className="py-10 bg-[#1e2125]">
      <div className="px-6 md:px-20 mb-6">
        <h2 className="text-white text-2xl font-bold uppercase tracking-wider">Special Offers</h2>
      </div>

      <div className="relative mx-6 md:mx-20 overflow-hidden rounded-[2.5rem]">
        
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#1e2125] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#1e2125] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 animate-marquee pause-on-hover">
          {doubledOffers.map((offer, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[450px] h-[180px] rounded-[2rem] overflow-hidden flex border border-white/5 shadow-2xl"
            >
              <div className="w-2/5 h-full">
                <img src={offer.image} className="w-full h-full object-cover" alt="promo" />
              </div>
              <div className={`${offer.bgColor} w-3/5 p-6 flex flex-col justify-center`}>
                <h3 className="text-white font-bold text-lg leading-tight mb-2 whitespace-normal">
                  {offer.title}
                </h3>
                <p className="text-gray-400 text-sm italic">{offer.validity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default Promotions;