import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const name = useSelector((state) => state.user.userInfo.name);

  return (
    <div className=" border-r-2 w-3/12 ">
      <div className="h-96 flex flex-col justify-around mx-3 text-blue-500 font-semibold">
        <div>Homepage</div>
        <div>Lists</div>
        <div>Product</div>
        <div>Groups</div>
        <div>Pages</div>
        <div>
          Logout (<b>{name}</b>)
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
