import React, { useState } from "react";
import "./Chart.css";
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
import { xAxis } from "../../Datas";

function Chart() {
  const [data, setData] = useState(xAxis);

  return (
    <div className="Chart">
      <ResponsiveContainer aspect={3} width="100%" height="100%">
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
          <XAxis dataKey="name" />
          <YAxis dataKey="sale" />
          <Tooltip />
          <CartesianGrid stroke="#f2f2f2" strokeDasharray={10} />
          <Legend />
          <Line
            type="monotone"
            dataKey="sale"
            stroke="black"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
