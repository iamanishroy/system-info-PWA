import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const style = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
//   lineHeight: "24px",
};
const CircularChart = ({ percentage }) => {
  const data = [
    {
    //   name: "u",
      uv: 100,
      fill: "#ffffff",
    },
    {
      name: "utilization",
      uv: percentage,
      fill: "#1872FD",
    },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="100%"
          barSize={40}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#ffffff00" }}
            // background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={0}
            // layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <p></p>
    </>
  );
};

export default CircularChart;
