import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
