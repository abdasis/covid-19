import React from "react";
import Navbar from "./components/NavComponent";
import Weather from "./components/WeaterComponent";
import Statistik from "./components/StatistikComponent";
import Global from "./components/GlobalStatistik";
function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Weather />
      <Statistik />
      <Global />
    </div>
  );
}

export default App;
