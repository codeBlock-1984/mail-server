import '@babel/polyfill';
import express from 'express';
import cors  from 'cors';
import router from './routers';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Mail Server!'
  });
});

app.get('/*', (req, res) => {
  res.status(404).json({
    message: 'Request not found!'
  });
});

app.listen(port, () => {
  console.log(`Mail Server listening on port ${port}`);
});
