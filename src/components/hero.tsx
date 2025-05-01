import React from "react";

function Hero() {
  const clientLogos = [
    "images/client-databiz.svg",
    "images/client-audiophile.svg",
    "images/client-meet.svg",
    "images/client-maker.svg",
  ];

  return (
    <section className="sm:px-8 sm:py-8">
      <div className="mx-auto container max-w-[1300px]">
        <div className="w-full flex items-end justify-center gap-6 sm:gap-16 flex-col sm:flex-row">
          <img
            src="images/image-hero-mobile.png"
            alt="Hero image mobile"
            className="w-auto block sm:hidden mt-8"
          />

          <div className="flex-1 flex flex-col justify-between lg:items-start items-center text-center lg:text-left sm:px-0 sm:py-0 px-4 py-8">
            <div className="flex flex-col gap-4 phone:gap-6 lg:gap-10 justify-start lg:items-start items-center">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold max-w-full custom:w-[640.5px]">
                Make remote work
              </h1>
              <p className="text-sm md:text-base lg:text-gray sm:w-[640px] lg:w-[450px] max-w-full">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>

              <button className="bg-black text-white rounded-xl px-6 py-3 hover:text-black hover:bg-white border-1 border-black w-full phone:w-fit">
                Learn more
              </button>
            </div>

            <div className="flex gap-8 mt-32 phone:w-[450px] justify-between items-center lg:w-[450px]">
              {clientLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="sm:w-24 w-10 h-auto"
                />
              ))}
            </div>
          </div>

          <img
            src="images/image-hero-desktop.png"
            alt="Hero image"
            className="w-auto xl:h-[832px] h-[600px] h-max-[100%] lg:block hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
