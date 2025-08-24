const Comments = ({ data }) => {
  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200 bg-white">
      {/* Avatar */}
      <img
        src={data.authorImage}
        alt={`${data.author}'s avatar`}
        className="h-10 w-10 rounded-full"
      />

      {/* Comment Content */}
      <div className="flex flex-col">
        {/* Author and Time */}
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-800">{data.author}</h3>
          <span className="text-sm text-gray-500">{data.timeAgo}</span>
        </div>

        {/* Comment Text */}
        <p className="text-gray-700 mt-1">{data.commentText}</p>

        {/* Likes */}
        <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
          <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
            👍 {data.likes}
          </span>
          <button className="text-blue-500 font-semibold hover:underline">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
