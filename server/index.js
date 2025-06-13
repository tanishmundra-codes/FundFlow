import express, { json, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import { default as connectDB } from './utils/db.js';

config();

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is started on port ${PORT}`);
});
