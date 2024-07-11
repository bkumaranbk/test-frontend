import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [calendarId, setCalendarId] = useState('');
  const [timeMin, setTimeMin] = useState('');
  const [timeMax, setTimeMax] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ calendarId, timeMin, timeMax });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Calendar ID:
        <input type="text" value={calendarId} onChange={(e) => setCalendarId(e.target.value)} />
      </label>
      <label>
        Time Min:
        <input type="datetime-local" value={timeMin} onChange={(e) => setTimeMin(e.target.value)} />
      </label>
      <label>
        Time Max:
        <input type="datetime-local" value={timeMax} onChange={(e) => setTimeMax(e.target.value)} />
      </label>
      <button type="submit">Fetch Busy Intervals</button>
    </form>
  );
};

export default InputForm;
