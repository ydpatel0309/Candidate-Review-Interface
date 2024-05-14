import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

interface CarouselProps {
  imageSrc: string;
}

const Carousel: React.FC<CarouselProps> = ({ imageSrc }) => {
  const questions = [
    "Tell me about yourself?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why do you want to work here?",
    "Where do you see yourself in 5 years?",
    "What attracted you to this position?",
    "How do you handle stress and pressure?",
    "Who inspires you in your life?",
    "What are your salary expectations?",
    "Do you have any questions for us?",
    "Who is CM of Punjab?",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? questions.length - 1 : prevIndex - 1));
  };

  const nextQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex === questions.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto text-black">
      <div className="relative overflow-hidden flex flex-col items-center justify-center text-white">
        <div className="flex items-center justify-center relative">
          <div className=" text-slate-800  text-xl absolute z-10 p-3 bg-green-500 rounded-full flex items-center justify-center ">
            <FaPlay  />
          </div>
          <img src={imageSrc} alt="Question Image" className="w-full h-[500px] object-cover rounded-b-lg" />
        </div>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-end rounded-b-lg p-4 text-black font-bold">
          <span className="text-lg   mb-5">{questions[currentIndex]}</span>
          <span className="text -sm mb-4 ">{`Question ${currentIndex + 1} / ${questions.length}`}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center w-full absolute bottom-8 px-1">
        <button className="bg-slate-400 rounded-xl shadow-md p-4 text-white" onClick={prevQuestion}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button className="bg-slate-400 rounded-xl shadow-md p-4 text-white" onClick={nextQuestion}>
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
