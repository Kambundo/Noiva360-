import { useState, useEffect } from 'react';
import { FaCalendar, FaUsers, FaChartBar, FaBell } from 'react-icons/fa';
import './Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({
    events: 0,
    clients: 0,
    revenue: 0,
    notifications: 0
  });

  useEffect(() => {
    // Simulação de dados
    setStats({
      events: 12,
      clients: 45,
      revenue: 15000,
      notifications: 3
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FaCalendar />
          </div>
          <div className="stat-info">
            <h3>Eventos</h3>
            <p>{stats.events}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaUsers />
          </div>
          <div className="stat-info">
            <h3>Clientes</h3>
            <p>{stats.clients}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaChartBar />
          </div>
          <div className="stat-info">
            <h3>Receita</h3>
            <p>R$ {stats.revenue}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaBell />
          </div>
          <div className="stat-info">
            <h3>Notificações</h3>
            <p>{stats.notifications}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Próximos Eventos</h2>
          <div className="event-list">
            <div className="event-item">
              <div className="event-date">15 Mar</div>
              <div className="event-details">
                <h4>Casamento Silva</h4>
                <p>Local: Espaço Green Garden</p>
              </div>
            </div>
            <div className="event-item">
              <div className="event-date">22 Mar</div>
              <div className="event-details">
                <h4>Casamento Santos</h4>
                <p>Local: Villa Blue</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Atividades Recentes</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">📝</div>
              <div className="activity-details">
                <p>Novo orçamento enviado</p>
                <small>Há 2 horas</small>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">✅</div>
              <div className="activity-details">
                <p>Contrato assinado</p>
                <small>Há 5 horas</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;