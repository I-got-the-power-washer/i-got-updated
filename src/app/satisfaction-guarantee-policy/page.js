"use client";
import { motion } from "framer-motion";

import Review from "../components/Review/Review";

const ReviewPage = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>

        {/* Animated Content - Centered */}
        <div className="relative z-10 text-center">
          {/* Title Animation */}
          <motion.h1
            className="text-white text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Satisfaction Guarantee Policy
          </motion.h1>

          {/* Breadcrumb Animation */}
          <motion.div
            className="flex justify-center text-white text-md font_barlow font-semibold text-opacity-85"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2 items-center">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              ></motion.span>
            </div>
          </motion.div>
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24">
  {/* Header */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent mb-4">
      Our Commitment to Excellence
    </h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Your satisfaction is our top priority. Here's our promise and transparency about what we can achieve:
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Our Promise Section */}
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#00C6F9]/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#00C6F9]/10 rounded-full">
          <svg className="w-6 h-6 text-[#00C6F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Our Guarantees</h3>
      </div>

      <div className="space-y-6">
        {[
          {
            icon: '💧',
            title: 'Complete Organic Removal',
            content: '100% removal of algae, moss, and dirt through our professional cleaning services'
          },
          {
            icon: '✨',
            title: 'Streak-Free Windows',
            content: 'Crystal-clear results guaranteed for pristine views'
          },
          {
            icon: '🌀',
            title: 'Fully Functional Gutters',
            content: 'Complete debris removal while preserving gutter integrity'
          }
        ].map((item, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Driveway Sealing Special Note */}
      <div className="mt-8 p-6 bg-[#00C6F9]/5 rounded-xl border-l-4 border-[#00C6F9]">
        <div className="flex items-center gap-3 mb-2">
          <svg className="w-5 h-5 text-[#00C6F9]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <h4 className="text-lg font-semibold text-gray-900">Driveway Sealing Protection</h4>
        </div>
        <p className="text-gray-600">
          Our premium sealer provides minimum 2-year protection with up to 5 years defense against Ohio's harsh weather, maintaining deep concrete protection even as surface layers wear.
        </p>
      </div>
    </div>

    {/* Limitations Section */}
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-100/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-red-100/20 rounded-full">
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Important Considerations</h3>
      </div>

      <div className="space-y-6">
        {[
          {
            title: 'Stubborn Biological Stains',
            content: 'Shotgun fungus and artillery fungus spots that bond with surfaces'
          },
          {
            title: 'Permanent Discolorations',
            content: 'Aged oil stains and deep-set chemical marks'
          },
          {
            title: 'Natural Material Variations',
            content: 'Wood surfaces and climbing vine residues with unique cleaning challenges'
          },
          {
            title: 'Stain Improvement Promise',
            content: 'Minimum 75% improvement target with potential discounts if unmet'
          }
        ].map((item, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-2xl text-red-500">⚠️</span>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Satisfaction Badge */}
  <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-3 bg-[#00C6F9]/10 px-6 py-3 rounded-full">
      <span className="text-2xl">✅</span>
      <span className="font-semibold text-[#00C6F9]">Satisfaction Guaranteed</span>
    </div>
  </div>
</div>

    </div>
  );
};

export default ReviewPage;
