const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect(`mongodb://localhost/bancodedados`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.info('Database connection established'))
.catch(err => console.error(err));