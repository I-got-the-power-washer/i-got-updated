"use client";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import dynamic from "next/dynamic";

// Import images
import PressureWashingImg from '../../../../public/images/Building-Wash.png';
import HouseWashingImg from '../../../../public/images/Untitled-3.jpg';
import GutterCleaningImg from '../../../../public/images/Window-Gutter-Cleaning.png';
import WindowCleaningImg from '../../../../public/images/1-1.jpg';
import RoofWashingImg from '../../../../public/images/e33ee3.png';
import SealSolutionsImg from '../../../../public/images/Rust-Removal.png';
import waterdrop from '../../../../public/animations/Floor Washing.json';

const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="lottie-loading">Loading...</div>
});

const ServicesSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardsData = [
    {
      id: 1,
      name: "Building Wash",
      about: "Revive Your Property – Expert Building Wash Services!",
      link: "/building-wash",
      imageUrl: PressureWashingImg,
    },
    {
      id: 2,
      name: "Window Cleaning",
      about: "Professional Window Cleaning Perfection!",
      imageUrl: HouseWashingImg,
      link: "/window-cleaning"
    },
    {
      id: 3,
      name: "Gutter Cleaning",
      about: "Prevent Clogs & Damage – Professional Gutter Cleaning ",
      link: "/gutter-cleaning",
      imageUrl: GutterCleaningImg,
    },
    {
      id: 4,
      name: "Parking Maintenance",
      about: "Enhance Durability & Cleanliness ",
      link: "/parking-lot-maintenance",
      imageUrl: WindowCleaningImg,
    },
    {
      id: 5,
      name: "Seal Solutions",
      about: "Deck cleaning and sealing services",
      link: "/seal-solutions",
      imageUrl: RoofWashingImg,
    },
    {
      id: 6,
      name: "Stain Removal",
      about: "Advanced Stain Removal Experts!",
      link: "/stain-removal",
      imageUrl: SealSolutionsImg,
    },
  ];

  if (!isMounted) return null;

  return (
    <SectionContainer>
      <HeaderWrapper>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C6F9] to-blue-800 tracking-tight mb-6 pb-4 relative group">
          Our Commercial Services
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full"></span>
        </h2>
        {/* <Lottie 
          animationData={waterdrop} 
          style={{ width: 100, height: 100, marginTop: "-50px" }} 
        /> */}
      </HeaderWrapper>
      <CardsGrid>
        {cardsData.map(card => (
          <Card
            key={card.id}
            name={card.name}
            about={card.about}
            imageUrl={card.imageUrl}
            link={card.link}
          />
        ))}
      </CardsGrid>
    </SectionContainer>
  );
};

const Card = ({ imageUrl, name, about, link }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <StyledWrapper>
      <div className="card">
        <div className="profile-pic">
          <img 
            src={imageUrl.src} 
            alt={name} 
            className="profile-image" 
            loading="lazy"
          />
        </div>

        <div className="bottom">
          <div className="content">
            <span className="name">{name}</span>
            <span className="about-me">{about}</span>
          </div>
          <div className="bottom-bottom">
            <div className="service-name-container">
              <span className="service-name">{name}</span>
            </div>
            <Link href={link || "#"} className="button">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};


// Styled Components with height adjustments
const SectionContainer = styled.section`
  background: #fff;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  margin-bottom: 3rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledWrapper = styled.div`
  .card {
    width: 320px;
    height: 380px; /* Increased from 320px */
    background: white;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: rgba(96, 75, 74, 0.188) 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 280px;
      height: 340px; /* Increased from 280px */
    }
  }

  .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: 65%; /* Increased from full height */
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    border: 0px solid #00C6F9;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lottie-animation {
    width: 100%;
    height: 100%;
    transform: scale(1); /* Reduced from 1.2 */
  }

  .lottie-loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00C6F9;
    font-size: 0.8rem;
  }

  .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #00C6F9;
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px inset;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  /* Keep all hover effects and other styles the same below */
  .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 160px;
  }

  .name {
    display: block;
    font-size: 1.4rem;
    color: white;
    font-weight: bold;
  }

  .about-me {
    display: block;
    font-size: 1rem;
    color: white;
    margin-top: 8px;
  }

  .bottom-bottom {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .service-name-container {
    background: white;
    padding: 8px 15px;
    border-radius: 20px;
    flex-grow: 1;
    margin-right: 1rem;
  }

  .service-name {
    color: #00C6F9;
    font-weight: bold;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .button {
    background: white;
    color: #00C6F9;
    border: none;
    border-radius: 20px;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    box-shadow: rgba(96, 75, 74, 0.133) 0px 5px 5px 0px;
    transition: all 0.3s ease;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    display: inline-block;

    &:hover {
      background: #00A3CC;
      color: white;
    }
  }

  .card:hover {
    border-top-left-radius: 55px;
  }

  .card:hover .bottom {
    top: 25%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }

  .card:hover .profile-pic {
    width: 120px;
    height: 120px;
    aspect-ratio: 1;
    top: 15px;
    left: 15px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #00C6F9;
    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px;
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }

  .card:hover .profile-pic:hover {
    transform: scale(1.3);
    border-radius: 0px;
  }

  .card:hover .lottie-animation {
    transform: scale(1.5);
    transition: all 0.5s ease-in-out 0.5s;
  }
.bottom-bottom {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  /* Add mobile-specific fixes */
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 8px;
    bottom: 0.5rem;
  }
}

.service-name-container {
  background: white;
  padding: 8px 15px;
  border-radius: 20px;
  flex-grow: 1;
  margin-right: 1rem;
  
  /* Add text overflow handling */
  @media (max-width: 768px) {
    min-width: 60%;
    white-space: normal; /* Allow text wrapping */
    overflow: visible;
    margin-right: 0;
  }
}

.button {
  background: white;
  color: #00C6F9;
  border: none;
  border-radius: 20px;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  box-shadow: rgba(96, 75, 74, 0.133) 0px 5px 5px 0px;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  
  /* Mobile-specific button fixes */
  @media (max-width: 768px) {
    flex-shrink: 0;
    padding: 8px 12px;
    font-size: 0.9rem;
    min-width: 100px;
  }

  &:hover {
    background: #00A3CC;
    color: white;
  }
}

/* Add this new media query at bottom */
@media (max-width: 480px) {
  .service-name {
    font-size: 0.8rem;
  }
  
  .button {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
}
  


  .card:hover .profile-pic {
    width: 120px;
    height: 120px;
    aspect-ratio: 1;
    top: 15px;
    left: 15px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #00C6F9;
    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px;
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }

  .card:hover .profile-pic:hover {
    transform: scale(1.3);
    border-radius: 0px;
  }

  .card:hover .profile-image {
    transform: scale(1.5);
    transition: all 0.5s ease-in-out 0.5s;
  }
`;

export default ServicesSection;