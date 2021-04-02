import React from "react";
import "./../style/header.css";
const Header = () => {
  return (
    <>
      <div class="header">
        <div class="name">SysInfo</div>
        <div class="nav_btn">
          <span>Info</span>
          <span>Diagnostics</span>
          <span>Status</span>
        </div>
        <div class="datetime">02/01/2021 - 12:25 PM</div>
      </div>
    </>
  );
};
export default Header;
