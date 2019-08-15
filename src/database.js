const mongoose = require('mongoose');

mongoose.set('useFindAndModify');

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));