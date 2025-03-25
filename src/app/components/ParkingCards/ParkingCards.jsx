'use client';
import React from 'react';
import Image from 'next/image';

const ParkingCards = () => {
  const cardsData = [
    {
      id: 1,
      name: "Parking Lot Washing",
      about: "Our parking lot washing service eliminates stains, grime, and debris, giving your lot a fresh, clean appearance. We ensure your property is very welcoming.",
      imageSrc: "/images/Parking-Lot-Washing.png",
      link:"/parking-lot-washing"
    },
    {
      id: 2,
      name: "Sweeping & Cleaning",
      about: "We provide sweeping and cleaning for parking lots, removing dirt, leaves, and trash. Keep your lot neat and safe, enhancing both curb appeal and functionality. ",
      imageSrc: "/images/Sweeping-Cleaning.png",
      link:"/sweeping-cleaning"
    },
   
 
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
        {cardsData.map((card) => (
          <div 
            key={card.id}
            className="relative group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-64 w-full transition-transform duration-300 group-hover:scale-105">
              <Image
                src={card.imageSrc}
                alt={card.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl"
              />
            </div>
            
            <div className="p-6 bg-[#00C6F9] text-white transition-all duration-300 group-hover:bg-[#0099cc]">
              <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
              <p className="text-lg mb-4">{card.about}</p>
              <button className="bg-white text-[#00C6F9] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                <a href={card.link}>Learn More</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParkingCards;