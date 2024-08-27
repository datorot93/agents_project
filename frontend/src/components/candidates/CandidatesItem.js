import candidate from '../../candidate.png';
import React from 'react';

const CandidatesItem = ({ candidates }) => {
  const handleSelect = (name, email) => {
    console.log(`Selected Candidate Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
      <div className="w-full flex justify-center mb-3">
        <img src={candidate} alt="candidate" className="w-3/5 h-auto" />
      </div>
      <h5 className="mb-2 text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
        {candidates.name}
      </h5>
      <h5 className="mb-2 text-lg text-center tracking-tight text-gray-900 dark:text-white">
        {candidates.position}
      </h5>
      <p className="mb-3 h-20 text-sm text-justify text-gray-500 dark:text-gray-400">{candidates.knowledge}</p>
      <p className="mb-3 text-sm text-center text-gray-500 dark:text-gray-400">{candidates.email}</p>
      <p className="mb-3 text-sm text-center text-gray-500 dark:text-gray-400">{candidates.linkedin_profile !== "Not Provided" ? <a href={candidates.linkedin_profile} target="_blank" rel="noopener noreferrer">LinkedIn</a> : "Not LinkedIn Profile"}</p>
      <button
        type="button"
        className={`text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full bg-gray-200
          'bg-slate-300' : 'bg-blue-700 hover:bg-blue-800 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700'
          'focus:ring-blue-400 dark:focus:ring-blue-900 focus:text-white' : 'focus:ring-blue-300 dark:focus:ring-blue-800 focus:text-white'`}
          onClick={() => handleSelect(candidates.name, candidates.email)}
      >
        Select
      </button>
    </div>
  );
};

export default CandidatesItem;
