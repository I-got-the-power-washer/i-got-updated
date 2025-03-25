// components/BuildingWash.tsx
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

const CommercialPressure = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Commercial Pressure Washing
          </h2>

          <h3 className="text-xl text-[#00c6f9] font-semibold mb-4">
            Revitalize Your Business Exterior With Expert Pressure Washing
          </h3>

          <p className="text-gray-600 text-lg mb-8">
            A tidy commercial space makes a strong impact on customers and
            clients. Our pressure washing service for commercial properties in
            Cincinnati. Our expert team eliminates dirt, grease, mold, and
            stains. We renew sidewalks, storefronts, parking areas, and building
            exteriors. Utilizing advanced machinery and environmentally safe
            methods, we rejuvenate surfaces without harming them, guaranteeing a
            clean and polished look.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            Overlooked commercial areas can gather dirt, diminishing curb appeal
            and posing safety risks. Consistent pressure washing avoids
            accumulation, extends surface longevity, and ensures your business
            maintains its optimal appearance. Suppose you have a retail shop,
            office space, or manufacturing plant. In that case, our skilled team
            provides comprehensive, effective cleaning customized to your
            requirements
          </p>
          <p className="text-gray-600 text-lg mb-8">
            Maintain a clean and welcoming business facade with expert pressure
            washing services.
          </p>

          <a
            href="tel:513-570-0355"
            className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiPhoneCall className="w-5 h-5" />
            513-570-0355
          </a>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 space-y-8">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/8.png"
              alt="Building washing process"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Before/After Comparison */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/15-1024x683-1.png"
                alt="Building washing process"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/1252.jpg"
                alt="Building washing process"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialPressure;
