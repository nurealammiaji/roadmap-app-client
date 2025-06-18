import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between shadow-lg p-2 rounded-md'>
            <div>
                <h3 className='text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-blue-500 text-transparent bg-clip-text'>Roadmap App</h3>
            </div>
            <div>
                <button type='button' className='text-xl text-white h-[2.5rem] w-[7rem] rounded-md font-medium bg-gradient-to-r from-fuchsia-500 to-blue-500'>Log in</button>
            </div>
        </nav>
    );
};

export default Navbar;