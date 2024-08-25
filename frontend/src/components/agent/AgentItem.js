import React from 'react';
import psychologist from '../../psychologist.png';

const AgentItem = ({ agents, isSelected, onToggle }) => {
  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img src={psychologist} alt="psychologist" className="mb-3"></img>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {agents.agent}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{agents.task}</p>
      <button
        type="button"
        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full
          ${isSelected ? 'bg-slate-300 dark:bg-blue-700 text-black' : 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'}
          ${isSelected ? 'focus:ring-blue-400 dark:focus:ring-blue-900' : 'focus:ring-blue-300 dark:focus:ring-blue-800'}`}
        onClick={onToggle}
      >
        {isSelected ? 'Selected' : 'Add'}
      </button>
    </div>
  );
};

export default AgentItem;