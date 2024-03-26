import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='p-6 m-6 rounded-2xl bg-[#282828] text-white font-[Inter] flex justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold leading-8 text-3xl tracking-tight'>
                        Unlock premium stats
                    </h3>
                    <h3 className='font-light leading-6 text-sm'>
                        Get up to 10TB of storage for a limited time
                    </h3>
                </div>
                <button className='bg-white text-black flex flex-row items-center rounded-full px-4 py-2 gap-1'>
                    {/* <img src='bolt.png' alt='' srcset='' className='h-6' /> */}
                    <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M10.8333 2.5V8.33333H15.8333L9.16663 17.5V11.6667H4.16663L10.8333 2.5Z'
                            fill='white'
                            stroke='#282828'
                            stroke-width='1.25'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                    <span className='text-base font-semibold leading-7 tracking-tight'>
                        Upgrade
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
