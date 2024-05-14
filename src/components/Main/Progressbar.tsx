import React from 'react';

interface ProgressBarProps {
  label: string; 
  value: number;
  max: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, max, color }) => {
    const fillerWidth = `${(value / max) * 100}%`;

    return (
        <div className="flex text-xs items-center mb-4">
            <div className="w-[30%] text-[#748398] font-semibold">{label}</div>
            <div className="w-1/2 h-2 bg-gray-300 rounded-md mx-4 relative">
                <div className={`h-full rounded-md`} style={{ width: fillerWidth, backgroundColor: color }}></div>
            </div>
            <div className="w-[15%] text-right">{value}/{max}</div>
        </div>
    );
}

export default ProgressBar;
