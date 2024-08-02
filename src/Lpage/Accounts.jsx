import React from 'react';

const Accounts = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-xl font-medium text-black">My Balance</div>
            <p className="text-blue-500 text-2xl">$12,750</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-medium text-black">Income</div>
            <p className="text-blue-500 text-2xl">$5,600</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-medium text-black">Expense</div>
            <p className="text-blue-500 text-2xl">$3,460</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-medium text-black">Total Saving</div>
            <p className="text-blue-500 text-2xl">$7,920</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Last Transaction</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <div className="mr-4">
                  <img src="path/to/spotify-logo.png" alt="Spotify" className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-gray-700">Spotify Subscription</div>
                  <div className="text-gray-500 text-sm">25 Jan 2021</div>
                </div>
              </div>
              <div className="text-red-500">-$150</div>
            </div>

            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <div className="mr-4">
                  <img src="path/to/mobile-service-logo.png" alt="Mobile Service" className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-gray-700">Mobile Service</div>
                  <div className="text-gray-500 text-sm">25 Jan 2021</div>
                </div>
              </div>
              <div className="text-red-500">-$340</div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-4">
                  <img src="path/to/person-icon.png" alt="Person" className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-gray-700">Emilly Wilson</div>
                  <div className="text-gray-500 text-sm">25 Jan 2021</div>
                </div>
              </div>
              <div className="text-green-500">+$780</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">My Card</h2>
          <div className="bg-blue-500 p-6 rounded-lg text-white">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg">Balance</div>
              <div className="text-2xl">$5,756</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg">CARD HOLDER</div>
                <div className="text-xl">Eddy Cusuma</div>
              </div>
              <div>
                <div className="text-lg">VALID THRU</div>
                <div className="text-xl">12/22</div>
              </div>
            </div>
            <div className="text-center mt-4 text-2xl">3778 **** **** 1234</div>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Accounts;
