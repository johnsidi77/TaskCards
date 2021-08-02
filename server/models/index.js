const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/tasks', {
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify: false
});