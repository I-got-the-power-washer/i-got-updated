"use client";
import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLocationArrow,
} from "react-icons/fa";
import Bubble from "../../../../public/animations/Bubbles.json";
import dynamic from "next/dynamic";
import Image from "next/image";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const FooterU = () => {
  return (
    <footer className="bg-sky-200 text-[black] py-8 px-4 relative overflow-hidden min-h-[500px] md:min-h-[400px] mt-3 ">
      {/* Full-screen Bubble Animation */}
      <div className="absolute inset-0 z-0 opacity-75">
        <Lottie
          animationData={Bubble}
          loop={true}
          speed={0.8}
          className="w-full h-full"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            transparent: true
          }}
          style={{
            transform: 'scale(1.5)',
            overflow: 'visible'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 h-full">
        {/* Column 1 - Logo & Social */}
        <div className="space-y-4">
          <a href="/">
            <Image
              src="/images/uft.png"
              alt="I Got The Power Washer"
              width={128}
              height={48}
              className="w-32 h-auto hover:opacity-80 transition-opacity"
            />
          </a>
          
          <p className="text-xs text-black mb-3">
            Professional pressure washing services in Cincinnati with 5-star rated quality.
          </p>

          <div className="flex space-x-3 text-xl">
            <a 
              href="https://www.facebook.com/tony.werner.94402" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/igotthepowerwasher/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@igotthepowerwasher"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              <FaTiktok />
            </a>
          </div>

          <a href="/quality-guarantee">
            <Image
              src="/images/footer-image.png"
              alt="Quality Guarantee Badge"
              width={100}
              height={100}
              className="rounded-lg border-2 border-[#00C6F9]/20 mt-3 hover:scale-105 transition-transform"
            />
          </a>
        </div>

        {/* Column 2 - Residential Services */}
        <div className="space-y-3">
          <h4 className="font-bold uppercase text-sm border-b border-[#00C6F9] pb-1.5 text-black">
            Residential Services
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs ">
            <a href="/pressure-washing" className="hover:underline">Pressure Washing</a>
            <a href="/concrete-sealing" className="hover:underline">Concrete Sealing</a>
            <a href="/house-washing" className="hover:underline">House Washing</a>
            <a href="/roof-washing" className="hover:underline">Roof Washing</a>
            <a href="/window-cleaning-cincinnati" className="hover:underline">Window Cleaning</a>
            <a href="/gutter-cleaning" className="hover:underline">Gutter Cleaning</a>
          </div>
        </div>

        {/* Column 3 - Commercial Services */}
        <div className="space-y-3">
          <h4 className="font-bold uppercase text-sm border-b border-[#00C6F9] pb-1.5 text-black">
            Commercial Services
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs ">
            <a href="/building-wash" className="hover:underline">Building Wash</a>
            <a href="/commercial-pressure-washing" className="hover:underline">Commercial Pressure Washing</a>
            <a href="/commercial-gutter-cleaning" className="hover:underline">Commercial Gutter Cleaning</a>
            <a href="/commercial-window-cleaning" className="hover:underline">Commercial Window Cleaning</a>
            <a href="/restaurant" className="hover:underline">Restaurant</a>
            <a href="/stain-removal" className="hover:underline">Stain Removal</a>
            <a href="/parking-lot-maintenance" className="hover:underline">Parking Lot Maintenance</a>
            <a href="/post-construction-clean-up" className="hover:underline">Post Construction Clean Up</a>
          </div>
        </div>

        {/* Column 4 - Quick Links */}
        <div className="space-y-3">
          <h4 className="font-bold uppercase text-sm border-b border-[#00C6F9] pb-1.5 text-black">
            Quick Links
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs ">
            <a href="/" className="hover:underline">Home</a>
            <a href="/the-clean-team" className="hover:underline">Our Team</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/gallery" className="hover:underline">Gallery</a>
            <a href="/reviews" className="hover:underline">Reviews</a>
            <a href="/contact-us" className="hover:underline">Contact Us</a>
            <a href="/blogs" className="hover:underline">Blogs</a>
            <a href="/career" className="hover:underline">Career</a>
            
          </div>
        </div>

        {/* Column 5 - Contact Info */}
        <div className="space-y-3">
          <h4 className="font-bold uppercase text-sm border-b border-[#00C6F9] pb-1.5 text-black">
            Contact
          </h4>
          <div className="flex flex-col space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm"/>
              <a href="tel:5135700355" className="hover:underline">(513) 570-0355</a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-sm"/>
              <a href="mailto:igotthepowerwasher@gmail.com" className="hover:underline">
                igotthepowerwasher@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-sm"/>
              <a 
                href="https://goo.gl/maps/7v8YqX9XZzZJ8XJQ9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                3640 Werk Rd.<br/>Cincinnati, OH 45248
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-[#00C6F9]/30 text-center relative z-10">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} I Got The Power Washer | 
          <a href="/privacy-policy" className="ml-2 hover:underline">Privacy Policy</a> | 
          <a href="/terms-of-service" className="ml-2 hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterU;