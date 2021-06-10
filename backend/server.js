import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';

import productsRoutes from './routes/productsRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('App is runnig...');
});

app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold,
  ),
);
