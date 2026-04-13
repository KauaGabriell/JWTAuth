import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';
import { authConfig } from '../configs/auth';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeaders = request.headers.authorization;

  if (!authHeaders) throw new AppError('JWT não fornecido', 401);

  const token = authHeaders?.split(' ')[1];
  const { sub: user_id } = verify(token, authConfig.jwt.secret);

  request.user = {
    id: String(user_id),
  };
  return next();
}
