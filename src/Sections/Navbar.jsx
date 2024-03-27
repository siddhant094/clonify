import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-white border-b w-full h-16 py-3 px-6 flex gap-6 justify-between'>
            <div className='flex-grow flex border border-[#EAECF0] p-2 rounded-md items-center gap-2 focus:outline-none focus:ring focus:border-blue-500 w-3/4'>
                <img
                    src='search.png'
                    alt=''
                    srcset='search.png'
                    className='w-5 h-5'
                />
                <input
                    type='text'
                    name=''
                    id=''
                    className='outline-none flex-grow'
                    placeholder='Search...'
                />
            </div>
            <div className='flex gap-6 items-center'>
                <img src='indicator.png' alt='' className='w-6 h-6' />
                <img src='calendar.png' alt='' className='w-6 h-6' />
                <img src='layout-grid.png' alt='' className='w-6 h-6' />
                <img src='Avatar.png' alt='' className='w-8 h-8' />
            </div>
        </div>
    );
};

export default Navbar;
