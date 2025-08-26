import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { toggleMenu } from "../Redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../Redux/cacheSlice";
import ButtonList from "./ButtonList";

const Head = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  //const slider = useSelector((store) => store.app.isSlideBarOpen);
  const cache = useSelector((store) => store.cache);

  console.log("Cache in Header:", cache);

  const handleSearch = async () => {
    console.log("Search Query:", searchQuery);
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    console.log("Search Results:", data[1]);
    setSuggestions(data[1]);
    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
        return;
      } else {
        handleSearch();
      }
    }, 200);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // const handleToggle = () => {
  //   dispatch(toggleMenu(!slider)); 
  // };
  return (
    <>
      <div className="grid grid-flow-col p-4 m-0.5 shadow-lg bg-white">
        <div className="flex col-span-1 ">
          <img
            className="h-8 p-1"
            // onClick={() => {
            //   handleToggle();
            // }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
            alt="hamber-icon"
          />

         <a href="/">
         <img
            className="h-8 p-1 ml-2"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            }
            alt="youtube-logo"
          /></a> 
        </div>
        <div className="flex col-span-10 justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              className="w-full border border-black-500 p-2 rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            {/* Suggestions Box */}
            {showSuggestions && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-20">
                <ul>
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="py-2 px-4 border border-black-500 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        <div className="flex col-span-1 justify-end">
          <img
            className="h-8"
            src="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"
            alt="user-icon"
          />
        </div>
      </div>
      <div className="ml-60">
        <ButtonList />
      </div>
    </>
  );
};

export default Head;
