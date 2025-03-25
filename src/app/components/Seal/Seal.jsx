// components/CommercialWindow.tsx
import Parking from "@/app/parking-lot-maintenance/page";
import Image from "next/image";
import { FiPhoneCall, FiCheckCircle } from "react-icons/fi";
import SealCards from "../SealCards/SealCards";


const SealSolutions = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
        {/* Left Image - Modified for mobile */}
        <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/seal-solution.png"
              alt="Grease-Removal-pressure-washer"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
         
         
Seal Solutions
          </h2>

          <p className="text-xl text-[#00c6f9] font-semibold">
          More Than Just Pressure Washing – We Seal for Lasting Protection!
          </p>
         

          <div className="space-y-6">
            <div className="space-y-4">
              {/* Content Items */}
              {[
                "At *I Got The Power Washer*, we don’t just clean surfaces—we protect them! Through our sister company, *Complete Seal Solutions*, we offer professional sealing services designed to extend the life and durability of your exterior surfaces. Ohio’s tough weather, with its harsh winters and scorching summers, can take a toll on your property. Our sealing solutions provide a strong defense against these extreme conditions, ensuring long-term durability and resilience.",
               
               
               
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <FiCheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-base lg:text-lg">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-xl text-[#00c6f9] font-semibold">
         
Click Here to Visit Our Sealing Company
          </p>

            <a
              href="tel:513-570-0355"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
             
              completesealsolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* second  */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center mt-4">
        {/* Left Image - Modified for mobile */}
       

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
          

          <p className="text-xl text-[#00c6f9] font-semibold">
          Why Choose Our Sealing Services?
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              {/* Content Items */}
              {[
                "Enhanced Durability– Protects surfaces from water damage, cracking, and erosion.",
                "Weather & UV Resistance – Keeps surfaces looking fresh and new.",
                "Professional-Grade Materials – Long-lasting, high-performance sealants.",
                "Fast & Reliable Service – Minimal disruption to your routine."
               
               
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <FiCheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-base lg:text-lg">{text}</p>
                </div>
              ))}
            </div>

          
          </div>
        </div>

         {/* Left Image - Modified for mobile */}
         <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/pvaer-seal.jpg"
              alt="Grease-Removal-pressure-washer"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              
            </div>
          </div>
        </div>
      </div>

      <SealCards/>
      
    </section>
  );
};

export default SealSolutions;
