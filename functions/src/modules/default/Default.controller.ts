import { Request, Response } from 'express';

class DefaultController {
  ok(request: Request, response: Response) {
    return response.status(200).send('ok');
  }
}

export { DefaultController };
