# Express Template for Typescript

This template can be used to create a Express project using Typescript.

## Setup

```sh
# clone repository
git clone https://github.com/joelblaser/express-typescript-template.git
cd express-typescript-template

# install dependencies
npm install

# reinitialize git repository
rmdir .git
git init
```

## Getting Started

Start by creating a controller like the following example.

```ts
import { Controller, Get, Response as Res } from '@decorators/express';
import { Response } from 'express';

@Controller('/items')
export class ItemsController{
  constructor(private readonly itemsService: ItemsService){}

  @Get('/')
  async getItems(@Res() res: Response): Promise<void> {
    res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
  }
}
```

Add the controller to the application.

```ts
import express, { Express, Router } from 'express';
import { config } from './config';
import cors from 'cors';
import { attachControllers } from '@decorators/express';
import { ItemsController } from './controllers/items.controller';

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
    attachControllers(router, [ItemsController]);
    this.app.use('/api', router);
  }

  start(): void {
    this.app.listen(config.port, () => {
      console.log(`[Info] Server listening on http://localhost:${config.port}`);
    });
  }
}
```

Now start the application.

```sh
npm run start:dev
```

As soon as the server is started you can test the application by visiting http://localhost:3000/api/items.
You should get the following response.

```json
[
  {
    "id": 1,
    "name": "Item 1"
  },
  {
    "id": 2,
    "name": "Item 2"
  }
]
```
