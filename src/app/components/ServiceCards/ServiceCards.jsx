'use client';
import React from 'react';
import Image from 'next/image';

const ServiceCards = () => {
  const cardsData = [
    {
      id: 1,
      name: "House Washing",
      about: "As a homeowner, you want to do everything you can to keep your property well-maintained. This includes removing dirt, debris and grime from your home’s exterior.",
      imageSrc: "/images/302-e1738968818248.png",
      link:"/house-washing"
    },
    {
      id: 2,
      name: "Fence Washing",
      about: "Is your dirty, weathered fence ruining your curb appeal? IGotThePowerWasher offers professional and reliable fence washing services for home and business owners.",
      imageSrc: "/images/19.png",
      link:"/fence-washing"
    },
    {
      id: 3,
      name: "Roof Washing",
      about: "Do you remember what the original color of your roof was? If not, then it’s time to call IGotThePowerWasher for expert roof washing services that restore its beauty...",
      imageSrc: "/images/roofing-washing.png",
      link:"/roof-washing"
    },
    {
      id: 4,
      name: "Gutter Cleaning",
      about: "Save the hassle and risk by calling us for maintenance gutter cleaning.",
      imageSrc: "/images/gutter.png",
      link:"/gutter-cleaning"
    },
    {
      id: 5,
      name: "Concrete Sealing",
      about: "Seal your concrete prolong your service and protect it from salt damage",
      imageSrc: "/images/5 (1).jpg",
      link:"/concrete-sealing"
    },
    {
      id: 6,
      name: "Concrete Pressure Washing",
      about: "When your concrete is covered in dirt and debris, turn to IGotThePowerWasher ",
      imageSrc: "/images/1 (1).jpg",
      link:"/concrete-pressure-washing"
    },
    {
      id: 7,
      name: "Window Cleaning",
      about: "Window Cleaning Cincinnati is performing the procedures of washing and cleaning glass windows.",
      imageSrc: "/images/Untitled-3.jpg",
      link:"/window-cleaning-cincinnati"
    },
    {
      id: 8,
      name: "Commercial Pressure Washing",
      about: "To get pressure washing or to get power washing?",
      imageSrc: "/images/300-1024x683-1.png",
      link:"/commercial-pressure-washing"
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
               <a href={card.link}> Learn More</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;