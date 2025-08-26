import { useSelector } from "react-redux";

const SideBar = () => {
  const slider = useSelector((store) => store.app.isSlideBarOpen);

  return (
    <>
      {/* Sidebar for larger screens */}
      <div
        className={`${
          slider ? "block" : "hidden"
        } lg:block fixed lg:static top-0 left-0 h-full lg:h-screen w-60 bg-white shadow-lg p-5 z-30 transition-transform duration-300`}
      >
        <h1 className="font-bold text-lg mb-3">Home</h1>
        <ul className="space-y-2">
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Trending</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Music</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Movies</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Gaming</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Sports</li>
        </ul>

        <h1 className="font-bold text-lg mt-6 mb-3">Library</h1>
        <ul className="space-y-2">
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">History</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Watch Later</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Liked Videos</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Subscriptions</li>
        </ul>

        <h1 className="font-bold text-lg mt-6 mb-3">Explore</h1>
        <ul className="space-y-2">
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Live</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">News</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Fashion & Beauty</li>
          <li className="hover:bg-gray-100 rounded p-2 cursor-pointer">Learning</li>
        </ul>
      </div>

      {/* Dark overlay on mobile when sidebar is open */}
      {slider && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-40 z-20"></div>
      )}
    </>
  );
};

export default SideBar;
