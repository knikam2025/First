import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const DemoChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      labels: []
    },
    series: []
  });

  useEffect(() => {
    axios.get('https://668a20dc2c68eaf3211c01c0.mockapi.io/order/Cashcollection')
      .then(response => {
        const data = response.data[0]; // Accessing the first object in the array

        // Extracting days and amounts from the fetched data
        const days = Object.keys(data); // ["sunday", "monday", "tuesday", ...]
        const amounts = Object.values(data); // [30000, 45620, 35000, ...]

        setChartData({
          options: {
            labels: days,
          },
          series: amounts
        });
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={[{
              name: "Amount",
              data: chartData.series
            }]}
            type='donut'
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default DemoChart;
