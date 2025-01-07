import { useState } from 'react';
import './Calendar.css';

function Calendar() {
  const [events] = useState([
    {
      id: 1,
      title: 'Casamento Silva',
      date: '2024-03-15',
      time: '16:00',
      location: 'Espaço Green Garden'
    },
    {
      id: 2,
      title: 'Casamento Santos',
      date: '2024-03-22',
      time: '17:30',
      location: 'Villa Blue'
    }
  ]);

  return (
    <div className="calendar-container">
      <h1>Calendário de Eventos</h1>
      
      <div className="calendar-grid">
        <div className="calendar-header">
          <button className="calendar-nav">‹</button>
          <h2>Março 2024</h2>
          <button className="calendar-nav">›</button>
        </div>
        
        <div className="calendar-days">
          <div className="calendar-day-header">Dom</div>
          <div className="calendar-day-header">Seg</div>
          <div className="calendar-day-header">Ter</div>
          <div className="calendar-day-header">Qua</div>
          <div className="calendar-day-header">Qui</div>
          <div className="calendar-day-header">Sex</div>
          <div className="calendar-day-header">Sáb</div>
        </div>

        <div className="calendar-dates">
          {/* Calendar dates would be dynamically generated */}
        </div>
      </div>

      <div className="events-list">
        <h3>Próximos Eventos</h3>
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-date-badge">
              <div className="event-month">Mar</div>
              <div className="event-day">{event.date.split('-')[2]}</div>
            </div>
            <div className="event-details">
              <h4>{event.title}</h4>
              <p>{event.time} - {event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;