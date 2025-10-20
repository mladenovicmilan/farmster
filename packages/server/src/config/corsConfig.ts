const corsConfig = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization', 'application/json'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

export default corsConfig;
