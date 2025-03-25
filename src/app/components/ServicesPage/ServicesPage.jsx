// components/CommercialWindow.tsx

import { FiPhoneCall, FiCheckCircle, FiShield, FiClock, FiDroplet, FiAward, FiUserCheck, FiTool } from "react-icons/fi";

import Review from "../Review/Review";
import ServiceCards from "../ServiceCards/ServiceCards";


const Services = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <ServiceCards/>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
  {/* Header Section */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      
Why Choose Us
    </h2>
    <p className="text-xl text-[#00c6f9] font-semibold mb-6">
    Why should you hire a professional power washing company?
    </p>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
    Everyone is looking for ways to save money. However, power washing your property yourself shouldn’t be one of them. You’re better off hiring our power washing company to save time, money and energy when you get professional power washing services. Call today to schedule your service in Cincinnati, OH or the surrounding area.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      icon: FiUserCheck, // For trained professionals
      title: "Are highly trained and qualified",
    },
    {
      icon: FiTool, // Represents equipment
      title: "Own all the necessary equipment",
    },
    {
      icon: FiCheckCircle, // Indicates proper completion
      title: "Understand how to complete the job the right way",
    },
  ].map((item, index) => (
    <div 
      key={index}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-[#00c6f9]/10 rounded-lg">
          <item.icon className="w-8 h-8 text-[#00c6f9]" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">
        {item.title}
      </h3>
    </div>
  ))}
</div>

</div>
     <Review/>
    </section>
  );
};

export default Services;