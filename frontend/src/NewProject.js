import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectDescription = () => {
    const [projectTitle, setProjectTitle] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectRequirements, setProjectRequirements] = useState('')
    const [projectResponsabilities, setProjectResponsabilities] = useState('')
    const [projectPreferredQualifications, setProjectPreferredQualifications] = useState('')
    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        const data = {
            'title': projectTitle,
            'description': projectDescription,
            'requirements': projectRequirements,
            'responsabilities': projectResponsabilities,
            'preferredQualifications': projectPreferredQualifications
        }
        console.log(data); // Form data object can be used here (e.g., send it to an API)
        navigate('/Agents')
    }
    
  return (
    <div className="p-5" onSubmit={handleForm}>
        <form className="w-full max-w-[600px] mx-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-5xl font-extrabold dark:text-white mb-10">Task Description</h1>
            <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setProjectTitle(e.target.value)} value={projectTitle}
                placeholder="Python and React JS Engineer"></input>
            </div>
            <div className="mb-5">
                <label
                    htmlFor="large-input"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                    Job Description
                </label>
                <textarea
                    id="large-input"
                    className="block w-full height-6rem p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm 
                    focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="We are seeking a skilled Python and React JS engineer to join our team." onChange={(e) => setProjectDescription(e.target.value)} value={projectDescription}>
                </textarea>
            </div>
            <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requirements</label>
                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setProjectRequirements(e.target.value)} value={projectRequirements}
                placeholder="Write clean, maintainable, and efficient code; Ensure application performance"></input>
            </div>
            <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsabilities</label>
                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setProjectResponsabilities(e.target.value)} value={projectResponsabilities}
                placeholder="Proven experience with Python and React; Understanding of OOP"></input>
            </div>
            <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred Qualifications</label>
                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setProjectPreferredQualifications(e.target.value)} value={projectPreferredQualifications}
                placeholder="Experience with cloud services (AWS, Google Cloud, or Azure); Fluent english"></input>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}

export default ProjectDescription