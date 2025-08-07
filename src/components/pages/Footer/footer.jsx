import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#292838] text-white py-16 px-6 md:-mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1 md:ml-[-32px]">
              <h2 className="footer-header text-white mb-4">Awwwsome.</h2>
              <p className="text-white text-sm leading-relaxed">
                Our team can create amazing web experiences, beginning with deep
                market research, practical strategies, and professional
                execution.
              </p>
            </div>

            {/* RIGHT SECTION */}
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ABOUT US */}
              <div className="md:ml-32">
                <h4 className="text-white font-semibold mb-6">ABOUT US</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      <p>Works</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Strategy</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Releases</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Press</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Mission</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* CUSTOMERS */}
              <div className="md:ml-16">
                <h4 className="text-white mb-6">CUSTOMERS</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Trending</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      <p>Popular</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Customers</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Features</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* SUPPORT */}
              <div>
                <h4 className="text-white font-semibold mb-6">SUPPORT</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      <p>Developers</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Support</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p> Customer Service</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-colors text-sm"
                    >
                      {" "}
                      <p>Guide</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="text-center text-white pt-8 py-3 border-slate-700 bg-[#23222F] -mt-16">
        <p className="footer-last">2022 © Awwwsome Designers</p>
      </div>
    </>
  );
};

export default Footer;
