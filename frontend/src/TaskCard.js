import React from 'react';

const TaskCard = ({ task }) => {
    return (
        <div className="task-card bg-white p-3 rounded shadow mb-3">
            <h3 className="font-medium">{task.title}</h3>
            <p>{task.description}</p>
            <p>Asignado a: {task.assignedTo}</p>
        </div>
    );
};

export default TaskCard;
