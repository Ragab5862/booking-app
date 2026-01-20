import React from "react";

const Brands = () => {
  const brands = [
    { id: 1, img: "/imgs/Brands/02.svg", alt: "Voyage" },
    { id: 2, img: "/imgs/Brands/01.svg", alt: "Product" },
    { id: 3, img: "/imgs/Brands/06.svg", alt: "Truant" },
    { id: 4, img: "/imgs/Brands/03.svg", alt: "Avenue" },
    { id: 5, img: "/imgs/Brands/04.svg", alt: "Emblem" },
    { id: 6, img: "/imgs/Brands/05.svg", alt: "Etna" },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto relative overflow-hidden border-y border-white/10 py-10">
        <div className="flex w-max flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-start [&_li]:mx-12 animate-infinite-scroll">
            {brands.map((brand) => (
              <li key={brand.id} className="flex-shrink-0">
                <img
                  src={brand.img}
                  alt={brand.alt}
                  className="h-10 w-auto object-contain brightness-[0.8] contrast-[1.2] invert opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              </li>
            ))}
          </ul>

          <ul
            className="flex items-center justify-start [&_li]:mx-12 animate-infinite-scroll"
            aria-hidden="true"
          >
            {brands.map((brand) => (
              <li key={`dup-${brand.id}`} className="flex-shrink-0">
                <img
                  src={brand.img}
                  alt={brand.alt}
                  className="h-10 w-auto object-contain brightness-[0.8] contrast-[1.2] invert opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
