import { useState } from "react";
import box from "../assets/box.svg";

const Hero = () => {
  const [activeItem, setActiveItem] = useState(1);

  const ActiveTagHandler = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="absolute bg-[#0f1114] text-gray-100 w-screen sm:px-16 px-5">
      <section className="flex space-x-6 sm:space-x-16  pt-10 sm:pt-16">
        <div
          onClick={() => {
            ActiveTagHandler(1);
          }}
        >
          <button
            className={`connectButton text-lg sm:text-2xl ${activeItem == 1 ? "text-[#492bff] " : ""}`}
          >
            All
          </button>
          {activeItem == 1 && (
            <div className="border-t-4  border-[#492bff]"></div>
          )}
        </div>
        <div
          onClick={() => {
            ActiveTagHandler(2);
          }}
        >
          <button
            className={`connectButton text-lg sm:text-2xl ${activeItem == 2 ? "text-[#492bff] " : ""}`}
          >
            Available to claim
          </button>
          {activeItem == 2 && (
            <div className="border-t-4  border-[#492bff]"></div>
          )}
        </div>
        <div
          onClick={() => {
            ActiveTagHandler(3);
          }}
        >
          <button
            className={`connectButton text-lg sm:text-2xl ${activeItem == 3 ? "text-[#492bff] " : ""}`}
          >
            Watchlist
          </button>
          {activeItem == 3 && (
            <div className="border-t-4  border-[#492bff]"></div>
          )}
        </div>
      </section>
      <div className="border-t-[1px] border-gray-100 opacity-50"></div>
      <section className="mt-40 2xl:mt-60">
        <div className="flex flex-col items-center xl:mt-32 ">
          <div className="w-20 h-20 sm:w-[120px] sm:h-[120px] [&amp;_svg]:w-20 [&amp;_svg]:h-20 [&amp;_svg]:sm:w-[120px] [&amp;_svg]:sm:h-[120px]">
            <img src={box} alt="" />
          </div>
          <div className="text-info-lighten1 text-sm sm:text-base text-inter mt-6">
            Log in to Discover Unclaimed Rewards
          </div>
          <div className="flex mt-6">
            <div className="">
              <button
                className="connectButton bg-[#492bff] inline-flex text-foreground items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary hover:bg-primary-lighten1 active:bg-primary disabled:bg-component-btnDisable disabled:text-info-disable h-[36px] rounded-[6px] py-2 text-xs leading-[18px] px-[24px] connectButton"
                type="button"
              >
                Log in
              </button>
            </div>
            <div className="block sm:hidden w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] rounded-full overflow-hidden"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
