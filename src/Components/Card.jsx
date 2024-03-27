import React from 'react';

const Card = ({ prop }) => {
    console.log(prop);
    return (
        <div className='bg-white p-5 rounded-xl flex flex-col font-[Inter] shadow-sm'>
            <span className='text-[#5F6980] leading-6'>{prop.heading}</span>
            <span className='font-semibold leading-7 text-2xl mb-8 mt-1'>
                {prop.amount}
            </span>
            <div className='flex gap-2 items-center'>
                <span
                    className={`${
                        prop.color == 'green'
                            ? 'bg-[#DCFFF5] text-[#20C997]'
                            : prop.color == 'red'
                            ? 'bg-[#FFE0E3] text-[#DC3545]'
                            : 'text-[#5F6980] bg-[#F2F4F7]'
                    } rounded-full px-2 py-1 text-xs font-semibold`}
                >
                    {prop.profit}
                </span>
                {prop.sidetext && (
                    <span className='text-[#9D9FA1] font-semibold text-xs'>
                        From 4.6%
                    </span>
                )}
            </div>
        </div>
    );
};

export default Card;
