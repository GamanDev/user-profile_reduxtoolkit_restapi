import React from "react";
import Main from "./Main";
import Nav from "./Nav";
import Recomendations from "./Recomendations";
import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <div>
      <Nav />
      <div className="flex h-screen">
        <Sidebar />
        <Main />
        <Recomendations />
      </div>
    </div>
  );
};

export default Container;
