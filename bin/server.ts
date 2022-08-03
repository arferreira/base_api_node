import express from 'express';
// import router from '../app/routes/users.js';
const app = express();


app.get('/', (req, res) => {
  return res.json({message: 'api runnins'});
});

app.listen(3333);