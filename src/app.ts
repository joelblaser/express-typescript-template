import express from 'express';
import { config } from './config/config';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.listen(config.port, () => {
  console.log(`[Info] Server listening on http://localhost:${config.port}`);
});
