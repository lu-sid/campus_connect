import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD LAYOUT */}
        <Route path="/dashboard" element={<Dashboard />}>

          {/* Main dashboard */}
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />

          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />


          {/* Other sections */}
          <Route path="activity" element={<h1 className="text-2xl p-5">Recent Activity Page</h1>} />
          <Route path="events" element={<h1 className="text-2xl p-5">Upcoming Events</h1>} />
          <Route path="clubs" element={<h1 className="text-2xl p-5">Your Clubs</h1>} />
          <Route path="certificates" element={<h1 className="text-2xl p-5">Your Certificates</h1>} />
          <Route path="collabs" element={<h1 className="text-2xl p-5">Collab Requests</h1>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
