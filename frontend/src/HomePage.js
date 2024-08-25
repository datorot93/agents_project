import React from 'react';
import logo from './logo.png';

const HomePage = () => {
    return (
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <img src={logo} alt="Logo" className="w-42 h-32 mx-auto mb-4"/>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">AI AGENTS</h1>
            <p className="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at AI Agents we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
        </div>
    );
}

export default HomePage;

