const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  'useNewUrlParser': true,
  'useFindAndModify': false,
  'useCreateIndex': true,
  'useUnifiedTopology': true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));


module.exports = {
  Song: require('./Song'),
};
