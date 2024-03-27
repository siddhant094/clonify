import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-white border-b w-full md:h-16 py-3 px-6 flex max-sm:flex-col-reverse md:flex-row md:gap-6 max-sm:gap-3 justify-between'>
            <div className='flex-grow flex border border-[#EAECF0] p-2 rounded-md items-center gap-2 focus:outline-none focus:ring focus:border-blue-500 md:w-3/4'>
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
            <div className='flex gap-6 items-center max-sm:justify-between'>
                <img
                    src='indicator.png'
                    alt=''
                    className='w-6 h-6 max-sm:hidden'
                />
                <img
                    src='calendar.png'
                    alt=''
                    className='w-6 h-6 max-sm:hidden'
                />
                <img
                    src='layout-grid.png'
                    alt=''
                    className='w-6 h-6 max-sm:hidden'
                />
                <img src='logo-full.png' alt='' className='h-8 md:hidden' />
                <img src='Avatar.png' alt='' className='w-8 h-8' />
            </div>
        </div>
    );
};

export default Navbar;
