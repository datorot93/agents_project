import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SprintBoard = ({ tasks }) => {
    return (
        <DragDropContext >
            <div className="board grid grid-cols-3 gap-4">
                {['ToDo', 'InProgress', 'Done'].map((status) => (
                    <Droppable droppableId={status} key={status}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="column bg-gray-100 p-4 rounded shadow-md"
                            >
                                <h2 className="text-xl font-semibold mb-4">{status.replace(/([A-Z])/g, ' $1').trim()}</h2>
                                {tasks
                                    .filter(task => task.status === status)
                                    .map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="task-card bg-white p-3 rounded shadow mb-3"
                                                >
                                                    <h3 className="font-medium">{task.title}</h3>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default SprintBoard;
