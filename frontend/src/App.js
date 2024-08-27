
import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import { FaBars } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HRChat from './HRChat';
import HomePage from './HomePage';
import NewProject from './NewProject';
import Dashboard from "./components/routes/Dashboard"
import Contact from "./components/routes/Contact"
import Agents from "./components/routes/Agents"
import SprintPage from "./SprintPage"
import Project from "./components/routes/Project"
import Candidates from "./components/routes/Candidates"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="h-screen flex">
        {/* Panel lateral */}
        <div 
          className={`fixed top-0 left-0 h-full transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} bg-gray-200`}
          style={{ width: '16rem' }}
        >
          <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>

        {/* Contenido principal */}
        <div className={`flex-1 bg-gray-100 relative transition-all duration-300 ${isSidebarOpen ? 'ml-64' : ''}`}>
          <div className={`fixed top-4 left-4 z-50`}>
            <FaBars 
              className="text-3xl cursor-pointer"
              onClick={() => setIsSidebarOpen(prevState => !prevState)} 
            />
          </div>

          {/* Contenido principal */}
          {/*<div className="flex justify-center items-center h-full">
            <div className="text-center">
              <img src={logo} alt="Logo" className="w-42 h-32 mx-auto mb-4"/>
              <h1 className="text-2xl font-bold">ML Engineer Test</h1>
            </div>
          </div>*/}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/hr-agent" element={<HRChat />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sprint" element={<SprintPage />} />
            <Route path="/project" element={<Project />} />
            <Route path="/candidates" element={<Candidates />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
};

export default App;

