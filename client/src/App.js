import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="title">User Feedback System</h1>
      <FeedbackForm />
      <hr />
      <Dashboard />
    </div>
  );
}

export default App;
