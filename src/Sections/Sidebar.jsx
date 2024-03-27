import React, { useState } from 'react';

const Sidebar = () => {
    const [dashboard, setDashboard] = useState(true);
    const [messages, setMessages] = useState(false);
    const [friends, setFriends] = useState(false);
    const [apps, setApps] = useState(false);
    const [support, setSupport] = useState(false);
    const [files, setFiles] = useState(false);
    return (
        <div className='bg-white border flex flex-col w-1/4 pt-4 max-sm:hidden font-[Inter] text-sm justify-between min-h-[1000px]'>
            <div className='flex flex-col px-4'>
                <span>
                    <img
                        src='logo-full.png'
                        alt=''
                        srcset=''
                        className='w-24 mb-10'
                    />
                </span>
                <span className='text-[#9D9FA1] font-semibold tracking-widest text-xs'>
                    DASHBOARD
                </span>
                {/* Dashboard */}
                <div className='mt-7'>
                    <button
                        onClick={() => setDashboard(!dashboard)}
                        className='w-full flex items-center justify-between'
                    >
                        <div className='flex gap-1 items-center'>
                            <img
                                src='sidebar/Stats.png'
                                alt='stats'
                                className='w-6 h-6 inline'
                            />
                            <span className='text-[#282828] font-semibold'>
                                Dashboard
                            </span>
                        </div>
                        <img
                            src='sidebar/chevron-up.png'
                            alt=''
                            className={`w-6 ${
                                dashboard
                                    ? 'transition'
                                    : 'rotate-180 transition'
                            }`}
                        />
                    </button>
                    {dashboard && (
                        <div className='flex flex-col gap-3 font-semibold text-[#5F6980] mt-4 px-8'>
                            <span className='text-[#282828] hover:cursor-pointer'>
                                Analytics
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Finance
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Job Board
                            </span>
                        </div>
                    )}
                </div>
                {/* Messages */}
                <div className='mt-7'>
                    <button
                        onClick={() => setMessages(!messages)}
                        className='w-full flex items-center justify-between'
                    >
                        <div className='flex gap-1 items-center'>
                            <img
                                src='sidebar/email.png'
                                alt='stats'
                                className='w-6 h-6 inline'
                            />
                            <span className='text-[#5F6980] hover:text-[#282828] font-semibold'>
                                Messages
                            </span>
                        </div>
                        <img
                            src='sidebar/chevron-down.png'
                            alt=''
                            className={`w-6 ${
                                messages
                                    ? 'rotate-180 transition'
                                    : 'transition'
                            }`}
                        />
                    </button>
                    {messages && (
                        <div className='flex flex-col gap-3 font-semibold text-[#5F6980] mt-4 px-8'>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Analytics
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Finance
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Job Board
                            </span>
                        </div>
                    )}
                </div>
                {/* Friends */}
                <div className='mt-7'>
                    <button
                        onClick={() => setFriends(!friends)}
                        className='w-full flex items-center justify-between'
                    >
                        <div className='flex gap-1 items-center'>
                            <img
                                src='sidebar/user.png'
                                alt='stats'
                                className='w-6 h-6 inline'
                            />
                            <span className='text-[#5F6980] hover:text-[#282828] font-semibold'>
                                Friends
                            </span>
                        </div>
                        <img
                            src='sidebar/chevron-down.png'
                            alt=''
                            className={`w-6 ${
                                friends ? 'rotate-180 transition' : 'transition'
                            }`}
                        />
                    </button>
                    {friends && (
                        <div className='flex flex-col gap-3 font-semibold text-[#5F6980] mt-4 px-8'>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Analytics
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Finance
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Job Board
                            </span>
                        </div>
                    )}
                </div>
                {/* Apps */}
                <div className='mt-7'>
                    <button
                        onClick={() => setApps(!apps)}
                        className='w-full flex items-center justify-between'
                    >
                        <div className='flex gap-1 items-center'>
                            <img
                                src='sidebar/layout-grid.png'
                                alt='stats'
                                className='w-6 h-6 inline'
                            />
                            <span className='text-[#5F6980] hover:text-[#161617] font-semibold'>
                                Apps
                            </span>
                        </div>
                        <img
                            src='sidebar/chevron-down.png'
                            alt=''
                            className={`w-6 ${
                                apps ? 'rotate-180 transition' : 'transition'
                            }`}
                        />
                    </button>
                    {apps && (
                        <div className='flex flex-col gap-3 font-semibold text-[#5F6980] mt-4 px-8'>
                            <span className='hover:text-[#282828]  hover:cursor-pointer'>
                                Analytics
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Finance
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Job Board
                            </span>
                        </div>
                    )}
                </div>

                <span className='text-[#9D9FA1] font-semibold tracking-widest text-xs pt-10'>
                    PAGES
                </span>
                {/* Help Center */}
                <div className='mt-7'>
                    <button
                        onClick={() => setSupport(!support)}
                        className='w-full flex items-center justify-between'
                    >
                        <div className='flex gap-1 items-center'>
                            <img
                                src='sidebar/Support.png'
                                alt='stats'
                                className='w-6 h-6 inline'
                            />
                            <span className='text-[#5F6980] hover:text-[#282828] font-semibold'>
                                Help Center
                            </span>
                        </div>
                        <img
                            src='sidebar/chevron-down.png'
                            alt=''
                            className={`w-6 ${
                                support ? 'rotate-180 transition' : 'transition'
                            }`}
                        />
                    </button>
                    {support && (
                        <div className='flex flex-col gap-3 font-semibold text-[#5F6980] mt-4 px-8'>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Analytics
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Finance
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Job Board
                            </span>
                        </div>
                    )}
                </div>
                {/* Files */}
                <div className='mt-7'>
                    <button
                        onClick={() => setFiles(!files)}
                        className='w-full flex items-center justify-between'
                    >
                        <div className='flex gap-1 items-center'>
                            <img
                                src='sidebar/Folder.png'
                                alt='stats'
                                className='w-6 h-6 inline'
                            />
                            <span className='text-[#5F6980] hover:text-[#282828] font-semibold'>
                                File Manager
                            </span>
                        </div>
                        <img
                            src='sidebar/chevron-down.png'
                            alt=''
                            className={`w-6 ${
                                files ? 'rotate-180 transition' : 'transition'
                            }`}
                        />
                    </button>
                    {files && (
                        <div className='flex flex-col gap-3 font-semibold text-[#5F6980] mt-4 px-8'>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Analytics
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Finance
                            </span>
                            <span className='hover:text-[#282828] hover:cursor-pointer'>
                                Job Board
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex items-center justify-center p-3 border-t gap-12'>
                <img
                    src='sidebar/Settings.png'
                    alt='settings'
                    className='h-5'
                />
                <img src='sidebar/logout.png' alt='logout' className='h-5' />
                <img src='sidebar/globe.png' alt='globe' className='h-5' />
            </div>
        </div>
    );
};

export default Sidebar;
