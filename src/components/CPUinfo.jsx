import React from "react";
// import Chart from "chart.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./../style/cpuInfo.css";
import CircularChart from "./CircularChart";
const data = [
  {
    name: "Page A",
    uv: 4000,
    "cpu-utilization": 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    "cpu-utilization": 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    "cpu-utilization": 800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    "cpu-utilization": 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    "cpu-utilization": 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    "cpu-utilization": 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    "cpu-utilization": 4300,
    amt: 2100,
  },
];
const CPUinfo = () => {
  //   useEffect(() => {
  //     var ctx = document.querySelector("#cpuChart").getContext("2d");
  //     var myLineChart = new Chart(ctx, {
  //       type: "line",
  //       data: [20, 10],
  //     });
  //   });
  return (
    <div class="cpu">
      <div class="txtInfo">
        <div class="component">CPU</div>
        <div class="data">
          <div class="row">
            <div class="param">
              <div class="name">Architecture</div>
              <div class="value">x86_64</div>
            </div>
            <div class="param">
              <div class="name">Model Name</div>
              <div class="value">Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz</div>
            </div>
          </div>
          <div class="row">
            <div class="param">
              <div class="name">No. of Processors</div>
              <div class="value">8</div>
            </div>
            <div class="param">
              <div class="name">Features</div>
              <div class="value">
                mmx, sse, sse2, sse3, ssse3, sse4_1, sse4_2, avx
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cpuChart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cpu-utilization"
              stroke="#1872FD"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div class="processors">
        <div class="processor">
          <CircularChart percentage={80} />
        </div>
        <div class="processor">
          <CircularChart percentage={85} />
        </div>
        <div class="processor">
          <CircularChart percentage={92} />
        </div>
        <div class="processor">
          <CircularChart percentage={74} />
        </div>
        <div class="processor">
          <CircularChart percentage={62} />
        </div>
        <div class="processor">
          <CircularChart percentage={35} />
        </div>
        <div class="processor">
          <CircularChart percentage={59} />
        </div>
        <div class="processor">
          <CircularChart percentage={10} />
        </div>
      </div>
    </div>
  );
};

export default CPUinfo;
