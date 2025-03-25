// components/CommercialWindow.tsx
import Image from "next/image";
import { FiPhoneCall, FiCheckCircle } from "react-icons/fi";
import StainCards from "../StainCards/StainCards";

const StainRemoval = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
        {/* Image Column - Vertical Stack */}
        <div className="w-full lg:w-1/2 order-1 lg:order-none space-y-4">
          <div className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Stain-Removal.png"
              alt="Stain removal process"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
            <div className="absolute bottom-2 left-2">
             
            </div>
          </div>
          
          <div className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/WhatsApp-Image-2025-02-10-at-9.16.29-PM-6-1024x768.jpeg"
              alt="Clean results"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
            <div className="absolute bottom-2 left-2">
             
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-1/2 space-y-5 lg:space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Stain Removal
            </h2>
            <p className="text-lg sm:text-xl text-[#00c6f9] font-semibold">
            Make Stains Disappear With Precision Power Washing Services
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Persistent marks on your driveway, patio, siding, or roof can give your property an overlooked and aged appearance. Our expert stain removal service efficiently removes oil, rust, mildew, mold, and various stubborn stains, rejuvenating the original appearance of your surfaces in Cincinnati. Utilizing innovative power washing methods and environmentally safe products, we focus on the toughest stains without inflicting harm.",
              "Various surfaces demand distinct methods, and our skilled team knows how to handle concrete, brick, wood, and additional materials safely and efficiently. Whether it’s a residential or commercial space, we guarantee a comprehensive, detailed clean that boosts curb appeal and safeguards your investment. Our professional cleaning services will ensure your surfaces are immaculate and invigorated.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FiCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="tel:513-570-0355"
            className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-lg text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <FiPhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            513-570-0355
          </a>
        </div>
      </div>
     <StainCards/>
    </section>
  );
};

export default StainRemoval;