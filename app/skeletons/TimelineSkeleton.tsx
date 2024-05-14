import React from "react";

const TimelineSkeleton: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="flex-1 bg-gray-300 h-4 rounded"></div>
    </div>
  );
};

export default TimelineSkeleton;
