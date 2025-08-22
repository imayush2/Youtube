import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Button list at the top */}
      <div className=" bg-white z-10 shadow-sm">
        <ButtonList />
      </div>

      {/* Video container below */}
      <div className="">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
