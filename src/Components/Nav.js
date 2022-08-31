import React from "react";
import { useSelector } from "react-redux";
const Nav = () => {
  const name = useSelector((state) => state.user.userInfo.name);

  return (
    <nav className="flex mx-2 justify-between mt-4 border-b-2 items-center">
      <h2 className="text-2xl text-cyan-800 font-bold">Bliminse App</h2>
      <div className="flex w-5/12 justify-between text-cyan-600 cursor-pointer">
        <div>Home</div>
        <div>Profile</div>
        <div>Contact</div>
        <div>About</div>
      </div>
      <div className="flex mx-2 items-center">
        <img
          src="https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf"
          alt=""
          className="w-14 h-14"
        />
        <div className="font-semibold">{name}</div>
      </div>
    </nav>
  );
};
export default Nav;
