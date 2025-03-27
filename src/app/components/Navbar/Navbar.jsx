"use client";
import dynamic from "next/dynamic";

import { useState, useEffect } from "react";
import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaImages,
  FaTools,
  FaHandshake,
  FaChevronDown,
  FaBars,
  FaChevronRight,
} from "react-icons/fa";
import Bubble from "../../../../public/animations/Bubbles.json"; // Adjust path as needed
// import Lottie from "lottie-react";
// Import Lottie dynamically to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  // Function to toggle dropdowns independently
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleSubDropdown = (submenu) => {
    setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
  };

  // Close navbar & dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav")) {
        setMenuOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white relative">
     {/* Lottie Background Animation - Modified */}
     <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        <Lottie
          animationData={Bubble}
          loop={true}
          speed={0.1}
          style={{ 
            width: '100%',
            height: '100%',
            transform: 'scale(2)' // Scale up the animation
          }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice' // Cover entire area
          }}
          className="hidden md:block" // Only show on desktop
        />
        {/* Mobile version remains unscaled */}
        <Lottie
          animationData={Bubble}
          loop={true}
          style={{ width: '100%', height: '100%',transform: 'scale(2)'  }}
          className="md:hidden" // Only show on mobile
        />
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
      <div className="w-32 h-auto"> {/* Logo के original aspect ratio को maintain करने के लिए */}
  <img
    src="/images/uft.png"
    className="w-full h-full object-contain"  /* object-contain का प्रयोग करें */
    alt="Logo"
  />
