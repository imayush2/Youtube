const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-72 h-55 bg-gray-200 rounded-lg animate-pulse"
          >
            <div className="w-full h-35 bg-gray-300 rounded-t-lg"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
