'use client';
import React from 'react';
import Image from 'next/image';

const SealCards = () => {
  const cardsData = [
    {
      id: 1,
      name: "Concrete Sealing",
      about: "",
      imageSrc: "/images/1528.png",
      link:"https://completesealsolutions.com/concrete-sealing/"
    },
    {
      id: 2,
      name: "Paver sealing",
      about: "",
      imageSrc: "/images/paver.jpg",
      link:"https://completesealsolutions.com/paver-sand-seal/"
    },
    {
      id: 3,
      name: "Epoxy",
      about: "",
      imageSrc: "/images/epoxy.jpg",
      link:"https://completesealsolutions.com/epoxy/"
    },
    {
      id: 4,
      name: "Wood Sealing",
      about: "",
      imageSrc: "/images/wood.png",
      link:"https://completesealsolutions.com/wood/"
    },
    {
      id: 5,
      name: "Concrete Crack ",
      about: "",
      imageSrc: "/images/concrete-creack.jpg",
      link:"https://completesealsolutions.com/concrete-crack-joint-sealing/"
    },
    {
      id: 6,
      name: "Commercial Roof Sealing",
      about: "",
      imageSrc: "/images/Get-your-roof-professionally-sprayed-1200x675-1-r1pjgidis5gphtkatuq55h6iid0m1acf3uxi5efups.jpg",
      link:"https://completesealsolutions.com/commercial-roof-sealing/"
    },
    {
      id: 7,
      name: "Click Here for More Sealing Services",
      about: "",
      imageSrc: "/images/Selected-logo-01.png",
      link:"https://completesealsolutions.com/"
      
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
              <button className="bg-white text-[#00C6F9] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                <a href={card.link} target="_blank">Learn More</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SealCards;