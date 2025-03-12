import React from 'react';

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-[10px] h-full bg-gray-300 rounded-full">
      <div
        className="bg-blue-500 rounded-full"
        style={{ width: `${progress}%`, height: '100%' }}
      />
    </div>
  );
};

export default ProgressBar; 