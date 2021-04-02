import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./../style/memoryInfo.css";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const MemoryInfo = () => {
  return (
    <>
      <div class="memory">
        <div class="txtInfo">
          <div class="component">Memory</div>
          <div class="data">
            <div class="param">
              <div class="name">Available</div>
              <div class="value">1596.265MB</div>
            </div>
            <div class="param">
              <div class="name">Used</div>
              <div class="value">1596.265MB</div>
            </div>
            <div class="param">
              <div class="name">Capacity</div>
              <div class="value">1596.265MB</div>
            </div>
          </div>
        </div>
        <div class="memChart">
          <ResponsiveContainer width="110%" height="110%">
            <PieChart width={600} height={600}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#17066F"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default MemoryInfo;
