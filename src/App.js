import React from "react";
import SideNav from "./components/SideNav";
import "./App.css";
import SystemInfo from "./components/SystemInfo";

function App() {
  return (
    <div className="app">
      <SideNav />
      <SystemInfo />;
    </div>
  );
}

export default App;
