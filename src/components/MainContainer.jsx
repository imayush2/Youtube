import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full">

      {/* Video container below */}
      <div className="mt-0">  {/* ✅ Removed extra margin */}
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
