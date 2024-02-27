const EmployeeFormSkeleton = ({ create }: { create?: boolean }) => {
  return (
    <div className="animate-pulse">
      {create ? (
        <>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div>
              <div className="w-[61px] h-[20px] bg-gray-200 mb-1"></div>
              <div className="w-full h-[42px] bg-gray-200 mb-4"></div>
            </div>
            <div>
              <div className="w-[90px] h-[20px] bg-gray-200 mb-1"></div>
              <div className="w-full h-[42px] bg-gray-200 mb-4"></div>
            </div>
          </div>
          <div className="w-[75px] h-[20px] bg-gray-200 mb-1"></div>
          <div className="w-full h-[42px] bg-gray-200 mb-4"></div>
          <div className="w-[100px] h-[20px] bg-gray-200 mb-1"></div>
          <div className="w-full h-[42px] bg-gray-200 mb-4"></div>
          <div className="w-full h-[40px] bg-gray-200 mb-4"></div>
        </>
      ) : (
        <>
          <div className="md:col-span-2">
            <div className="h-5 w-[100px] bg-gray-200 mb-1"></div>
            <div className="w-full h-[42px] bg-gray-200 mb-4"></div>
          </div>

          <div className="md:col-span-2">
            <div className="h-5 w-[100px] bg-gray-200 mb-1"></div>
            <div className="w-full h-[42px] bg-gray-200 mb-4"></div>
          </div>
          <div className="h-5 w-[100px] bg-gray-200 mb-1"></div>
          <div className="w-full md:w-1/2 h-[40px] bg-gray-200 mb-4"></div>
          <div className="h-[40px] w-full md:w-1/2 bg-gray-200"></div>
        </>
      )}
    </div>
  );
};
export default EmployeeFormSkeleton;
