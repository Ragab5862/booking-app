import React from "react";

const Nearby = () => {
  const locations = [
    {
      id: 1,
      name: "San Francisco",
      time: "13 min drive",
      img: "/imgs/Explore/01.jpg",
    },
    {
      id: 2,
      name: "Los Angeles",
      time: "25 min drive",
      img: "/imgs/Explore/02.jpg",
    },
    { id: 3, name: "Miami", time: "45 min drive", img: "/imgs/Explore/03.jpg" },
    {
      id: 4,
      name: "Sanjosh",
      time: "55 min drive",
      img: "/imgs/Explore/04.jpg",
    },
    {
      id: 5,
      name: "New York",
      time: "1-hour drive",
      img: "/imgs/Explore/05.jpg",
    },
    {
      id: 6,
      name: "North Justen",
      time: "2-hour drive",
      img: "/imgs/Explore/06.jpg",
    },
    { id: 7, name: "Rio", time: "20 min drive", img: "/imgs/Explore/07.jpg" },
    {
      id: 8,
      name: "Las Vegas",
      time: "3-hour drive",
      img: "/imgs/Explore/08.jpg",
    },
    { id: 9, name: "Texas", time: "55 min drive", img: "/imgs/Explore/09.jpg" },
    {
      id: 10,
      name: "Chicago",
      time: "13 min drive",
      img: "/imgs/Explore/10.jpg",
    },
    {
      id: 11,
      name: "New Keagan",
      time: "35 min drive",
      img: "/imgs/Explore/11.jpg",
    },
    {
      id: 12,
      name: "Oslo",
      time: "1 hour 13 min drive",
      img: "/imgs/Explore/12.jpg",
    },
  ];

  return (
    <div>
      <div className="">
        <h1 className="text-6xl text-white font-bold text-center mb-10">
          E xplore Nearby
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-y-12 gap-x-12 max-w-6xl mx-auto">
        {locations.map((location) => (
          <div
            key={location.id}
            className="group cursor-pointer flex flex-col items-center transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative w-24 h-24 md:w-28 md:h-28 mb-3 overflow-hidden rounded-full border border-white/10 group-hover:border-white/40 transition-all duration-500">
              <img
                src={location.img}
                alt={location.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="text-center">
              <h4 className="text-white text-base font-semibold group-hover:text-green-400 transition-colors">
                {location.name}
              </h4>
              <p className="text-gray-500 text-[12px] font-normal group-hover:text-green-400">
                {location.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nearby;
