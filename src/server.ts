import express from 'express';
import router from './router';
import connectDB from './db/mongoose';
const app = express();
app.use(express.json())
connectDB();
app.use(router);

export default app;