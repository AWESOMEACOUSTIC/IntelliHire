import React from 'react';
import Navbar from '../components/Navbar'; 
import Question from '../components/Question';

const SplitLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Split Divs */}
      <div className="flex-grow flex">
        {/* Left Div */}
        <div className="w-1/2 p-4 bg-gray-200 flex flex-col">
          {/* Question Interface (div1 content) */}
          <div className="flex-grow">
            <h2 className="text-2xl mb-4">Question Interface</h2>
            
          </div>

          {/* Transcript Code (div2 content) */}
          <div className="bg-white p-4 mt-4">
            <h2 className="text-2xl mb-4">Transcript Code</h2>
            {/* Add your content for the transcript code here */}
            <pre>
              <code>{`// Your code here`}</code>
            </pre>
          </div>
        </div>

        {/* Right Div */}
        <div className="w-1/2 p-4 bg-white">
          {/* Content for the right div */}
          <h2 className="text-2xl mb-4">Right Div</h2>
          {/* Add your content for the right div here */}
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;
