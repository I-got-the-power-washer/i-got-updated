// components/CommercialWindow.tsx
import Image from 'next/image';
import { FiPhoneCall, FiCheckCircle } from 'react-icons/fi';

const CommercialWindow = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
        {/* Left Image - Modified for mobile */}
        <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/Untitled-3.jpg"
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
            
Commercial Window Cleaning
          </h2>
          
          <p className="text-xl text-[#00c6f9] font-semibold">
          Commercial Window Cleaning For A Clearer Business View
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              {/* Content Items */}
              {[
                "Commercial window cleaning involves more than simply cleaning glass surfaces. It improves your business’s look and establishes an inviting atmosphere. Our skilled team removes dirt, marks, and scum, making your windows spotless and fresh.",
                "Our expert cleaners use modern methods to guarantee spotless outcomes. Whether you run an office or retail space, we manage windows of every size with accuracy and attention. Every session entails thorough cleaning, streak removal, and a shiny finish. You will enjoy brighter interiors, better natural light, and a more professional look. Clean windows also improve energy efficiency by maximizing sunlight.",
                "We prioritize efficiency, safety, and quality in every job. Our team works quickly with minimal disturbance to your business. Regular maintenance lets your windows stay clean longer, saving you time and effort. Want spotless windows that impress customers? Book your commercial window cleaning today. Contact us now to get a quote and experience the difference!"
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

export default CommercialWindow;