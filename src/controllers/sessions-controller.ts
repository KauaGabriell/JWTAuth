import { Request, Response } from 'express';
import { authConfig } from '../../configs/auth';
import { sign } from 'jsonwebtoken';
import { AppError } from '@/utils/AppError';

const fakeUser = {
  id: 1,
  username: 'Kauã',
  password: 'testando',
  role: 'client'
};

class SessionsController {
  async create(request: Request, response: Response) {
    const { username, password } = request.body;

    if (username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError('Usuário ou Senha Inválidos', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ role: fakeUser.role }, secret, {
      expiresIn,
      subject: String(fakeUser.id),
    });

    return response.status(201).json({ token });
  }
}

export { SessionsController };
