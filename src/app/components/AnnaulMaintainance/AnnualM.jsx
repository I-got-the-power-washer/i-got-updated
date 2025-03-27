"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckBadgeIcon, ClockIcon, ShieldCheckIcon, CurrencyDollarIcon, HeartIcon } from "@heroicons/react/24/outline";

const Annual = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const serviceBenefits = [
    { title: "Save Money", icon: CurrencyDollarIcon, text: "Average 35% off regular pricing" },
    { title: "Save Time", icon: ClockIcon, text: "We handle scheduling & reminders" },
    { title: "Health & Safety", icon: ShieldCheckIcon, text: "Reduce allergens & hazards" },
    { title: "VIP Treatment", icon: HeartIcon, text: "Priority scheduling & special offers" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00C6F9] to-blue-600 bg-clip-text text-transparent mb-6">
            Annual Maintenance Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protect your investment and enjoy year-round peace of mind with our comprehensive maintenance solution.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div variants={fadeIn} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {serviceBenefits.map(({ title, icon: Icon, text }, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <Icon className="h-12 w-12 text-[#00C6F9] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* Program Details */}
        <motion.div variants={fadeIn} className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#00C6F9]">
              Comprehensive Care Package
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">How It Works</h3>
                  <ul className="space-y-4">
                    {[
                      "Free property assessment & customized plan",
                      "Flexible scheduling (monthly, quarterly, annually)",
                      "Automated reminders & priority booking",
                      "Dedicated account manager",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckBadgeIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Included Services</h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        {[
                          ["Pressure Washing", "1x/year"],
                          ["House Washing", "1x/year"],
                          ["Roof Washing", "1x/year"],
                          ["Window Cleaning", "Custom"],
                          ["Gutter Cleaning", "2x/year"],
                        ].map(([service, frequency], index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 font-medium text-gray-900">{service}</td>
                            <td className="px-4 py-3 text-gray-600">{frequency}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Details */}
          {[
            {
              title: "Pressure Washing",
              benefits: [
                "Restores surfaces to like-new condition",
                "Eliminates safety hazards",
                "Enhances curb appeal",
                "Prevents long-term damage",
              ],
            },
            {
              title: "House Washing",
              benefits: [
                "Protects siding & surfaces",
                "Improves indoor air quality",
                "Maintains property value",
              ],
            },
            {
              title: "Roof Washing",
              benefits: [
                "Extends roof lifespan",
                "Improves energy efficiency",
                "Enhances visual appeal",
              ],
            },
            {
              title: "Window Cleaning",
              benefits: [
                "Maximizes natural light",
                "Protects glass surfaces",
                "Boosts curb appeal",
              ],
            },
            {
              title: "Gutter Cleaning",
              benefits: [
                "Prevents water damage",
                "Reduces pest infestations",
                "Extends gutter life",
              ],
            },
          ].map((section, index) => (
            <section key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* CTA Section */}
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-r from-[#00C6F9] to-blue-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Join our community of satisfied homeowners</p>
            <button className="bg-white text-[#00C6F9] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Annual;