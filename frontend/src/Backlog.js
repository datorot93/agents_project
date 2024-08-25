import React from 'react';

const Backlog = ({ tasks, onAddToSprint }) => {
    console.log(tasks);
    return (
        <div className="backlog bg-gray-100 p-4 rounded shadow-md mt-8">
            <h2 className="text-xl font-semibold mb-4">Backlog</h2>
            {tasks.map((task, index) => (
                <div key={index} className="task-card bg-white p-3 rounded shadow mb-3">
                    <h3 className="font-medium">{task.title}</h3>
                    <button
                        onClick={() => onAddToSprint(task.id)}
                        className="text-blue-500 hover:underline"
                    >
                        Add to Sprint
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Backlog;
