import AgentItem from './AgentItem'
import { dataAgents } from './data'
import React from 'react';

const AgentList = () => {  
  return (
    <div className='flex flex-col items-center'>
      <form>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataAgents.map((agent) => (
            <AgentItem key={agent.id} agents={agent} />
          ))}
        </div>
      </form>
    </div>
  )
}

export default AgentList
