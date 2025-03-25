// components/CommercialWindow.tsx
import Image from "next/image";
import { FiPhoneCall, FiCheckCircle } from "react-icons/fi";

const GraffitiRemoval = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
        {/* Left Image - Modified for mobile */}
        <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/Gum-Removal.png"
              alt="Commercial window cleaning"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="bg-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full">
                Certified Professionals
              </span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Graffiti Removal
          </h2>

          <p className="text-xl text-[#00c6f9] font-semibold">
          Erase Unwanted Graffiti With Professional Cleaning Solutions
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              {/* Content Items */}
              {[
                "Undesirable graffiti can reduce the professional look of your property and can be difficult to eliminate without proper equipment. I Got The Power Washer LLC provides professional graffiti cleaning services in Cincinnati. We revive your surfaces by efficiently removing paint, markers, and spray stains while ensuring no damage occurs. Using modern power washing methods and environmentally safe cleaning products, we effectively clean brick, concrete, metal, and various other surfaces.",
                "We recognize that swift removal is crucial for upholding a tidy and inviting environment. Our team operates effectively to remove graffiti while maintaining the integrity of your building’s look. Whether it’s a shop, workplace, or home, we provide an extensive cleaning that restores the original appearance.",
                "Protect your property’s appearance with swift, dependable graffiti removal that reinstates cleanliness and professionalism.",
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

            <a
              href="tel:513-570-0355"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <FiPhoneCall className="w-5 h-5 lg:w-6 lg:h-6" />
              513-570-0355
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraffitiRemoval ;
