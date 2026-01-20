import { Play } from "lucide-react";

const Section = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start min-h-screen relative overflow-hidden lg:overflow-visible">
      <div className="flex-1 space-y-8 py-12 md:py-20 px-6 md:px-20 max-w-[1400px] z-10 text-center lg:text-left">
        <div className="text-4xl md:text-6xl xl:text-7xl text-gray-50 font-bold space-y-2 md:space-y-4">
          <h1 className="leading-tight">Find the top</h1>
          <h1 className="leading-tight text-[#6528DC]">Hotels nearby.</h1>
        </div>

        <div className="text-gray-400 max-w-lg mx-auto lg:mx-0">
          <h4 className="text-base md:text-lg leading-relaxed">
            We bring you not only a stay option, but an experience in your
            budget to enjoy the luxury.
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-[#6528DC] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#531db5] hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95">
            Discover Now
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 text-gray-300 font-medium rounded-xl transition-all duration-300 hover:text-white hover:bg-white/5 group">
            <div className="p-2.5 bg-white/10 rounded-full group-hover:bg-[#6528DC] transition-all duration-300 group-hover:scale-110">
              <Play size={18} className="fill-current" />
            </div>
            <span>Watch our story</span>
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[550px] aspect-[4/3] lg:aspect-auto lg:w-[500px] xl:w-[600px] lg:h-[550px] mt-10 lg:mt-20 px-6 lg:px-0 lg:mr-10">
        <div className="w-full h-full overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border border-white/10 group">
          <img
            src="/imgs/06.jpg"
            alt="Main Section"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="hidden md:block">
          <div className="absolute -bottom-10 -left-16 w-24 h-24 lg:w-32 lg:h-32 z-20 group">
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-[#1a1c22] shadow-2xl">
              <img
                src="/imgs/12.jpg"
                alt="Circle 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* الدائرة العلوية */}
          <div className="absolute -top-8 -left-12 w-20 h-20 lg:w-24 lg:h-24 z-20 group">
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-[#1a1c22] shadow-2xl">
              <img
                src="/imgs/11.jpg"
                alt="Circle 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
