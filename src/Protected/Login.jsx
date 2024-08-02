import React from 'react';

const Login = () => {
  return (

    <>
    
        <div className='m-10'>

    <div className="flex justify-center items-center ">
      <div className="bg-gray-200 p-6 rounded shadow-lg w-64">
        <h2 className="text-xl font-bold mb-4">Login Account</h2>
        
        <input
          type="text"
          placeholder="Enter userid"
          className="block w-full px-3 py-2 mb-4 leading-tight rounded border shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="block w-full px-3 py-2 mb-4 leading-tight rounded border shadow appearance-none focus:outline-none focus:shadow-outline"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </div>
    </div>
        
    </div>
    </>

  );
};

export default Login;
