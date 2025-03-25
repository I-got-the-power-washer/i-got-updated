import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPhoneCall } from 'react-icons/fi';

const FenceWashing = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#00c6f9] to-cyan-600 bg-clip-text text-transparent">
            Set up a fence washing service with IGotThePowerWasher
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Is your dirty fence ruining your curb appeal? IGotThePowerWasher offers professional fence pressure washing services for homeowners and business owners in Cincinnati, OH and the surrounding area. You can trust our specialists to remove caked-on dirt, grime, and debris in a flash. After we're finished, your fence will look as good as new.
            </p>

            <div className="border-l-4 border-[#00c6f9] pl-4">
              <p className="text-gray-600 italic">
                "Plan your professional fence pressure washing service today."
              </p>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#00c6f9] to-cyan-600 bg-clip-text text-transparent">
              Don't let your fence fall by the wayside, call us for fence pressure washing services
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              We take pride in our fence pressure washing services and we know that we'll exceed your expectations. That's why we'll take photos of your fence before and after we wash it so you can see the difference. You'll feel confident knowing that we won't stop working until you're satisfied with the results
            </p>

            <div className="border-l-4 border-[#00c6f9] pl-4">
              <p className="text-gray-600 italic">
                "Call 513-570-0355 now to schedule your fence washing service in Cincinnati, OH or the surrounding area."
              </p>
            </div>

            <a
              href="tel:513-570-0355"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl text-base lg:text-lg font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <FiPhoneCall className="w-5 h-5 lg:w-6 lg:h-6" />
              Schedule Free Estimate
            </a>
          </div>
        </motion.div>

        {/* Right Image Comparison - Mobile optimized */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 h-[300px] lg:h-[500px] relative group mb-8 lg:mb-0"
        >
          <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
            {/* Before Image */}
            <div className="absolute inset-0 w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/images/Before_fence.jpg"
                  alt="Weathered fence"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-md lg:rounded-lg text-sm lg:text-base">
                  Before Cleaning
                </div>
              </div>
            </div>
            
            {/* After Image */}
            <div className="absolute inset-0 left-1/2 w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/images/After_fence.jpg"
                  alt="Restored fence"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute bottom-4 right-4 bg-[#00c6f9]/90 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-md lg:rounded-lg text-sm lg:text-base">
                  After Cleaning
                </div>
              </div>
            </div>
            
            {/* Slider Bar */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/50 cursor-col-resize z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FenceWashing;