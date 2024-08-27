import React from 'react'
import CandidatesList from '../candidates/CandidatesList'

const Candidates = () => {
  console.log("CandidatesList rendered");
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <CandidatesList />
    </div>
  )
}

export default Candidates
