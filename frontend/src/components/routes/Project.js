import React from 'react'
import NewProject from '../../NewProject'

const Project = () => {
  console.log("Project rendered");
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <NewProject />
    </div>
  )
}

export default Project