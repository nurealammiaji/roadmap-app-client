import React from 'react';

const Filterbar = () => {
    return (
        <div className="flex justify-evenly">
            <button className='h-[2rem] w-[7rem] text-white font-medium rounded-sm bg-blue-600'>All</button>
            <button className='h-[2rem] w-[7rem] bg-white font-medium rounded-sm text-blue-600 border-2 border-blue-600'>In Progress</button>
            <button className='h-[2rem] w-[7rem] bg-white font-medium rounded-sm text-blue-600 border-2 border-blue-600'>Completed</button>
            <button className='h-[2rem] w-[7rem] bg-white font-medium rounded-sm text-blue-600 border-2 border-blue-600'>Popular</button>
        </div>
    );
};

export default Filterbar;