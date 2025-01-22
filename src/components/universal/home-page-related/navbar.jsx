import React from "react";

const headerLink = [
  {
    link: "Home",
  },
  {
    link: "New",
  },
  {
    link: "Popular",
  },
  {
    link: "Lists",
  },
  {
    link: "Sports",
  },
  {
    link: "Guide",
  },
];

const Navbar = () => {
  return (
      <div className="flex  items-center justify-between w-full h-14">
        <div>
          logo
          {/* <img src="" alt="" /> */}
        </div>
        <div className="flex gap-3">
          {headerLink.map((item, index) => (
            <div key={index}>{item.link}</div>
          ))}
        </div>
        <div className="flex gap-3">
            <input className="h-10 max-w-[500px]" type="text" placeholder="Enter Movie Name...."/>
            <button>Sign In</button>
        </div>
      </div>
  );
};

export default Navbar;
