import React from 'react'
import {Line } from 'react-chartjs-2';


import { dropedMassge } from './Data';

const DropedMassge = () => {
  const belowLineColor = 'rgba(0,247,0,0.1)'

  return (
    <div>
      <Line 
       data={{
        labels: dropedMassge.map((data)=>data.label),
        datasets:[
               { label : "massagee",
                data : dropedMassge.map((data)=>data.massage),
                borderColor: '#22c55e',
                fill: true,
                tension: 0.5, // Adjust the tension value for smoother curves (0.4 is an example value)
                backgroundColor: belowLineColor 
              }
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

export default DropedMassge;
