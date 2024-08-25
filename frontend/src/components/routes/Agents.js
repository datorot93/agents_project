import React from 'react'
import AgentList from '../agent/AgentList'

const Agents = () => {
  console.log("AgentList rendered");
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <AgentList />
    </div>
  )
}

export default Agents
