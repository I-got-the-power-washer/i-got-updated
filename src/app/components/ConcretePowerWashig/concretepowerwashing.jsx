import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPhoneCall } from 'react-icons/fi';

const ConcreteCleaning = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Got Dirty Concrete? We've Got You Covered!
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Bring your concrete surfaces back to life with the help of IGotThePowerWasher! 
            Whether it’s dirt, grime, or tough stains, our expert team in Cincinnati, OH 
            specializes in making your concrete, sidewalks, and more look brand new.
          </p>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Call <span className="text-[#00c6f9] font-semibold">513-570-0355</span> now to book your 
            concrete pressure washing service! We proudly serve home and business owners 
            across Cincinnati, OH, and surrounding areas.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content - Mobile first order */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
              Let’s Make Your Surfaces Shine!
            </h3>
            
            <p className="text-gray-600">
              There’s no concrete surface we can’t tackle! Count on us for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Driveways", "Sidewalks", "Walkways", "Patios",
                "Porches", "Pavers", "Brick", "Stamped Concrete"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FiCheckCircle className="w-5 h-5 text-[#00c6f9] flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600">
              Ready for a fresh start? Contact IGotThePowerWasher today!
            </p>

            <a
              href="tel:513-570-0355"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl text-base lg:text-lg font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <FiPhoneCall className="w-5 h-5 lg:w-6 lg:h-6" />
              Schedule Free Consultation
            </a>
          </motion.div>

          {/* Right Image - Ensure mobile visibility */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl lg:shadow-2xl">
              <Image
                src="/images/1252.jpg"
                alt="Concrete power washing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConcreteCleaning;