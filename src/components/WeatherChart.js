import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan 2019",
    "Product A": 3432,
  },
  {
    name: "Feb 2019",
    "Product A": 2342,
  },
  {
    name: "Mar 2019",
    "Product A": 4565,
  },
  {
    name: "Apr 2019",
    "Product A": 6654,
  },
  {
    name: "May 2019",
    "Product A": 8765,
  },
  {
    name: "June 2019",
    "Product A": 12765,
  },
  {
    name: "July 2019",
    "Product A": 10765,
  },
  {
    name: "August 2019",
    "Product A": 5765,
  },
];

const WeatherChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Product A" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
