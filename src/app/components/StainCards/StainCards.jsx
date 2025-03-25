'use client';
import React from 'react';
import Image from 'next/image';

const StainCards = () => {
  const cardsData = [
    {
      id: 1,
      name: "Graffiti Removal",
      about: "Quickly remove graffiti and restore your surfaces. Our experts use effective cleaning solutions to erase unwanted marks, ensuring your property is clean.",
      imageSrc: "/images/Graffiti-removal-services.jpg",
      link:"/graffiti-removal"
    },
    {
      id: 2,
      name: "Rust Removal",
      about: "Eliminate rust stains from various surfaces. We ensure rust removal without damaging your property, enhancing its appearance ",
      imageSrc: "/images/Rust-Removal.png",
      link:"/rust-removal"
    },
    {
      id: 3,
      name: "Efflorescence Removal",
      about: "We use safe and effective methods to remove mineral buildup, restoring your brick, stone, or concrete surfaces to their original and perfect condition.",
      imageSrc: "/images/Efflorescence-Removal.png",
      link:"/efflorescence-removal"
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

export default StainCards;