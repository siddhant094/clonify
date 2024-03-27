import React from 'react';

const appData = [
    {
        name: 'Zepplin',
        amount: '656.00',
        color: 'green',
        status: 'Active',
        userId: 114423,
        joined: 'October',
        Group: 'Design',
    },
    {
        name: 'Figma',
        amount: '864.00',
        color: 'orange',
        status: 'Pending',
        userId: 76223,
        joined: 'June',
        Group: 'Finance',
    },
    {
        name: 'Meta',
        amount: '176.00',
        color: '',
        status: 'Cancelled',
        userId: 89453,
        joined: 'March',
        Group: 'Coding',
    },
    {
        name: 'Angular',
        amount: '49.00',
        color: 'green',
        status: 'Active',
        userId: 11467,
        joined: 'February',
        Group: 'Marketing',
    },
    {
        name: 'Vue',
        amount: '999.00',
        color: 'green',
        status: 'Active',
        userId: 67385,
        joined: 'October',
        Group: 'Finance',
    },
];

const InstalledApps = () => {
    return (
        <div className='bg-white rounded-xl m-6 font-[Inter]'>
            <div className='flex justify-between items-center px-6 py-4 font-semibold text-lg border-[#EAECF0] border-b'>
                Installed Apps
                <img src='dots.png' alt='' className='h-6' />
            </div>
            <div>
                <div className='grid grid-cols-6 px-6 py-4 bg-[#F9FAFB] text-[#5F6980] text-sm'>
                    <span>Source</span>
                    <span>Amount</span>
                    <span>Status</span>
                    <span>User ID</span>
                    <span>Joined</span>
                    <span>Group</span>
                </div>
                {appData.map((item) => {
                    console.log(item);
                    return (
                        <div className='grid grid-cols-6 px-4 py-1 text-[#5F6980] items-center border-[#EAECF0] border-b text-sm'>
                            <div className='flex items-center'>
                                <img
                                    src={`${item.name.toLowerCase()}.png`}
                                    alt=''
                                    srcset={`${item.name.toLowerCase()}.png`}
                                    className='w-16'
                                />
                                <span className='text-[#282828] font-semibold text-sm'>
                                    {item.name}
                                </span>
                            </div>
                            <span>{item.amount}</span>
                            <span
                                className={`${
                                    item.color == 'green'
                                        ? 'bg-[#DCFFF5] text-[#20C997]'
                                        : item.color == 'orange'
                                        ? 'bg-[#FFEAD8] text-[#FD7E14]'
                                        : 'text-[#5F6980] bg-[#F2F4F7]'
                                } rounded-full px-2 py-1 text-xs font-semibold w-fit`}
                            >
                                {item.status}
                            </span>
                            <span>{item.userId}</span>
                            <span>{item.joined}</span>
                            <span>{item.Group}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default InstalledApps;
