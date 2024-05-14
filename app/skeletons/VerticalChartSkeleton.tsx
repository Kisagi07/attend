import React from "react";

const VerticalChartSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="w-16 h-4 bg-gray-200 mx-auto"></div>
      <div className="flex justify-between items-end">
        <div className="w-8 bg-gray-200 h-8"></div>
        <div className="w-8 bg-gray-200 h-16"></div>
        <div className="w-8 bg-gray-200 h-24"></div>
        <div className="w-8 bg-gray-200 h-32"></div>
        <div className="w-8 bg-gray-200 h-40"></div>
      </div>
      <div className="w-16 h-4 bg-gray-200"></div>
    </div>
  );
};

export default VerticalChartSkeleton;
