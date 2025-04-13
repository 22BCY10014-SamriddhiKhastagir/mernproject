// components/Sidebar.jsx
import { LayoutDashboard, ClipboardList, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-6">ProjectHub</h2>
      <nav className="space-y-3">
        <SidebarItem to="/dashboard" icon={<LayoutDashboard />}>Dashboard</SidebarItem>
        <SidebarItem to="/tasks" icon={<ClipboardList />}>Tasks</SidebarItem>
        <SidebarItem to="/calendar" icon={<Calendar />}>Calendar</SidebarItem>
        <SidebarItem to="/settings" icon={<Settings />}>Settings</SidebarItem>
      </nav>
    </div>
  );
}

function SidebarItem({ to, icon, children }) {
  return (
    <Link to={to} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700">
      <span>{icon}</span>
      <span>{children}</span>
    </Link>
  );
}
