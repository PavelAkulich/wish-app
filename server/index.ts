import express from 'express';

const app = express();

app.get('/', (res, req) => req.status(200).send('server work'));

app.listen(5555, () => {
  console.log('work!!!');
})