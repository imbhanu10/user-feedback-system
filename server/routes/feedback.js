const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST /feedback
router.post('/', async (req, res, next) => {
  try {
    const fb = new Feedback(req.body);
    const saved = await fb.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

// GET /feedback
router.get('/', async (req, res, next) => {
  try {
    const list = await Feedback.find().sort({ timestamp: -1 });
    res.json(list);
  } catch (err) {
    next(err);
  }
});

// DELETE /feedback/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
});

// GET /feedback/stats
router.get('/stats', async (req, res, next) => {
  try {
    const stats = await Feedback.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    res.json(stats);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
