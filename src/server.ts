import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
