import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight, } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Card from "./Card";

const ProjectCard = () => {
  const cards = [
    { img:'https://i.ibb.co/y01Ny8k/Rectangle-13-7.png' },
    { img:'https://i.ibb.co/y01Ny8k/Rectangle-13-7.png' },
    { img: 'https://i.ibb.co/HBXVg12/Rectangle-13-8.png' },
 
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const lastIndex = cards.length - 1;
    const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const lastIndex = cards.length - 1;
    const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="relative px-[48px]">
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2"
        onClick={handlePrevious}
      >
        <IoIosArrowBack className="w-14 h-14" />
      </button>
      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2"
        onClick={handleNext}
      >
        < IoIosArrowForward className="w-14 h-14" />
      </button>
      <div className="flex space-x-4 items-center justify-center overflow-hidden">
        {cards.slice(currentIndex, currentIndex + 2).map((card) => (
          <Card key={card.id} items={...card} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
