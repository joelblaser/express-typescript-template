import express, { Express, Router } from 'express';
import { config } from './config';
import cors from 'cors';
import { attachControllers } from '@decorators/express';

export class Application {
  app: Express;

  constructor() {
    this.app = express();
    this.setup();
  }

  setup(): void {
    this.app.use(cors());
    this.app.use(express.json());

    const router = Router();
    attachControllers(router, [
      /* Controllers */
    ]);
    this.app.use('/api', router);
  }

  start(): void {
    this.app.listen(config.port, () => {
      console.log(`[Info] Server listening on http://localhost:${config.port}`);
    });
  }
}
