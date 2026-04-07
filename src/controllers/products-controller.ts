import { Request, Response } from 'express';

class ProductsController {
  async index(request: Request, response: Response) {
    return response.status(200).json({ message: 'Ok' });
  }

  async create(request: Request, response: Response) {
    return response.status(201).json({ message: 'Ok' });
  }
}

export { ProductsController };
