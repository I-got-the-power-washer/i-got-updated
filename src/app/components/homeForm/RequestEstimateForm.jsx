"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiBriefcase, FiUser, FiPhone, FiMail, FiMapPin, FiMessageSquare, FiClock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RequestEstimateForm = () => {
  const [customerType, setCustomerType] = useState("residential");
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sendEmail = async (templateParams, templateId) => {
    const emailjs = await import('@emailjs/browser').then(mod => mod.default);
    
    return emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  };

  const onSubmit = async (data) => {
    if (!isMounted) return;
    
    setLoading(true);
    try {
      const isCommercial = customerType === "commercial";
      
      const templateParams = {
        customer_name: data.fullName || "Not provided",
        customer_email: data.email || "Not provided",
        phone_number: data.phoneNumber || "Not provided",
        customer_type: isCommercial ? "COMMERCIAL" : "RESIDENTIAL",
        message: data.message || "No message provided",
        contact_time: data.contactTime || "Not specified",
        reference: data.reference || "Not specified",
        address_label: isCommercial ? "Business Address" : "Residential Address",
        address_value: isCommercial 
          ? data.companyAddress || "Not provided" 
          : data.address || "Not provided",
        business_name: isCommercial 
          ? data.businessName || "Not provided" 
          : "N/A",
        suite_unit: !isCommercial 
          ? data.suite || "None"
          : "N/A"
      };

      await sendEmail(
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_OWNER_TEMPLATE_ID
      );

      reset();
      toast.success("Estimate request sent successfully!");
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(error.message || "Failed to send estimate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full p-8 bg-white rounded-2xl shadow-2xl border border-gray-100"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent">
            Request Your Free Estimate
          </h2>
          <p className="text-gray-600 mt-3">Get started with our professional services in 3 easy steps</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-4">Customer Type *</label>
            <div className="grid grid-cols-2 gap-4">
              <CustomerTypeButton
                value="residential"
                current={customerType}
                onChange={setCustomerType}
                icon={<FiHome />}
                label="Residential"
              />
              <CustomerTypeButton
                value="commercial"
                current={customerType}
                onChange={setCustomerType}
                icon={<FiBriefcase />}
                label="Commercial"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                label="Full Name *" 
                icon={<FiUser />}
                type="text" 
                placeholder="John Doe"
                {...register("fullName", { required: "Full name is required" })}
                error={errors.fullName}
              />
              <InputField 
                label="Phone Number *" 
                icon={<FiPhone />}
                type="tel" 
                placeholder="(555) 123-4567"
                {...register("phoneNumber", { 
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[1-9]\d{1,14}$/,
                    message: "Invalid phone number"
                  }
                })}
                error={errors.phoneNumber}
              />
              <InputField 
                label="Email Address *" 
                icon={<FiMail />}
                type="email" 
                placeholder="john@example.com"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  }
                })}
                error={errors.email}
              />
            </div>

            <AnimatePresence mode="wait">
              {customerType === "residential" ? (
                <motion.div
                  key="residential"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <InputField 
                    label="Address *" 
                    icon={<FiMapPin />}
                    type="text" 
                    placeholder="123 Main St"
                    {...register("address", { required: "Address is required" })}
                    error={errors.address}
                  />
                  <InputField 
                    label="Suite/Unit" 
                    type="text" 
                    placeholder="Apt 4B"
                    {...register("suite")}
                  />
                  <TextareaField 
                    label="Message *" 
                    icon={<FiMessageSquare />}
                    placeholder="Tell us about your project..."
                    {...register("message", { required: "Message is required" })}
                    error={errors.message}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="commercial"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <InputField 
                    label="Business Name *" 
                    type="text" 
                    placeholder="Company Inc."
                    {...register("businessName", { required: "Business name is required" })}
                    error={errors.businessName}
                  />
                  <InputField 
                    label="Company Address *" 
                    icon={<FiMapPin />}
                    type="text" 
                    placeholder="456 Business Ave"
                    {...register("companyAddress", { required: "Company address is required" })}
                    error={errors.companyAddress}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField 
                label="Preferred Contact Time" 
                icon={<FiClock />}
                options={["Any Time", "Morning (8am-12pm)", "Afternoon (12pm-5pm)", "Evening (5pm-8pm)"]}
                {...register("contactTime")}
              />
              <InputField 
                label="How did you hear about us?" 
                type="text" 
                placeholder="Referral, Social Media, etc."
                {...register("reference")}
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#00C6F9] to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {loading ? "Sending Request..." : "Send Free Estimate Request"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

const CustomerTypeButton = ({ value, current, onChange, icon, label }) => (
  <button
    type="button"
    onClick={() => onChange(value)}
    className={`p-4 rounded-xl border-2 transition-all ${
      current === value
        ? "border-[#00C6F9] bg-[#00C6F9]/10"
        : "border-gray-200 hover:border-gray-300"
    }`}
  >
    <div className="flex items-center gap-3">
      <span className={`text-xl ${current === value ? "text-[#00C6F9]" : "text-gray-500"}`}>
        {icon}
      </span>
      <span className={`font-medium ${current === value ? "text-[#00C6F9]" : "text-gray-700"}`}>
        {label}
      </span>
    </div>
  </button>
);

const InputField = ({ label, icon, type, placeholder, error, ...rest }) => (
  <div className="space-y-1">
    <label className="flex items-center gap-2 text-gray-700 font-medium">
      {icon && <span className="text-[#00C6F9]">{icon}</span>}
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
      {...rest}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

const TextareaField = ({ label, icon, placeholder, error, ...rest }) => (
  <div className="space-y-1">
    <label className="flex items-center gap-2 text-gray-700 font-medium">
      {icon && <span className="text-[#00C6F9]">{icon}</span>}
      {label}
    </label>
    <textarea
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all h-32"
      {...rest}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

const SelectField = ({ label, icon, options, ...rest }) => (
  <div className="space-y-1">
    <label className="flex items-center gap-2 text-gray-700 font-medium">
      {icon && <span className="text-[#00C6F9]">{icon}</span>}
      {label}
    </label>
    <select
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all appearance-none"
      {...rest}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default RequestEstimateForm;