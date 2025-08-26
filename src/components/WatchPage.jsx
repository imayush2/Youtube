import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useEffect, useState } from "react";
import WatchPageShimmer from "./WatchPageShimmer";

const WatchPage = () => {
  const [loader, setLoader] = useState(true); 
  const [searchParam] = useSearchParams();

   useEffect(() => {
    // Simulate loading for shimmer effect
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);


  if(loader){
    return <div><WatchPageShimmer /></div>
  }

  return (

    
<div>
    <div className="flex gap-5">
      <iframe
        width="760"
        height="500"
        src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div/>

      <div>
        <LiveChat/>
      </div>

      </div>
  


      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
