import React, { useState } from 'react';
import { HiPencil } from 'react-icons/hi2';
import { RiBox3Fill } from "react-icons/ri";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";
import CandidateList from './CandidateList';

interface Candidate {
  name: string;
  video: string;
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

interface AssignmentDetailsProps {
  assignmentData: {
      title: string;
      status: string;
      link: string;
      hour: number;
      endsAt: string;
      type: string;
      questions: {
          id: number;
          text: string;
          score: number;
      }[];
  };
  candidatesData: Candidate[];
  selectedCandidate: Candidate | null;
  onCandidateClick: (candidate: Candidate) => void;
}
const AssignmentDetails: React.FC<AssignmentDetailsProps> = ({ assignmentData, candidatesData, selectedCandidate, onCandidateClick }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
    };

    return (
      <div className=" bg-white rounded-2xl w-[420px] h-[520px] p-3 shadow-md overflow-x-hidden">
        <div className="flex flex-col gap-2 px-2">
          <div className="flex items-center justify-between">
            <p className="font-bold text-base">{assignmentData.title}</p>
            <div className="flex items-center gap-2">
              <p className="font-bold text-[#0CAD69] text-base">{assignmentData.status}</p>
                <div className="bg-white p-2 rounded-[10px] shadow-md cursor-pointer">
                  <HiPencil size={10} />
                </div>
            </div>
          </div>

          <div className="text-[#7C8A9E] text-xs font-semibold">
            <ul>
              <li className="flex flex-col gap-2">
                <p className="flex items-center justify-between">
                  <span>Assignment Link:</span> <span className="text-blue-500">{assignmentData.link}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Assignment Hour:</span> <span>{assignmentData.hour}hours</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Assignment Ends at:</span> <span>{assignmentData.endsAt}</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="flex gap-8 font-bold text-sm text-[#323C4C]">
            <div
              className={`flex items-center gap-2 px-7 py-3  rounded-xl cursor-pointer ${activeItem === 'TO REVIEW' ? 'shadow-xl bg-green-500' : ''}`}
              onClick={() => handleItemClick('TO REVIEW')}
                >
                  TO REVIEW
            </div>
            <div
              className={` flex items-center gap-2 px-7 py-3 rounded-xl cursor-pointer ${
                activeItem === 'SHORTLISTED' ? 'shadow-xl bg-green-500' : ''
              }`}
              onClick={() => handleItemClick('SHORTLISTED')}
            >
               SHORTLISTED
            </div>
          </div>

          <div className="flex flex-col gap-3 ">
            <div>
              <ul className="text-[#A9B6C6] text-xs flex items-center justify-between px-4 pr-8 font-semibold ">
                <li>CANDIDATE</li>
                <li>SCORE</li>
              </ul>
            </div>
            <div>
              <CandidateList candidates={candidatesData} selectedCandidate={selectedCandidate} onCandidateClick={onCandidateClick} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AssignmentDetails;

