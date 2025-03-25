"use client";
import React from "react";
import { motion } from "framer-motion";
import GalleryPage from "../Gallery/gallery";


const Concrete = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-10"
        >
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Concrete Wash & Seal Services – Protect and Enhance Your Surfaces
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Concrete surfaces like driveways, patios, walkways, and pool decks are essential to your property’s functionality and appearance. However, over time, they can become stained, worn, and damaged due to dirt, algae, and harsh weather conditions. At I Got the Power Washer, we specialize in concrete wash and seal services that not only restore the beauty of your surfaces but also provide critical protection to extend their lifespan.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="prose-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                Why Concrete Wash & Seal is a Must
                </h3>
                <ul className="space-y-4 list-inside">
                  {[
                    "Preventative Maintenance: Regular washing and sealing protect your concrete from costly damage caused by stains, weather, and wear",
                    "Deep Cleaning: Our high-pressure washing removes dirt, grime, algae, and mildew, ensuring your surfaces are thoroughly cleaned before sealing.",
                    "Commercial-Grade Sealant: We use premium, commercial-grade sealants that penetrate deep into the concrete, offering unmatched protection against stains, UV rays, and weather damage.",
                    "Enhanced Durability: Sealing extends the life of your concrete, reducing the need for expensive repairs or replacements.",
                    "Improved Aesthetics: A clean, sealed surface instantly boosts your property’s curb appeal and value, making it a worthwhile investment."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="text-gray-600 leading-relaxed pl-4 -indent-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="font-semibold text-blue-500">✓</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="prose-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                Our Wash & Seal Process
                </h3>
                <ul className="space-y-4 list-inside">
                  {[
                    "Inspection: We assess your concrete surfaces to determine the best cleaning and sealing approach.",
                    "Pressure Washing: We remove all dirt, stains, and organic growth, preparing the surface for sealing.",
                    "Sealant Application: We apply a commercial-grade sealant that protects your concrete and enhances its appearance.",
                    "Final Inspection: We ensure every inch is clean, sealed, and meets our high standards of quality.",
                    
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="text-gray-600 leading-relaxed pl-4 -indent-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="font-semibold text-blue-500">✓</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Video Container */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <video 
                controls 
                playsInline
                muted
                className="w-full h-auto aspect-video object-cover"
                poster="/images/thumbnail.jpg" // Add a thumbnail
              >
                <source src="/images/ujytgkj-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>

          {/* Process Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Benefits of Concrete Sealing

            </h3>
            
            <div className="grid md:grid-cols-4 gap-6 ">
              {[
                { title: "Stain Resistance:", text: "Sealing prevents oil, grease, and other stains from penetrating the surface." },
                { title: "Weather Protection:", text: "Our sealant shields your concrete from Ohio’s freeze-thaw cycles, rain, and UV damage." },
                { title: "Extended Lifespan:", text: " Regular sealing can double the life of your concrete, saving you money in the long run." },
                { title: "Low Maintenance:", text: "Sealed surfaces are easier to clean and maintain, keeping them looking great year-round." }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-500 text-xl font-bold mb-2">0{index + 1}</div>
                  <h4 className="text-lg font-semibold mb-2 text-black">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          

          {/* Protection Benefits */}
        
        </motion.div>
      </div>
    </div>
  );
};

export default Concrete;