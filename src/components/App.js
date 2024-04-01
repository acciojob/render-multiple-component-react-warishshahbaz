import React, { Component, useState } from "react";
import "../styles/App.css";
import ChildCom from "./ChildCom";

const App = () => {
  console.log("test");
  return (
    <div id="main">
      {Data.map((item, i) => {
        return <ChildCom key={i} item={item} />;
      })}
    </div>
  );
};
let Data = [
  {
    name: "Weather App",
    description:
      "Weather app should help to pepole to know the weather in critical time",
  },
  {
    name: "Mobile App",
    description:
      "Weather app should help to pepole to know the weather in critical time",
  },
  {
    name: "Anroide App",
    description:
      "Weather app should help to pepole to know the weather in critical time",
  },
];

export default App;
