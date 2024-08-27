import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Agents from "./components/routes/Agents"

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/agents", element: <Agents />},
])

export default router