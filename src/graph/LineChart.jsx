import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (data.length === 0) return;

    const labels = data.map(item => item.label);
    const values = data.map(item => item.massage);

    if (chartInstance) {
      // If chartInstance exists, destroy the previous chart
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Message',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            display: false, // Hide the x-axis
          },
          y: {
            display: false, // Hide the y-axis
          }
        }, plugins: {
          legend: {
            display: false // Hide the legend
          }
        }
      }
    });

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <canvas ref={chartRef} />
  );
};

export default LineChart;
