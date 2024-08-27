import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Dashboard from "./components/routes/Dashboard"
import Contact from "./components/routes/Contact"
import Agents from "./components/routes/Agents"
import Project from "./components/routes/Project"

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/agents", element: <Agents />},
    {path: "/dashboard", element: <Dashboard />},
    {path: "/contact", element: <Contact />},
    {path: "/project", element: <Project />},
])

export default router