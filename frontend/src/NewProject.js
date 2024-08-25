import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectDescription = () => {
    const [projectTitle, setProjectTitle] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        const data = {
            'title': projectTitle,
            'description': projectDescription
        }
        console.log(data); // Form data object can be used here (e.g., send it to an API)
        navigate('/Agents')
    }
    
  return (
    <div className="flex justify-center items-center h-screen" onSubmit={handleForm}>
        <form className="w-full max-w-[600px] mx-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-5xl font-extrabold dark:text-white mb-10">Project Description</h1>
            <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Title</label>
                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setProjectTitle(e.target.value)} value={projectTitle}></input>
            </div>
            <div className="mb-5">
                <label
                    htmlFor="large-input"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                    Project Description
                </label>
                <textarea
                    id="large-input"
                    className="block w-full h-40 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg 
                    focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Project's objective" onChange={(e) => setProjectDescription(e.target.value)} value={projectDescription}>
                </textarea>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}

export default ProjectDescription