import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeaders = request.headers.authorization;

  if (!authHeaders) throw new AppError('JWT não fornecido', 401);

  const token = authHeaders?.split(' ')[1];

  return next();
}
