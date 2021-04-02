import React from "react";
import "./../style/sysInfo.css";
import CPUinfo from "./CPUinfo";
import MemStor from "./MemStor";
const SystemInfo = () => {
  return (
    <div class="infoContent">
      <CPUinfo />
      <MemStor />
    </div>
  );
};
export default SystemInfo;
