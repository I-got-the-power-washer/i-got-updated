"use client"
import {  FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram,} from 'react-icons/fi';
import RequestEstimateForm from '../homeForm/RequestEstimateForm';
import { FaTiktok } from 'react-icons/fa';

const ContactForm = () => {


  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl ">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us Today</h2>
          <RequestEstimateForm/>

            
           
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiPhone className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">513-570-0355</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMail className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@igotthepowerwasher.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Cincinnati, OH and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Store Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/tony.werner.94402?mibextid=LQQJ4d" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FiFacebook className="w-6 h-6" />
                </a>
                
                <a href="https://www.instagram.com/igotthepowerwasher/" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@igotthepowerwasher" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FaTiktok className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;