import React from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = { fr };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Couleurs des kinés
const kineColors = {
  Alice: '#1abc9c',
  Paul: '#e74c3c',
  Bob: '#3498db'
};

function eventStyleGetter(event) {
  const backgroundColor = kineColors[event.kine] || '#95a5a6';
  return {
    style: {
      backgroundColor,
      color: 'white',
      borderRadius: '4px',
      border: 'none',
      padding: '2px',
    }
  };
}

export default function AppointmentsCalendar({ appointments }) {
  return (
    <div style={{ height: '100%', padding: '10px', display: 'flex', flexDirection: 'column' }}>
      
      {/* Légende en haut */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '10px', flexWrap: 'wrap' }}>
        {Object.entries(kineColors).map(([kine, color]) => (
          <div key={kine} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: color, borderRadius: '4px' }}></div>
            <span>{kine}</span>
          </div>
        ))}
      </div>

      {/* Calendrier */}
      <div style={{ flex: 1 }}>
        <Calendar
          localizer={localizer}
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          defaultView={Views.WEEK}
          views={['week', 'day']}
          step={60}        // 1h par créneau
          timeslots={1}
          style={{ height: '100%' }}
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </div>
  );
}
