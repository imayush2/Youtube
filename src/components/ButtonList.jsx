const ButtonList = () => {
  const buttons = [
    "All",
    "Live",
    "Music",
    "Gaming",
    "Movies",
    "Sports",
    "News",
    "Fashion",
    "Learning",
    "Podcasts",
    "Recently Uploaded"
  ];

  return (
    <div className="flex gap-3 overflow-x-auto whitespace-nowrap p-3 bg-white shadow-sm">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
