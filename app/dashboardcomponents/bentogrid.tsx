import React from 'react';

const BentoGrid = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid h-full w-full gap-4  p-2 grid-cols-4 grid-rows-10 rounded-lg ">
        <div 
          className="col-span-1 row-span-3 bg-pink-200 rounded-lg  flex items-center justify-center"
        >
          <p>Salmon</p>
        </div>

        <div 
          className="col-span-1 row-span-3 bg-lime-200 rounded-lg  flex items-center justify-center"
        >
          <p>Broccoli</p>
        </div>

        <div 
          className="col-span-1 row-span-3 bg-yellow-200 rounded-lg  flex items-center justify-center"
        >
          <p>Tamago</p>
        </div>

        <div 
          className="col-span-1 row-span-3 bg-red-400 rounded-lg  flex items-center justify-center"
        >
          <p>Pork</p>
        </div>

        <div 
          className="col-span-1 row-span-4 bg-green-200 rounded-lg  flex items-center justify-center"
        >
          <p>Edamame</p>
        </div>

        <div 
          className="col-span-3 row-span-4 bg-red-200 rounded-lg  flex items-center justify-center"
        >
          <p>Tomato</p>
        </div>

        <div 
          className="col-span-1 row-span-3 bg-gray-200 rounded-lg  flex items-center justify-center"
        >
          <p>Tofu</p>
        </div>

        <div 
          className="col-span-2 row-span-3 bg-yellow-100 rounded-lg  flex items-center justify-center"
        >
          <p>Tempura</p>
        </div>

        <div 
          className="col-span-1 row-span-3 bg-yellow-300 rounded-lg  flex items-center justify-center"
        >
          <p>Gyoza</p>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
