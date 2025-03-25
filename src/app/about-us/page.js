import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import AboutPage from '../components/AboutUsPage/AboutUsPage';





const aboutPage = () => {
  return (
    <div>
      <head>
      <link rel="canonical" href="https://www.com/about-us" />
      </head>
        <div className="relative min-h-[60vh] bg-gradient-to-r from-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">

        <div className="absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1
            className="text-white mt-32 text-5xl font-bold"
          >
            About Us
          </h1>

          <div
            className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow"
          >
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-sky-300" />
              About Us
            </div>
          </div>
        </div>
      </div>
      {/* <AboutUs/> */}
      <AboutPage/>
      

    </div>
  )
}

export default aboutPage;
