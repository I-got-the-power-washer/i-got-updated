"use client";
import { useEffect, useRef } from "react";

const ClientLogos = () => {
  const clients = [
    { name: "Google Fonts", image: "client1.jpg" },
    { name: "Amazon", image: "client2.jpg" },
    { name: "Microsoft", image: "client3.jpg" },
    { name: "Help Scout", image: "client4.jpg" },
    { name: "Optimizely", image: "client5.jpg" },
    { name: "Breezy", image: "client6.jpg" },
    { name: "Attio", image: "client7.jpg" },
    { name: "PayPal", image: "client8.jpg" },
    { name: "Mparticle", image: "client9.jpg" },
    { name: "HubSpot", image: "client10.jpg" },
    { name: "Miro", image: "client11.jpg" },
    { name: "Company 12", image: "client12.jpg" },
    { name: "Company 13", image: "client13.jpg" },
    { name: "Company 14", image: "client14.jpg" },
    { name: "Company 15", image: "client15.jpg" },
    { name: "Company 16", image: "client16.jpg" },
    { name: "Company 17", image: "client17.png" },
    { name: "Company 18", image: "client18.jpg" },
  ];

  // Split into two rows
  const firstRow = [...clients.slice(0, 9)];
  const secondRow = [...clients.slice(9, 18)];

  return (
    <section className="bg-white py-12">
      <h2 className="mb-12 text-[2.5rem]  bg-gradient-to-r from-[#00C6F9] to-blue-800 text-transparent bg-clip-text font-bold text-2xl text-center uppercase tracking-[2px] md:text-[2rem]">
        Some of our valuable clients
      </h2>

      <div className="overflow-hidden space-y-8">
        {/* First Row - Moves Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex min-w-max animate-scroll-right space-x-8">
            {[...firstRow, ...firstRow].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white border rounded-lg shadow-lg px-8 py-5"
              >
                <img
                  src={`/images/${client.image}`}
                  alt={`${client.name} logo`}
                  className="h-20 w-auto object-contain max-w-[160px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moves Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex min-w-max animate-scroll-left space-x-8">
            {[...secondRow, ...secondRow].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white border rounded-lg shadow-lg px-8 py-5"
              >
                <img
                  src={`/images/${client.image}`}
                  alt={`${client.name} logo`}
                  className="h-20 w-auto object-contain max-w-[160px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;