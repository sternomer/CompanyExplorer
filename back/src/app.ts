import express, { Request, Response } from 'express';
import morgan from 'morgan';
import router from './express/routers/main.route';
import cors from 'cors';

export const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', router);

app.use('*', (_req: Request, res: Response) => {
  res.status(404).send('Invalid Route');
});

app.use((err: any, _req: any, res: any, _next: any) => {
  res.status(500).send(err.message);
});

export default app;
