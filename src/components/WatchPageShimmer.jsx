import React from "react";

const WatchPageShimmer = () => {
  return (
    <div className="p-4">
      {/* Video Player Skeleton */}
      <div className="flex gap-5">
        <div className="bg-gray-200 w-[760px] h-[500px] animate-pulse rounded-lg"></div>

        {/* Live Chat Skeleton */}
        <div className="flex flex-col gap-4 w-[300px]">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-pulse"
              >
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
              </div>
            ))}
        </div>
      </div>

      {/* Comments Section Skeleton */}
      <div className="mt-6">
        <div className="w-1/3 h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex items-start gap-4 mb-4 animate-pulse"
            >
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="flex-1">
                <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WatchPageShimmer;
