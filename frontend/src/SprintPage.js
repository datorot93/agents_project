import React, { useState } from 'react';
import SprintBoard from './SprintBoard';
import SprintPlanning from './SprintPlanning';
import BurndownChart from './BurndownChart';

const SprintPage = () => {
    const [tasks, setTasks] = useState([
        { id: '1', title: 'Task 1', status: 'ToDo', description: 'Task description 1', assignedTo: 'Juan' },
        { id: '2', title: 'Task 2', status: 'ToDo', description: 'Task description 2', assignedTo: 'Maria' },
        { id: '3', title: 'Task 3', status: 'InProgress', description: 'Task description 3', assignedTo: 'Carlos' },
        { id: '4', title: 'Task 4', status: 'Done', description: 'Task description 4', assignedTo: 'Carlos' }
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
