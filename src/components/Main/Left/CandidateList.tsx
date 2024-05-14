import React from 'react';

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

interface CandidateListProps {
    candidates: Candidate[];
    selectedCandidate: Candidate | null;
    onCandidateClick: (candidate: Candidate) => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, selectedCandidate, onCandidateClick }) => {
    return (
        <div className="flex flex-col ">
            {candidates.map((candidate) => (
                <div
                    key={candidate.email}
                    className={`text-xs rounded-md ${selectedCandidate === candidate ? 'bg-gray-200' : ''} cursor-pointer`}
                    onClick={() => onCandidateClick(candidate)}
                >
                    <div className="flex items-center justify-between px-2 py-1 pr-8">
                        <div className="flex items-center gap-2">
                            <img src={candidate.image   } width={30} className="rounded-md" alt="Picture of the author" />
                            <div className="flex flex-col">
                                <p className="font-bold text-[#3B4554]">{candidate.name}</p>
                                <p className="text-[#758499]">{candidate.email}</p>
                            </div>
                        </div>
                        <p className={`font-bold text-sm ${candidate.score > 50 ? 'text-[#32BE5C]' : 'text-[#EDB638]'}`}>{candidate.score} %</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CandidateList;
