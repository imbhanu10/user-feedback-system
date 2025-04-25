const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  userName: { type: String, required: true, minlength: 2, maxlength: 50 },
  email: { type: String, required: true, match: /.+@.+\..+/ },
  feedback: { type: String, required: true, minlength: 5, maxlength: 500 },
  category: { 
    type: String, 
    required: true, 
    enum: ['Bug', 'Feature Request', 'Suggestion'] 
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
