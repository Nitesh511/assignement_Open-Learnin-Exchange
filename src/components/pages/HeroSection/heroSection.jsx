import React from "react";
import heroImage from "../../../assets/heroImage.png";
import Components from "./components";

const HeroSection = () => {
  return (
    <>
      <section className="w-full bg-white pt-10 md:px-4 sm:px-8">
        <div className="xs:max-w-2xl md:max-w-6xl lg:max-w-7xl  h-[584px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[122px]">
          <div className="hidden md:block w-full max-w-[578px]  md:pt-20  md:mt-0 -mt-10 h-full  flex-col justify-center order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We do the work you stay focused on your
              <br className="hidden md:inline" /> customers.
            </h1>

            <p className="text-[#797979] text-lg mb-4 leading-relaxed">
              Awwwesome. is a digital agency passionate about
              <br /> storytelling, visual design, and technology. We <br />
              collaborate with companies small to large around the <br /> world
              to help them engage their audiences and build <br />
              brand awareness.
            </p>

            <p className="text-[#797979] text-lg mb-8 leading-relaxed">
              Our team can create amazing web experiences, <br />
              beginning with deep market research, practical
              <br /> strategies, and professional execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-text bg-[#4E42D9] hover:bg-indigo-700 text-white  py-3 px-6 rounded-sm transition-colors duration-200">
                Explore Projects
              </button>
              <button className="btn-text bg-[#4E42D92E]  text-[#4E42D9] hover:bg-indigo-600 hover:text-white  py-3 px-6 rounded-sm transition-colors duration-200">
                About Us
              </button>
            </div>
          </div>

          <div className="block md:hidden w-full px-3 py-8 order-2 lg:order-1 -mt-32 ">
            <h2
              className="mb-6"
              style={{
                color: "#3B3950",
                textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              We do the work you <br />
              stay focused on your customers.
            </h2>

            <p className="text-[#797979] text-base leading-relaxed mb-4">
              Awwwesome. is a digital agency passionate about storytelling,
              visual design, and technology. We collaborate with companies small
              to large around the world to help them engage their audiences and
              build brand awareness.
            </p>

            <p className="text-[#797979] text-base leading-relaxed mb-6">
              Our team can create amazing web experiences, beginning with deep
              market research, practical strategies, and professional execution.
            </p>

            <div className="flex gap-4">
              <button className="btn-text bg-[#4E42D9] text-white py-3 px-5 rounded shadow hover:bg-[#3c32b8] transition">
                Explore Projects
              </button>
              <button className="btn-text bg-[#E6E1FC] text-[#4E42D9]  py-3 px-5 rounded shadow hover:bg-[#cfc9f5] transition">
                About Us
              </button>
            </div>
          </div>

          <div className="w-full max-w-[500px] h-full flex items-center justify-center order-1 lg:order-2">
            <img
              src={heroImage}
              alt="Digital agency team"
              className="w-full h-full object-contain opacity-100"
            />
          </div>
        </div>
      </section>
      <Components />
    </>
  );
};

export default HeroSection;
