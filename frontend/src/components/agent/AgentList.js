import { useState } from 'react'
import AgentItem from './AgentItem'
import { dataAgents } from './data'

const AgentList = () => {
  const [selectedAgents, setSelectedAgents] = useState({});

  const toggleAgentSelection = (id) => {
    setSelectedAgents(prevSelectedAgents => ({
      ...prevSelectedAgents,
      [id]: !prevSelectedAgents[id],
    }));
  };

  const handleStoreSelection = () => {
    const selected = Object.keys(selectedAgents).filter(id => selectedAgents[id]);
    const selectedAgentsObject = selected.map(id => dataAgents.find(agent => agent.id.toString() === id));
    console.log('Selected Agents:', selectedAgentsObject);
  };
  return (
    <div className='flex flex-col items-center'>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataAgents.map((agent) => (
            <AgentItem key={agent.id} agents={agent} isSelected={!!selectedAgents[agent.id]} onToggle={() => toggleAgentSelection(agent.id)}/>
        ))}
        </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 w-full mb-8 max-w-[600px]"
        onClick={handleStoreSelection}
      >
        Store Selected Agents
      </button>
    </div>
  )
}

export default AgentList
