import CandidatesItem from './CandidatesItem'
import { dataCandidates } from './dataCandidate'
import React from 'react';

const CandidatesList = () => {  
  if (!dataCandidates || dataCandidates.length === 0 || !dataCandidates[0].candidates) {
    return <div>No hay candidatos disponibles</div>;
  }

  const candidates = dataCandidates[0].candidates;

  return (
    <div className='flex flex-col items-center'>
      <form>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {candidates.map((candidate) => (
            <CandidatesItem key={candidate.name} candidates={candidate} />
          ))}
        </div>
      </form>
    </div>
  )
}

export default CandidatesList
