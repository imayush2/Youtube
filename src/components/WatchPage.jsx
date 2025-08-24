import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  console.log("Search Parameters:", searchParam.get("v"));

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
