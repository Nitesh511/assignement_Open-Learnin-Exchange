import React from "react";
import apps from "../../../assets/apps.svg";
import startup from "../../../assets/startup.svg";
import consoles from "../../../assets/console.svg";
import iconai from "../../../assets/icon-ai.png";
const WhatWeDo = () => {
  const services = [
    {
      icon: apps,
      title: "Web Application",
      description:
        "Platform independent business solutions for maximum availability.",
    },
    {
      icon: startup,
      title: "SEO",
      description: "Let the world find you on top of others.",
    },
    {
      icon: consoles,
      title: "Game Development",
      description: "Interactive games with perfect graphics.",
    },
    {
      icon: iconai,
      title: "IoT/AI/Robotic",
      description: "Advanced autonomous technologies to make life simple.",
    },
  ];

  return (
    <div className="py-10 px-0 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">What we do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          >
            <div
              className="flex items-center justify-center mb-4"
              style={{
                backgroundColor: ["#FFF2F2", "#E2F3FF", "#FDFBDA", "#FFE7FB"][
                  index
                ],
                width: "91px",
                height: "90px",
                borderRadius: "20px",
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                style={{
                  width: "43px",
                  height: "43px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  top: "24px",
                  left: "121px",
                }}
              />
            </div>
            <h3 className="text-[#3B3950] mb-2">{service.title}</h3>
            <p className="text-center text-[#797979]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
