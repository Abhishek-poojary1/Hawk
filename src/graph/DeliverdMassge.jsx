import React from "react";
import { Line } from "react-chartjs-2";

import { deliverdMassge } from "./Data";

const DeliverdMassge = () => {
  const belowLineColor = "rgba(247,0,8,0.1)";

  return (
    <div>
      <Line
        data={{
          labels: deliverdMassge.map((data) => data.label),
          datasets: [
            {
              label: "massagee",
              data: deliverdMassge.map((data) => data.massage),
              borderColor: "#da412d",
              fill: true,
              tension: 0.5, // Adjust the tension value for smoother curves (0.4 is an example value)
              backgroundColor: belowLineColor,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              display: false, // Hide the x axis rgb(247,0,0)
            },
            y: {
              display: false, // Hide the y axis
            },
          },
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
        }}
      />
    </div>
  );
};

export default DeliverdMassge;
