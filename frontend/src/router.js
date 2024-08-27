import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Dashboard from "./components/routes/Dashboard"
import Contact from "./components/routes/Contact"
import Agents from "./components/routes/Agents"
import Project from "./components/routes/Project"
import Candidates from "./components/routes/Candidates"

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/agents", element: <Agents />},
    {path: "/dashboard", element: <Dashboard />},
    {path: "/contact", element: <Contact />},
    {path: "/project", element: <Project />},
    {path: "/candidates", element: <Candidates />},
])

export default router