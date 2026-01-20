import { MapPin, Star } from "lucide-react";

const FeaturedHotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Baga Comfort",
      location: "New York",
      price: 786,
      rating: 4.5,
      image: "/imgs/featured-hotels-img/01 (1).jpg",
    },
    {
      id: 2,
      name: "New Apollo Hotel",
      location: "California",
      price: 567,
      rating: 4.8,
      image: "/imgs/featured-hotels-img/02.jpg",
    },
    {
      id: 3,
      name: "Baga Comfort",
      location: "New York",
      price: 786,
      rating: 4.5,
      image: "/imgs/featured-hotels-img/03.jpg",
    },
    {
      id: 4,
      name: "Helios Beach Resort",
      location: "Chicago",
      price: 665,
      rating: 4.8,
      image: "/imgs/featured-hotels-img/04.jpg",
    },
  ];

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <div>
        <h1 className="text-4xl text-white font-bold text-center mb-10">
          Featured Hotels
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="group cursor-pointer">
            <div className="relative h-72 w-full overflow-hidden rounded-[1.5rem] mb-3">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-xl">
                <MapPin size={14} className="text-white" strokeWidth={2} />
                <span className="text-[11px] font-medium tracking-wide">
                  {hotel.location}
                </span>
              </div>
            </div>

            <div className="space-y-1.5 px-1">
              <h3 className="text-white text-lg font-bold group-hover:text-green-400 transition-colors duration-300">
                {hotel.name}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-green-400 text-xl font-black italic">
                    ${hotel.price}
                    <span className="text-gray-500 text-[10px] not-italic font-medium ml-1 hover:text-white">
                      /starting at
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-1 text-white bg-white/5 px-2 py-1 rounded-lg">
                  <span className="font-bold text-xs">{hotel.rating}</span>
                  <Star size={12} fill="#facc15" className="text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHotels;
