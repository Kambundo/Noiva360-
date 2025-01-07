import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendar, FaUsers, FaCog, FaBox } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Noiva360º</h2>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'active' : ''}>
          <FaHome /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/calendar" className={({ isActive }) => isActive ? 'active' : ''}>
          <FaCalendar /> <span>Calendário</span>
        </NavLink>
        <NavLink to="/dashboard/clients" className={({ isActive }) => isActive ? 'active' : ''}>
          <FaUsers /> <span>Clientes</span>
        </NavLink>
        <NavLink to="/dashboard/services" className={({ isActive }) => isActive ? 'active' : ''}>
          <FaBox /> <span>Serviços</span>
        </NavLink>
        <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? 'active' : ''}>
          <FaCog /> <span>Configurações</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div className="user-details">
            <p className="user-name">João Silva</p>
            <p className="user-role">Fornecedor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;