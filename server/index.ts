import express from 'express';

const app = express();

app.get('/', (res, req) => req.status(200).json({
  message: 'work lol'
}));

app.listen(5555, () => {
  console.log('work!!!');
})