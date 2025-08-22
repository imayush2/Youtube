const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { title, channelTitle, thumbnails } = snippet || {};

  return (
    <div className="w-72 rounded-lg shadow hover:shadow-xl cursor-pointer">
      {/* Thumbnail */}
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="w-full rounded-lg"
      />

      {/* Video Info */}
      <div className="p-2">
        <h3 className="font-semibold text-sm truncate">{title}</h3>
        <p className="text-gray-600 text-xs">{channelTitle}</p>
        <div className="text-gray-500 text-xs flex gap-2 mt-1">
          <span>{statistics?.viewCount} views</span>
          <span>• {statistics?.likeCount} likes</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
