import React, { useState } from 'react';
import Carousel from '../Carousel';
import ProgressBar from './Progressbar';

interface Candidate {
  name: string;
  email: string;
  score: number;
  image: string;
  image2: string;
  about: string;
  experience: string;
  hobbies: string;
  introduction: string;
  Behavioral: number;
  Communication: number;
  Situation: number;
}

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={` bg-white rounded-xl shadow-md ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
     <div className="flex  p-3">
        <div className="w-[390px] h-[570px] flex flex-col gap-2 ">
            <div className="flex justify-between px-2 py-2 pr-8">
              <div className="flex gap-2">
                <img src={candidate.image} className="rounded-md" width={50} alt="img" />
                <div className="flex flex-col">
                  <p className="font-bold text-[#3B4554] ">{candidate.name}</p>
                  <p className="text-[#758499]">{candidate.email}</p>
                </div>
              </div>
              <p className={`font-bold text-lg ${candidate.score > 50 ? 'text-[#32BE5C]' : 'text-[#EDB638]'}`}>{candidate.score} %</p>
            </div>


            <div className="space-y-5 px-2">
              <ProgressBar label="Behavioural" value={candidate.Behavioral} max={10} color={candidate.Behavioral >= 7 ? '#2EBD59' : '#ECB22E'} />
              <ProgressBar label="Communication" value={candidate.Communication} max={10} color={candidate.Communication >= 7 ? '#2EBD59' : '#ECB22E'} />
              <ProgressBar label="Situation handling" value={candidate.Situation} max={10} color={candidate.Situation >= 7 ? '#2EBD59' : '#ECB22E'} />
            </div>


            <div className="flex flex-col gap-5 pt-5">
              <div className="flex flex-col gap-1">
                <p className=" text-[#404A59] font-semibold">About</p>
                <p className="text-slate-400 text-xs">{candidate.about}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" text-[#404A59] font-semibold">Experience</p>
                <p className="text-slate-400 text-xs">{candidate.experience}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" text-[#404A59] font-semibold">Hobbies</p>
                <p className="text-slate-400 text-xs">{candidate.hobbies}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" text-[#404A59] font-semibold">Introduction</p>
                <p className="text-slate-400 text-xs">{candidate.introduction}</p>
              </div>
            </div>

            <div className="bg-[#38ae46] rounded-xl flex items-center justify-center mx-12 text-sm">
              <button className="text-white px-2 py-2 font-semibold">SHORTLIST</button>
            </div>
        </div>
        <div className=" h-[500px] relative">
          <div className="bg-green-500 h-[50px] rounded-t-xl rounded-tr-lg"></div>
          <div className=" w-[330px] h-[500px] rounded-b-lg  overflow-hidden">
            <Carousel imageSrc={candidate.image} />
          </div>
        </div>
     </div>
    </div>
  );
};

export default CandidateCard;