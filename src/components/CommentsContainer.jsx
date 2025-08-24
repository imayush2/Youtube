import Comments from "./Comments";

const CommentsData = [
  {
    id: "c1",
    author: "John Doe",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    commentText: "This video was super helpful, thanks a lot!",
    likes: 124,
    timeAgo: "2 hours ago",
    replies: [
      {
        id: "r1",
        author: "Jane Smith",
        authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
        commentText: "Totally agree! Learned so much from this.",
        likes: 35,
        timeAgo: "1 hour ago"
      }
    ]
  },
  {
    id: "c2",
    author: "Tech Guru",
    authorImage: "https://randomuser.me/api/portraits/men/52.jpg",
    commentText: "Amazing content as always! Please make a video on React performance optimization.",
    likes: 310,
    timeAgo: "5 hours ago",
    replies: []
  },
  {
    id: "c3",
    author: "Alex Johnson",
    authorImage: "https://randomuser.me/api/portraits/men/12.jpg",
    commentText: "Who else is watching this in 2025? 🔥",
    likes: 92,
    timeAgo: "1 day ago",
    replies: [
      {
        id: "r2",
        author: "Coding Queen",
        authorImage: "https://randomuser.me/api/portraits/women/21.jpg",
        commentText: "Me! Still relevant and super useful.",
        likes: 15,
        timeAgo: "23 hours ago"
      },
      {
        id: "r3",
        author: "Dev Guy",
        authorImage: "https://randomuser.me/api/portraits/men/27.jpg",
        commentText: "2025 squad here! 🚀",
        likes: 10,
        timeAgo: "22 hours ago"
      }
    ]
  },
  {
    id: "c4",
    author: "Sarah Lee",
    authorImage: "https://randomuser.me/api/portraits/women/19.jpg",
    commentText: "Quick tip: You can also use `React.memo` for better performance!",
    likes: 47,
    timeAgo: "3 days ago",
    replies: []
  }
];

const CommentsContainer = () => {
  return (
    <div className="w-full max-w-3xl  bg-gray-100 rounded-lg shadow-md p-4 mt-4">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      {CommentsData.map((comment) => (
        <div key={comment.id} className="mb-4">
          <Comments data={comment} />
          {/* Nested Replies */}
          {comment.replies.length > 0 && (
            <div className="ml-12 mt-2 border-l-2 border-gray-200 pl-4">
              {comment.replies.map((reply) => (
                <Comments key={reply.id} data={reply} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsContainer;
