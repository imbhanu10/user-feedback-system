import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/feedback')
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  const filtered = filter ? data.filter(d => d.category === filter) : data;

  return (
    <div className="dashboard-card">
      <h2>Feedback Dashboard</h2>
      <select onChange={e => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Bug">Bug</option>
        <option value="Feature Request">Feature Request</option>
        <option value="Suggestion">Suggestion</option>
      </select>
      <ul>
        {filtered.map((f, i) => (
          <li key={i}>
            <strong>{f.userName}</strong>: "{f.feedback}" ({f.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
