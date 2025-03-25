"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Professional from "../../../../public/animations/Man doing Power Washing.json";

const Pressure = () => {
  const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
        
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00C6F9] to-blue-600 bg-clip-text text-transparent mb-6">
            Professional Pressure Washing in Cincinnati
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At I Got The Power Washer, we provide more than just standard pressure
            washing. Our advanced techniques and high-output equipment ensure a
            deep, thorough clean while protecting your surfaces for the long term.
          </p>

          <div className="flex justify-center mb-12">
            <Lottie
              animationData={Professional}
              loop
              autoplay
              className="w-64 h-64 sm:w-80 sm:h-80"
            />
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.section 
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Best Cincinnati Pressure Washing Company - Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I Got Power Washer is the name of trust and peerless services when it
              comes to the pressure washing business in Cincinnati. We are a team of
              highly trained professionals with years of professional experience. We
              aim to create a healthy and clean community, and our service providers
              love cleaning, so every wash is washed with love and passion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Remote Jobs Available</h4>
                  <p className="text-gray-700 leading-relaxed">
                    No water source? No problem. We can haul our own water for jobs
                    in remote areas where access is limited. Our high-capacity water
                    transport system allows us to complete thorough cleanings
                    anywhere. Additional charges may apply for this service.
                  </p>
                </div>
                <img
                  src="/images/305.png"
                  alt="Pressure Washing"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#00C6F9] rounded-full mt-1"></div>
                      <div>
                        <strong>High-Performance Equipment:</strong> We use
                        industry-leading pressure washers with up to 23 GPM output,
                        cleaning efficiently without surface damage.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#00C6F9] rounded-full mt-1"></div>
                      <div>
                        <strong>Post-Treatment Protection:</strong> Our specialized
                        treatment eliminates organic growth at the root, preventing
                        premature buildup.
                      </div>
                    </li>
                  </ul>
                </div>
                <img
                  src="/images/299-1024x683-1.png"
                  alt="House Washing"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Comprehensive Pressure Washing Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We are committed to delivering perfection with our pressure wash services.
                  From small residential jobs to large commercial projects, we offer:
                </p>
                <ul className="columns-2 gap-8">
                  {[
                    "Roof cleaning", "Fence cleaning", "House clean", 
                    "Solar panel cleaning", "Stain removals", 
                    "Sealing services", "Fleet cleaning"
                  ].map((service, index) => (
                    <li key={index} className="flex items-center mb-3">
                      <svg className="w-4 h-4 text-[#00C6F9] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">Service Areas</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    "Hamilton County", "Clermont County", 
                    "Butler County", "Warren County", 
                    "Montgomery County"
                  ].map((area, index) => (
                    <li key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <span className="text-[#00C6F9] mr-2">▹</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technology Section */}
        <motion.section 
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Advanced Cleaning Technology
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Our service offerings rely on cutting-edge equipment including:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#00C6F9] text-white p-2 rounded-lg mr-4">
                      🔥
                    </div>
                    <div>
                      <strong>Hot/Cold Washers:</strong> For grease removal and general cleaning
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#00C6F9] text-white p-2 rounded-lg mr-4">
                      🚿
                    </div>
                    <div>
                      <strong>High-Pressure Nozzles:</strong> Up to 4000 PSI force
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#00C6F9] text-white p-2 rounded-lg mr-4">
                      🚚
                    </div>
                    <div>
                      <strong>Specialized Fleet:</strong> Mobile cleaning solutions
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/images/effff.jpg"
                alt="Cleaning Technology"
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#00C6F9] to-blue-600 p-8 rounded-2xl text-white">
            <blockquote className="text-xl italic mb-6">
              “My walkway went from black and green to white—I couldn’t believe the difference!
              The results speak for themselves!”
            </blockquote>
            <p className="text-lg font-semibold">
              “Andrew had my filthy house looking brand new in just a couple of hours.
              My brick went from black to glistening red—thank you so much!”
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Pressure;