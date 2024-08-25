import React from 'react';

const SprintPlanning = ({ capacity, assignedTasks }) => {
    return (
        <div className="sprint-planning bg-gray-100 p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Task Planning</h2>
            <p>Team capacity: {capacity} hours</p>
            <p>Assigned tasks: {assignedTasks.length}</p>
        </div>
    );
};

export default SprintPlanning;
