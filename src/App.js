import React, { useState } from 'react';
import InputForm from './components/InputForm';

const App = () => {
  const [busyIntervals, setBusyIntervals] = useState([]);

  const fetchBusyIntervals = async ({ calendarId, timeMin, timeMax }) => {
    try {
      const response = await fetch(`http://localhost:8000/api/freebusy?calendarId=${calendarId}&timeMin=${timeMin}&timeMax=${timeMax}`);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setBusyIntervals(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Fetch Busy Intervals</h1>
      <InputForm onSubmit={fetchBusyIntervals} />
      <div>
        <h2>Busy Intervals</h2>
        <ul>
          {busyIntervals.map((interval, index) => (
            <li key={index}>{interval.start} - {interval.end}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
