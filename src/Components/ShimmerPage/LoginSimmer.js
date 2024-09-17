import React from 'react';

const LoginSimmer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-gray-100'>
      <div className='text-center text-xl font-semibold text-gray-700 mb-4'>
        Login before coming to this page
      </div>
      <button className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'>
        Go to Login
      </button>
    </div>
  );
}

export default LoginSimmer;
