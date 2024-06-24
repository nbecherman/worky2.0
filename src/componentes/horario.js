import React, { useState } from 'react';

const Horario = () => {
  const [selectedDay, setSelectedDay] = useState('Lunes');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [shiftDuration, setShiftDuration] = useState('');
  const [timeBetweenShifts, setTimeBetweenShifts] = useState('');

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <div className="App">
      <h1>Disponibilidad horaria</h1>
      <p>Sele   cionar los horarios en los que ofreces tu servicio</p>
      <div className="dropdown">
        <button className="dropbtn">{selectedDay}</button>
        <div className="dropdown-content">
          {daysOfWeek.map((day) => (
            <a key={day} onClick={() => setSelectedDay(day)}>
              {day}
            </a>
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
      <button className="confirm-btn">Confirmar</button>
    </div>
  );
}

export default Horario;