</div>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
          <a
            href="/get-estimate"
            className="text-white bg-[#00C6F9] hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  focus:outline-none "
          >
            Free Estimate
          </a>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-sky-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-5 h-5" />
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="/"
                className="flex items-center py-2 px-3 text-[#00C6F9] hover:text-[#80a2d4]"
              >
                
                Home
              </a>
            </li>

            {/* About Us Dropdown */}
            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("about");
                }}
                className="flex items-center py-2 px-3 text-[#00C6F9] hover:text-[#00C6F9] "
              >
                
                {/* <FaBuilding className="mr-2" /> */}
                <a href="/about-us">
                About Us</a>
                <FaChevronDown className="ml-2" />
              </button>
              {openDropdown === "about" && (
                <div className="absolute z-10 w-auto text-sm bg-white border border-sky-300 rounded-lg shadow-md">
                  <ul className="p-4 space-y-4 text-[#00C6F9]">
                    <li>
                      <a href="/annual-maintenance-program" className="hover:text-[#00C6F9]">
                        Annual Maintenance Program
                      </a>
                    </li>
                    <li>
                      <a href="/the-clean-team" className="hover:text-[#00C6F9]">
                        The Clean Team
                      </a>
                    </li>
                    <li>
                      <a href="/career" className="hover:text-[#00C6F9]">
                        Career
                      </a>
                    </li>
                    <li>
                      <a href="/reviews" className="hover:text-[#00C6F9]">
                        Our Reviews
                      </a>
                    </li>
                    <li>
                      <a href="/contact-us" className="hover:text-[#00C6F9]">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/satisfaction-guarantee-policy" className="hover:text-[#00C6F9]">
                        Satisfaction Guarantee Policy
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Residential Dropdown */}
            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("residential");
                }}
                className="flex items-center py-2 px-3 text-[#00C6F9] hover:text-[#00C6F9]"
              >
                {/* <FaUsers className="mr-2" /> */}
                Residential
                <FaChevronDown className="ml-2" />
              </button>
              {openDropdown === "residential" && (
                <div className="absolute z-10 w-auto text-sm bg-white border border-sky-300 rounded-lg shadow-md">
                  <ul className="p-4 space-y-4 text-[#00C6F9]">
                    <li>
                      <a href="/pressure-washing" className="hover:text-[#00C6F9]">
                        Pressure Washing
                      </a>
                    </li>
                    <li>
                      <a href="/concrete-sealing" className="hover:text-[#00C6F9]">
                        Concrete Sealing
                      </a>
                    </li>
                    <li>
                      <a href="/house-washing" className="hover:text-[#00C6F9]">
                        House Washing
                      </a>
                    </li>
                    <li>
                      <a href="/roof-washing" className="hover:text-[#00C6F9]">
                        Roof Washing
                      </a>
                    </li>
                    <li>
                      <a href="/window-cleaning-cincinnati" className="hover:text-[#00C6F9]">
                        Window Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="/gutter-cleaning" className="hover:text-[#00C6F9]">
                        Gutter Cleaning
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Commercial Dropdown */}
            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("commercial");
                }}
                className="flex items-center py-2 px-3 text-[#00C6F9] hover:text-[#00C6F9]"
              >
                {/* <FaHandshake className="mr-2" /> */}
                Commercial
                <FaChevronDown className="ml-2" />
              </button>
              {openDropdown === "commercial" && (
                <div className="absolute z-10 min-w-[200px] text-sm bg-white border border-sky-300 rounded-lg shadow-md">
                  <ul className="p-4 space-y-4 text-[#00C6F9]">
                    <li>
                      <a href="/building-wash" className="hover:text-[#00C6F9]">
                        Building Wash
                      </a>
                    </li>
                    <li>
                      <a href="/commercial-pressure-washing" className="hover:text-[#00C6F9]">
                        Commercial Pressure Washing
                      </a>
                    </li>
                    <li>
                      <a href="/commercial-gutter-cleaning" className="hover:text-[#00C6F9]">
                        Commercial Gutter Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="/commercial-window-cleaning" className="hover:text-[#00C6F9]">
                        Commercial Window Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="/restaurant" className="hover:text-[#00C6F9]">
                        Restaurant
                      </a>
                    </li>
                    <li>
                      <a href="/gas-station" className="hover:text-[#00C6F9]">
                        Gas Station
                      </a>
                    </li>

                    {/* Stain Removal Dropdown */}
                    <li className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubDropdown("stainRemoval");
                        }}
                        className="flex items-center w-full text-left hover:text-[#00C6F9] "
                      >
                        <a href="/stain-removal">Stain Removal</a>
                        <FaChevronRight className="ml-2" />
                      </button>
                      {openSubDropdown === "stainRemoval" && (
                        <div className="absolute left-full top-0 z-10 min-w-[220px] bg-white border border-sky-300 rounded-lg shadow-md">
                          <ul className="p-4 space-y-4 text-[#00C6F9]">
                            <li>
                              <a href="/graffiti-removal" className="hover:text-[#00C6F9]">
                                Graffiti Removal
                              </a>
                            </li>
                            <li>
                              <a href="/rust-removal" className="hover:text-[#00C6F9]">
                                Rust Removal
                              </a>
                            </li>
                            <li>
                              <a href="/efflorescence-removal" className="hover:text-[#00C6F9]">
                                Efflorescence Removal
                              </a>
                            </li>
                            <li>
                              <a href="/gum-removal" className="hover:text-[#00C6F9]">
                                Gum Removal
                              </a>
                            </li>
                            <li>
                              <a href="/oil-removal" className="hover:text-[#00C6F9]">
                                Oil Removal
                              </a>
                            </li>
                            <li>
                              <a href="/grease-removal" className="hover:text-[#00C6F9]">
                                Grease Removal
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    {/* Parkinglot Dropdown */}

                    <li className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubDropdown("parking");
                        }}
                        className="flex items-center w-full text-left hover:text-[#00C6F9] "
                      >
                       <a href="/parking-lot-maintenance">Parking Lot Maintenance</a> 
                        <FaChevronRight className="ml-2" />
                      </button>
                      {openSubDropdown === "parking" && (
                        <div className="absolute left-full top-0 z-10 min-w-[220px] bg-white border border-sky-300 rounded-lg shadow-md">
                          <ul className="p-4 space-y-4 text-[#00C6F9]">
                            <li>
                              <a href="/parking-lot-washing" className="hover:text-[#00C6F9]">
                              Parking Lot Washing
                              </a>
                            </li>
                            <li>
                              <a href="/sweeping-cleaning" className="hover:text-[#00C6F9]">
                              Sweeping & Cleaning
                              </a>
                            </li>
                           
                          </ul>
                        </div>
                      )}
                    </li>
                    <li>
                      <a href="/post-construction-clean-up" className="hover:text-[#00C6F9]">
                      Post Construction Clean Up
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Gallery Dropdown */}
            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("gallery");
                }}
                className="flex items-center py-2 px-3 text-[#00C6F9] hover:text-[#00C6F9]"
              >
                {/* <FaImages className="mr-2" /> */}
                Gallery
                <FaChevronDown className="ml-2" />
              </button>
              {openDropdown === "gallery" && (
                <div className="absolute z-10 w-auto text-sm bg-white border border-sky-300 rounded-lg shadow-md">
                  <ul className="p-4 space-y-4 text-[#00C6F9]">
                    <li>
                      <a href="/commercial-gallery" className=" hover:text-[#00C6F9]">Commercial-Gallery</a>
                    </li>
                    <li>
                      <a href="/residential-gallery" className=" hover:text-[#00C6F9]" >Residential-Gallery</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Services */}
            <li>
              <a
                href="/seal-solutions"
                className="flex items-center py-2 px-3 text-[#00C6F9] hover:text-[#00C6F9]"
              >
                {/* <FaTools className="mr-2" /> */}
                Seal Solutions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
