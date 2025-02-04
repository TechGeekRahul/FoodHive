import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ReferenceLine,
} from "recharts";

const Customers = ({ deviceData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Customers by device</h2>
      <LineChart width={200} height={150} data={deviceData}>
        <XAxis dataKey="month" hide />
        <YAxis
          domain={[0, 8000]}
          ticks={[0, 4000, 8000]}
          tickFormatter={(tick) => `${tick / 1000}k`}
        />
        <Tooltip />
        <ReferenceLine y={0} stroke="#ddd" strokeDasharray="3 3" />
        <ReferenceLine y={4000} stroke="#ddd" strokeDasharray="3 3" />
        <ReferenceLine y={8000} stroke="#ddd" strokeDasharray="3 3" />

        <Line
          type="linear"
          dataKey="web_sales"
          stroke="#2196f3"
          strokeWidth={0.1}
        />
        <Line
          type="linear"
          dataKey="offline_sales"
          stroke="#90caf9"
          strokeWidth={0.1}
        />
      </LineChart>

      <div className="mt-4 flex justify-between text-sm">
        <div className="flex items-center space-x-2">
          <div>
            <p className="text-blue-600">Web sales</p>
            <p className="font-bold">1,304%</p>
          </div>
          <div className="w-3 h-3 bg-blue-600 mb-4"></div>
        </div>

        <div className="flex items-center space-x-2">
          <div>
            <p className="text-blue-300">Offline selling</p>
            <p className="font-bold">473%</p>
          </div>
          <div className="w-3 h-3 bg-blue-300 mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
