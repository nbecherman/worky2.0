import React, { useState } from 'react';
import '../css/Horario.css';

const Horario = () => {
  const [selectedDay, setSelectedDay] = useState('Lunes');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [shiftDuration, setShiftDuration] = useState('');
  const [timeBetweenShifts, setTimeBetweenShifts] = useState('');
  const [schedule, setSchedule] = useState([]);

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const handleConfirm = () => {
    if (fromTime && toTime) {
      const updatedSchedule = schedule.filter(item => item.day !== selectedDay);
      updatedSchedule.push({ day: selectedDay, from: fromTime, to: toTime });
      setSchedule(updatedSchedule);
      setFromTime('');
      setToTime('');
    }
  };

  return (
    <div className="horario-container">
      <h1>Disponibilidad horaria</h1>
      <p>Seleccionar los horarios en los que ofreces tu servicio</p>
      <div className="dropdown">
        <button className="dropbtn">{selectedDay}</button>
        <div className="dropdown-content">
          {daysOfWeek.map((day) => (
            <button key={day} onClick={() => setSelectedDay(day)}>
              {day}
            </button>
          ))}
        </div>
      </div>
      <div className="time-inputs">
        <div>
          <label>Desde</label>
          <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
        </div>
        <div>
          <label>Hasta</label>
          <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} />
        </div>
      </div>
      <div className="shift-details">
        <div>
          <label>Duración del turno:</label>
          <input
            type="time"
            value={shiftDuration}
            onChange={(e) => setShiftDuration(e.target.value)}
          />
        </div>
        <div>
          <label>Tiempo entre turnos:</label>
          <input
            type="time"
            value={timeBetweenShifts}
            onChange={(e) => setTimeBetweenShifts(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleConfirm}>Confirmar</button>

      <div className="schedule-summary">
        <h2>Resumen de horarios confirmados</h2>
        <ul>
          {schedule.map((item, index) => (
            <li key={index}>
              <strong>{item.day}:</strong> {item.from} - {item.to}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Horario;

