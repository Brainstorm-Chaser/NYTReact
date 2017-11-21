import React from "react";
import Header from "../Header";
import Results from "../Results";
import Saved from "../Saved";
import Search from "../Search";

const Main = () => (
  <div>
    <div class = "container-fluid">
    <Header />
    </div>
    <div class ="container">
      <Search />
      <Results />
      <Saved />      
    </div>
 </div>
);

export default Main;