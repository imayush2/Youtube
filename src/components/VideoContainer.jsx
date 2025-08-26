import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer"; // ✅ Import the shimmer component
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loader state

  const fetchVideoData = async () => {
    setLoading(true);
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  if (loading) {
    return <Shimmer />; // ✅ Show loader until data comes
  }

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
