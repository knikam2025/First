import React from 'react';
import { Line } from 'react-chartjs-2';

const dataYearly = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: 'Investment',
      data: [5000, 15000, 10000, 20000, 15000, 30000],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
    },
  ],
};

const dataMonthly = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: 'Revenue',
      data: [5000, 10000, 15000, 10000, 20000, 25000],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const Investment = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 border rounded-lg">
            <div className="text-xl font-medium text-black">Total Invested Amount</div>
            <p className="text-blue-500 text-2xl">$150,000</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-xl font-medium text-black">Number of Investments</div>
            <p className="text-blue-500 text-2xl">1,250</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-xl font-medium text-black">Rate of Return</div>
            <p className="text-blue-500 text-2xl">+5.80%</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Yearly Total Investment</h2>
            <Line data={dataYearly} />
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Monthly Revenue</h2>
            <Line data={dataMonthly} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
