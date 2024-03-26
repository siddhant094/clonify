import { useState } from 'react';
import Sidebar from './Sections/Sidebar';
import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import Performance from './Sections/Performance';
import InstalledApps from './Sections/InstalledApps';
import './App.css';
// import './output.css';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <div className='bg-[#F2F4F7] flex flex-row'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <Hero />
                {/* <Performance /> */}
                {/* <InstalledApps /> */}
            </div>
        </div>
    );
}

export default App;
