import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';


import { publishMassge } from './Data';

const PublishMassge = () => {

  const belowLineColor = 'rgba(0, 0, 255, 0.1)';

  return (
    <div>
      <Line
        data={{
          labels: publishMassge.map((data) => data.label),
          datasets: [
            {
              label: "massagee",
              data: publishMassge.map((data) => data.massage),
              borderColor: '#4285f4',
              fill: true,
              tension: 0.5, // Adjust the tension value for smoother curves (0.4 is an example value)
              backgroundColor: belowLineColor
            },
          ],
        }}
        options={{
          scales: {
            x: {
              display: false // Hide the x axis
            },
            y: {
              display: false // Hide the y axis
            }
          },
          plugins: {
            legend: {
              display: false // Hide the legend
            }
          }
        }}
      />
    </div>
  )
}

export default PublishMassge
