import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const accessTokenSecret = 'pleaseGiveMeAJobOffer';

export function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err || !(user && user.role)) {
        return res.sendStatus(403);
      }
      next();
      return undefined;
    });
  } else {
    res.sendStatus(401);
  }
}
