import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

// routes
import authRoutes from './src/routes/authRoutes.js'
import contactRoutes from './src/routes/contactRoutes.js'

const app: Application = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
