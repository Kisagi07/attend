const TableSkeleton = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {Array.from({ length: 5 }, (_, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-4 py-3 w-1/3">
                <div className="animate-pulse h-6 bg-gray-400 rounded"></div>
              </td>
              <td className="px-4 py-3 w-1/3">
                <div className="animate-pulse h-6 bg-gray-400 rounded"></div>
              </td>
              <td className="px-4 py-3 w-1/3">
                <div className="animate-pulse h-6 bg-gray-400 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
