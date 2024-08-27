import psychologist from '../../psychologist.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AgentItem = ({ agents }) => {
  const navigate = useNavigate();

  const handleSelect = (id, name) => {
    console.log(`Selected Agent ID: ${id}, Name: ${name}`);

    navigate('/Project');
  };

  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img src={psychologist} alt="psychologist" className="mb-3"></img>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {agents.agent}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{agents.task}</p>
      <button
        type="button"
        className={`text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full bg-gray-200
          'bg-slate-300' : 'bg-blue-700 hover:bg-blue-800 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700'
          'focus:ring-blue-400 dark:focus:ring-blue-900 focus:text-white' : 'focus:ring-blue-300 dark:focus:ring-blue-800 focus:text-white'`}
          onClick={() => handleSelect(agents.id, agents.agent)}
      >
        Select
      </button>
    </div>
  );
};

export default AgentItem;
