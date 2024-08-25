import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [showConsult, setShowConsult] = useState(false);
    const [showAgents, setShowAgents] = useState(false);

    return (
        <div className="w-64 bg-gray-200 text-black h-screen p-4 shadow-lg">
            <div className="mt-20">
                <h2 className="text-lg font-semibold">
                    <Link to="/home">Home</Link>
                </h2>
            </div>

            <div className="mt-4">
                <h2 
                    className="cursor-pointer text-lg font-semibold"
                    onClick={() => setShowAgents(!showAgents)}>
                    Agents
                </h2>
                {showAgents && (
                    <ul className="ml-4 mt-2">
                        <li className="text-sm text-gray-700 hover:text-blue-500">
                            <Link to="/new-project">New Project</Link>
                        </li>
                        <li
                            className="cursor-pointer text-sm text-gray-700 hover:text-blue-500"
                            onClick={() => setShowConsult(!showConsult)}>
                            Consult with the agent
                        </li>
                        {showConsult && (
                            <ul className="ml-4 mt-2">
                                <li className="text-sm text-gray-700 hover:text-blue-500">
                                    <Link to="/hr-agent">HR</Link>
                                </li>
                                <li className="text-sm text-gray-700 hover:text-blue-500">Development</li>
                                <li className="text-sm text-gray-700 hover:text-blue-500">Support</li>
                                <li className="text-sm text-gray-700 hover:text-blue-500">Sales</li>
                                <li className="text-sm text-gray-700 hover:text-blue-500">Purchase</li>
                                <li className="text-sm text-gray-700 hover:text-blue-500">Logistic</li>
                            </ul>
                        )}
                    </ul>
                )}
            </div>

            <div className="mt-4">
                <h2 className="text-lg font-semibold">
                    <Link to="/sprint">Task Panel</Link>
                </h2>
            </div>
        </div>
    );
}

export default Sidebar;
