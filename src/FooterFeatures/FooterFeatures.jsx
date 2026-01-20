import React from "react";
import { HandHeart, HandCoins } from "lucide-react";

const FooterFeatures = () => {
  return (
    <section className="bg-[#2b2f34] py-12 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* card 1 */}

          <div className="bg-[#686A6E] p-6 rounded-xl flex items-start gap-4 flex-1 md:w-[350px]">
            <span className="text-3xl">
              <HandHeart size={32} className="text-white" />
            </span>
            <div>
              <h4 className="text-white text-xl font-bold mb-2">24x7 Help</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                If we fall short of your expectation in any way, let us know
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-[#686A6E] p-6 rounded-xl flex items-start gap-4 flex-1 md:w-[350px]">
            <span className="text-3xl">
              <HandCoins size={32} className="text-white" />
            </span>
            <div>
              <h4 className="text-white text-xl font-bold mb-2">
                Payment Trust
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                All refunds come with no questions asked guarantee
              </p>
            </div>
          </div>
        </div>

        {/*Download App */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="text-white text-xl font-bold">Download app</h4>
          <div className="flex gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 cursor-pointer hover:opacity-80 transition-all"
              />
            </a>
            <a
              href="https://apps.apple.com/us/developer/booking-com/id367003842?l=ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/imgs/app-store.svg"
                alt="App Store"
                className="h-12 cursor-pointer hover:opacity-80 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterFeatures;
