// components/BuildingCleaning.tsx
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

const CommercialGutter = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Commercial Gutter Cleaning
          </h2>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Drains Stay Clear Commercial Gutter Cleaning Here
            </h3>

            <p className="text-gray-600">
              Blocked gutters lead to water damage and expensive repairs. We
              clean them to ensure your business’s safety. Our gutter cleaning
              service removes leaves, dirt, and debris. It guarantees seamless
              water movement and avoids blocks. Clogged gutters result in leaks
              and problems with the foundation.
            </p>

            <p className="text-gray-600">
              Consistent cleaning protects your structure from significant harm.
              We provide quick, reliable, and expert service. Our team operates
              securely and does not disturb your business. Clean gutters improve
              drainage and prevent overflow, keeping your property dry and in
              top condition.
            </p>
            <p className="text-gray-600">
              We serve offices, warehouses, and retail spaces. Our experts
              handle all types of commercial buildings. Routine maintenance
              extends the life of your gutters. It also saves money on future
              repairs. Our team uses the best tools for the job. We ensure a
              thorough and effective cleaning process. Don’t wait for problems
              to start. Book your Commercial Gutter Cleaning today and protect
              your property.
            </p>
          </div>

          <a
            href="tel:513-570-0355"
            className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
          >
            <FiPhoneCall className="w-5 h-5" />
           513-570-0355
          </a>
        </div>

        {/* Right Comparison Images */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 gap-8">
            {/* Before/After Container */}
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 grid grid-cols-2">
                {/* Before */}
                <div className="relative border-r-4 border-white">
                  <Image
                    src="/images/WhatsApp-Image-2025-02-10-at-9.16.29-PM-5.jpeg"
                    alt="Before cleaning"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-md">
                    Before Service
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <Image
                    src="/images/WhatsApp-Image-2025-02-10-at-9.16.29-PM-7.jpeg"
                    alt="After cleaning"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-blue-600/90 text-white px-4 py-2 rounded-md">
                    After Service
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialGutter;
