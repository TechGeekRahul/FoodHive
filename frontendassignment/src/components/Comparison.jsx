import React from "react";
import { XAxis, YAxis, Tooltip, Legend, Bar, BarChart } from "recharts";
import ControlButtons from "./ControlButtons";

const Comparison = ({ comparisonData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold ">Comparison</h2>
      <ControlButtons />

      <div className="bg-white rounded-lg ml-18">
        <BarChart width={700} height={350} data={comparisonData}>
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Last_year" fill="#90caf9" name="Last Year" />
          <Bar dataKey="This_year" fill="#2196f3" name="This Year" />
        </BarChart>
      </div>
    </div>
  );
};

export default Comparison;
