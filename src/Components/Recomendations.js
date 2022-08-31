import React from "react";
import { useSelector } from "react-redux";

const Recomendations = () => {
  const name = useSelector((state) => state.user.userInfo.name);

  return (
    <div className=" border-l-2 w-4/12  h-screen">
      <div className="flex flex-col mx-3 text-blue-500 font-semibold h-5/6 justify-around text-lg ">
        <div>
          <div>
            Recomendations for <b>{name}</b>
          </div>
          <img src="http://unsplash.it/400/200" alt="" />
        </div>
        <div>
          <div>Popular on Bliminse App</div>
          <img src="http://unsplash.it/401/200" alt="" />
        </div>
        <div>
          <div>Editor's choice</div>
          <img src="http://unsplash.it/402/200" alt="" />
        </div>
        <button className="bg-slate-300 p-2 text-slate-700">See More</button>
      </div>
    </div>
  );
};

export default Recomendations;
