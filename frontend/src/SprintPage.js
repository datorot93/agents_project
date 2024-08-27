import React, { useState } from 'react';
import SprintBoard from './SprintBoard';
import SprintPlanning from './SprintPlanning';
import BurndownChart from './BurndownChart';

const SprintPage = () => {
    const [tasks] = useState([
        { id: '1', title: 'Task 1', status: 'ToDo', description: 'Task description 1', assignedTo: 'Juan' },
        // ...More tasks
    ]);

    const burndownData = [
        { date: '2024-08-01', workRemaining: 10, idealBurn: 10 },
        { date: '2024-08-02', workRemaining: 9, idealBurn: 8 },
        { date: '2024-08-03', workRemaining: 4, idealBurn: 6 },
        // ...More data
    ];

    return (
        <div className="sprint-page container mx-auto p-4">
            <SprintPlanning capacity={40} assignedTasks={tasks} />
            <SprintBoard tasks={tasks} />
            <BurndownChart data={burndownData} />
        </div>
    );
};

export default SprintPage;
