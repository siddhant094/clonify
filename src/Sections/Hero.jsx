import React from 'react';
import Card from '../Components/Card';

const CardData = [
    {
        heading: 'Revenue',
        amount: '$56,945',
        profit: '+45%',
        color: 'green',
        from: 'From 4.6%',
        sidetext: true,
    },
    {
        heading: 'Users',
        amount: '76.8%',
        profit: '-1.7%',
        color: 'red',
        from: 'From 4.6%',
        sidetext: true,
    },
    {
        heading: 'New Signups',
        amount: '116',
        profit: '0.00',
        color: '',
        sidetext: false,
    },
    {
        heading: 'Retention',
        amount: '12.67%',
        profit: '+0.6%',
        color: 'green',
        from: 'From 4.6%',
        sidetext: true,
    },
];

const Hero = () => {
    return (
        <div className='mx-6'>
            <div className='p-6 my-6 rounded-2xl bg-[#282828] text-white font-[Inter] flex max-sm:flex-col md:flex-row justify-between items-center hover:shadow-2xl transition'>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold leading-8 text-3xl tracking-tight max-sm:text-center'>
                        Unlock premium stats
                    </h3>
                    <h3 className='font-light leading-6 text-sm max-sm:px-6 max-sm:py-2 max-sm:text-center'>
                        Get up to 10TB of storage for a limited time
                    </h3>
                </div>
                <button className='bg-white text-black flex flex-row items-center rounded-full px-6 py-2 gap-1'>
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
            <div className='grid max-sm:grid-cols-1 max-sm:grid-rows-4 md:grid-cols-4 gap-5'>
                {CardData.map((prop) => {
                    return <Card prop={prop} />;
                })}
            </div>
        </div>
    );
};

export default Hero;
