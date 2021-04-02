import React from "react";
import "./../style/sideNav.css";
const SideNav = () => {
  return (
    <>
      <div className="sideNav">
        <div className="top">
          <div className="name">SysInfo</div>
          <div className="dateTime">02/04/2021 - 11:50PM</div>
        </div>
        <div className="navBtns">
          <div className="active">System Data</div>
          <div>System Diagnostics Manager</div>
          <div>System State</div>
        </div>
        <div className="credits">Credits</div>
      </div>
    </>
  );
};
export default SideNav;
