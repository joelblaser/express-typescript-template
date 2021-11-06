import dotenv from 'dotenv';
import { Config } from './config.model';

export const config = ((): Config => {
  dotenv.config();
  return {
    port: parseInt(process.env.PORT as string) || 5000
  };
})();
