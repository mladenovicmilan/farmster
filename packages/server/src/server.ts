import 'dotenv/config';
import express, { type Express, type Response, type Request } from 'express';
import connectDB from './config/db';
import helmet from 'helmet';
import authRoutes from './api/routes/authRoutes';
import cors from 'cors';
import corsConfig from './config/corsConfig';
import rateLimit from 'express-rate-limit';

const app: Express = express();
const PORT = Number(process.env.PORT ?? 3000);
const MONGO_URI = process.env.MONGO_URI; // or rename everything to MONGODB_URI

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });

app.use(helmet());
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(express.static('public'));

if (MONGO_URI) {
  connectDB().catch((err) => console.error('MongoDB connection error:', err));
} else {
  console.warn('No MONGO_URI set — skipping DB connection');
}

app.get('/', (_req: Request, res: Response) => res.send('Hello World!'));

app.use('/api/auth', authRoutes);

// Basic error handler
app.use((err: unknown, _req: Request, res: Response) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}! nice!`);
});
