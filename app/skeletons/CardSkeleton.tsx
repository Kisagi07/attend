import React from "react";

const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
