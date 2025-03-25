"use client";
import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const faqItems = [
    {
      question: "Is pressure washing safe for all surfaces?",
      answer:
        "Pressure washing is a safe cleaning method for most surfaces, provided the pressure and technique are adjusted appropriately for each surface type. Delicate surfaces, including wood or painted areas, require lower pressure settings to avert potential damage. Conversely, more rigid surfaces like concrete or brick can withstand higher pressure levels without adverse effects. Relying on the expertise of a professional pressure washing service like IGotThePowerWasher guarantees that the optimal pressure and technique are employed for every surface, ensuring safety and effectiveness.",
    },
    {
      question: "Will pressure washing damage my plants or landscaping?",
      answer:
        "When done correctly, pressure washing should not damage your plants or landscaping. However, it’s advisable to cover delicate plants or move them away from the cleaned areas as a precaution. Water runoff from pressure washing can sometimes contain cleaning agents or debris, which may harm plants. Ensuring the protection of your landscaping is of utmost importance to a reputable pressure washing service. IGotThePowerWasher understands the significance of taking necessary precautions to minimize any potential impact, demonstrating their commitment to maintaining the integrity and aesthetics of your outdoor space.",
    },
    {
      question:
        "How frequently should I arrange for pressure washing services?",
      answer:
        "The optimal frequency for pressure washing services depends on various factors, including specific surfaces, prevailing weather conditions, and the level of dirt or stains. While a general recommendation is to schedule pressure washing annually to uphold the appearance and prevent long-term damage to your outdoor surfaces, it is essential to consider high-traffic areas or surfaces exposed to harsh elements, which may necessitate more frequent cleanings.",
    },
    {
      question:
        "Will pressure washing effectively eliminate oil stains from my driveway?",
      answer:
        "Absolutely! Pressure washing is a highly effective method for removing oil stains from driveways. However, it is essential to note that stain removal’s success depends on the stains’ severity. In some cases, additional treatments or specialized cleaning agents may be required to achieve the best results. To ensure the most appropriate approach for effective stain removal, it is recommended to consult with a professional pressure washing service. IGotThePowerWasher expertise will enable us to assess the specific stain and determine the most suitable action.",
    },
    {
      question:
        "Does pressure washing effectively eliminate mold and mildew from surfaces?",
      answer:
        "Undoubtedly! Pressure washing is a highly efficient method for eradicating mold and mildew from surfaces. When combined with appropriate cleaning agents, the powerful force of high-pressure water works effectively to eliminate mold and mildew and prevent their regrowth. When opting for pressure washing, hiring a professional service that has a deep understanding of the proper techniques and employs environmentally friendly cleaning agents to ensure optimal results is advisable. So, IGotThePowerWasher has got you covered for this.",
    },
    {
      question:
        "Should I hire a professional, or can I pressure wash my own house?",
      answer:
        "While it is possible to undertake pressure washing on your own, it is highly recommended to enlist the services of a professional. Professional pressure washing services bring valuable expertise, knowledge, and specialized equipment to the table, ensuring the safe and effective cleaning of your home’s exterior surfaces. Additionally, professionals can identify and address any underlying issues that may require attention, such as damaged or loose siding. By relying on IGotThePowerWasher professionals, you can have peace of mind knowing that your property will be treated with care, delivering superior results without risking any potential damage.",
    },
    {
      question: "How long does a typical pressure washing service take?",
      answer:
        "The duration of a pressure washing service depends on various factors, including the size of the area to be cleaned, the level of dirt or stains, and the accessibility of the surfaces. Generally, a pressure washing service can take anywhere from a few hours to a full day for residential projects. Larger-scale or commercial projects may require more time for completion. To get a precise estimate of the expected duration for your specific needs, it is advisable to consult with a pressure washing service like IGotThePowerWasher beforehand.",
    },
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00C6F9] to-[#0066FF] bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our pressure washing services
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="group transition-all duration-300 ease-out"
            >
              <button
                className={`flex justify-between items-center w-full p-6 text-left rounded-xl shadow-sm transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white shadow-lg ring-2 ring-[#00C6F9]'
                    : 'bg-white hover:bg-gray-50 hover:shadow-md'
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className={`text-lg md:text-xl font-semibold pr-4 ${
                  activeIndex === index ? 'text-[#00c6f9]' : 'text-gray-800'
                }`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 p-2 rounded-full transition-colors ${
                  activeIndex === index 
                    ? 'bg-[#00C6F9] text-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}>
                  {activeIndex === index ? (
                    <FaMinus className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <FaPlus className="h-5 w-5" aria-hidden="true" />
                  )}
                </div>
              </button>

              <div
                id={`faq-content-${index}`}
                role="region"
                aria-hidden={activeIndex !== index}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? 'max-h-[1000px] opacity-100 mt-4'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-white/90 backdrop-blur-sm rounded-lg border-l-4 border-[#00C6F9] shadow-sm">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a 
              href="/contact-us"
              className="text-[#00C6F9] font-semibold hover:text-[#0066FF] transition-colors"
            >
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;