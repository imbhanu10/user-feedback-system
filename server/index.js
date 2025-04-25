require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const feedbackRoutes = require('./routes/feedback');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/feedback', feedbackRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
