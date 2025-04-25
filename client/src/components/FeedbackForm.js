import React, { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm() {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    feedback: '',
    category: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback', form);
      alert('Feedback submitted!');
      setForm({ userName: '', email: '', feedback: '', category: '' });
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        type="text"
        placeholder="Name"
        value={form.userName}
        onChange={e => setForm({ ...form, userName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Feedback"
        value={form.feedback}
        onChange={e => setForm({ ...form, feedback: e.target.value })}
        required
      />
      <select
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Category</option>
        <option value="Bug">Bug</option>
        <option value="Feature Request">Feature Request</option>
        <option value="Suggestion">Suggestion</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
