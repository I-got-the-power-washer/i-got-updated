"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiPhone, FiFileText, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [loading, setLoading] = React.useState(false);
  const fileInput = watch("resume");

  const uploadToCloudinary = async (file) => {
    // Client-side only validation
    if (!file) throw new Error("No file selected");
    if (typeof window === "undefined") return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        { method: 'POST', body: formData }
      );
      if (!response.ok) throw new Error('Upload failed');
      return (await response.json()).secure_url;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Dynamically import client-side only libraries
      const emailjs = await import('@emailjs/browser').then(mod => mod.default);
      
      const file = data.resume?.[0];
      if (!file) throw new Error("Resume is required");

      // File validation
      const validTypes = ['application/pdf', 'application/msword', 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        throw new Error("Only PDF and Word documents are allowed");
      }
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("File size exceeds 5MB limit");
      }

      // Upload and send email
      const fileUrl = await uploadToCloudinary(file);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_CAREER_TEMPLATE_ID,
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          cover_letter: data.message || "No cover letter provided",
          resume_link: fileUrl,
          filename: file.name
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Application submitted successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error.message || "Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  // Render method remains the same as your original JSX structure
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 mt-10 border border-gray-100"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent">
          Join Our Team
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          We're expanding in Cincinnati! Whether you prefer team collaboration or independent work,
          <br />
          <span className="font-semibold text-[#00C6F9]">Find your perfect role with us</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-1">
              <FiUser className="text-[#00C6F9]" />
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                <FiAlertCircle className="inline" /> {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-1">
              <FiUser className="text-[#00C6F9]" />
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                <FiAlertCircle className="inline" /> {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-1">
              <FiMail className="text-[#00C6F9]" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address"
                }
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                <FiAlertCircle className="inline" /> {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium flex items-center gap-1">
              <FiPhone className="text-[#00C6F9]" />
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register("phone", { 
                required: "Phone Number is required",
                pattern: {
                  value: /^\+?[1-9]\d{1,14}$/,
                  message: "Invalid phone number"
                }
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                <FiAlertCircle className="inline" /> {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Message Section */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium flex items-center gap-1">
            <FiFileText className="text-[#00C6F9]" />
            Cover Letter
          </label>
          <textarea
            {...register("message")}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
            rows="4"
            placeholder="Tell us why you'd be a great fit..."
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium flex items-center gap-1">
            <FiFileText className="text-[#00C6F9]" />
            Upload Resume (PDF/DOC) <span className="text-red-500">*</span>
          </label>
          <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#00C6F9] transition-colors">
            <input
              type="file"
              {...register("resume", { 
                required: "Resume is required",
                validate: {
                  fileSize: (files) => 
                    files?.[0]?.size <= 5 * 1024 * 1024 || "Max file size is 5MB",
                  fileType: (files) => 
                    ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(files?.[0]?.type) || 
                    "Only PDF and DOC files are allowed"
                }
              })}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.doc,.docx"
            />
            <p className="text-gray-500">
              {fileInput?.[0]?.name || "Drag & drop files here or"}
              {!fileInput?.[0]?.name && (
                <>
                  {" "}<span className="text-[#00C6F9] font-medium">browse</span>
                </>
              )}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {fileInput?.[0]?.name 
                ? `${(fileInput[0].size / 1024 / 1024).toFixed(2)}MB` 
                : "Max file size: 5MB"}
            </p>
          </div>
          {errors.resume && (
            <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
              <FiAlertCircle className="inline" /> {errors.resume.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#00C6F9] to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit Application"}
          {!loading && <FiArrowRight className="w-5 h-5" />}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CareerForm;