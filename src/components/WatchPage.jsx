import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useEffect, useState } from "react";
import WatchPageShimmer from "./WatchPageShimmer";

const WatchPage = () => {
  const [loader, setLoader] = useState(true);
  const [searchParam] = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return (
      <div>
        <WatchPageShimmer />
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* Main Video + Chat Section */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Video Player */}
        <div className="w-full lg:w-2/3">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Live Chat */}
        <div className="w-full lg:w-1/3">
          <LiveChat />
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
