import React from "react";
import "./../style/memStor.css";
import MemoryInfo from "./MemoryInfo";
import StorageInfo from "./StorageInfo";

const MemStor = () => {
  return (
    <>
      <div class="memStor">
        <MemoryInfo />
        <StorageInfo />
      </div>
    </>
  );
};

export default MemStor;
