"use client";
import React from 'react';
import styled from 'styled-components';
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import BubblesAnimation from '../../../../public/animations/house cleaning (2).json';
// const BubblesAnimation='../../../../public/animations/Bubbles'
import ManCleaningWindow from '../../../../public/animations/residential-window.json'
import Gutter from "../../../../public/animations/Man doing Gutter Cleaning.json"
import Professional from "../../../../public/animations/Droplit.json"
import Stain from "../../../../public/animations/stain-cleaning.json" // Adjust path as needed
import Check from "../../../../public/animations/House Cleaning.json"
import waterdrop from '../../../../public/animations/Floor Washing.json'
import { useLottie } from 'lottie-react';

const ServicesSection = () => {
  const cardsData = [
    {
      id: 1,
      name: "Pressure Washing",
      about: "Professional exterior cleaning for homes and driveways",
      link:"/pressure-washing",
      animationData: Professional,
      
    },
    {
      id: 2,
      name: "House Washing",
      about: "Safe and effective roof stain removal services",
      animationData: Check,
      link:"/house-washing"
    },
    {
      id: 3,
      name: "Gutter Cleaning",
      about: "Complete gutter cleaning and protection solutions",
      link:"/gutter-cleaning",
      animationData: Gutter,
    },
    {
      id: 4,
      name: "Window Cleaning",
      about: "Streak-free window cleaning services",
      link:"/window-cleaning-cincinnati",
      animationData:  ManCleaningWindow,
    },
    {
      id: 5,
      name: "Roof Washing",
      about: "Deck cleaning and sealing services",
      link:"/roof-washing",
      animationData: BubblesAnimation,
      
    },
    {
      id: 6,
      name: "Seal Solutions",
      about: "Driveway and sidewalk deep cleaning",
      link:"/seal-solutions",
      animationData: Stain,
    },
  ];

  return (
    <SectionContainer>
      <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
        <SectionHeading>Our Residential Services</SectionHeading>
        <Lottie animationData={waterdrop} style={{ width: 100, height: 100, marginTop: "-50px"}} />
      </div>
      <CardsGrid>
        {cardsData.map(card => (
          <Card
            key={card.id}
            name={card.name}
            about={card.about}
            animationData={card.animationData}
            link={card.link}
           
          />
        ))}
      </CardsGrid>
    </SectionContainer>
  );
};

const LottieWrapper = ({ animationData }) => {
  if (!animationData) {
    return <div className="lottie-error">Animation unavailable</div>;
  }

  try {
    return (
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="lottie-animation"
      />
    );
  } catch (error) {
    console.error('Lottie animation error:', error);
    return <div className="lottie-error">Error loading animation</div>;
  }
};

const Card = ({ animationData, name, about,link, }) => {
  return (
    <StyledWrapper>
      <div className="card">
      <div className="profile-pic">
  <LottieWrapper animationData={animationData} />
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
            <a href={link || "#"} className="button">Learn More</a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const SectionContainer = styled.section`
  background: #fff;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeading = styled.h1`
  color: #00C6F9;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
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
`;

const StyledWrapper = styled.div`
  .card {
    width: 320px;
    height: 320px;
    background: white;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: rgba(96, 75, 74, 0.188) 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
    margin: 0 auto;
  }

  .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
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
    transform: scale(1.2);
  }

  .lottie-error {
    color: #ff0000;
    padding: 1rem;
    text-align: center;
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
    margin-top: 1rem;
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
  }

  .button:hover {
    background: #00A3CC;
    color: white;
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
`;

export default ServicesSection;