import { Router } from 'express';

import { StatusCodes } from '../common';
import { getToken } from './repository';
import { User } from './user';

const router = Router();

router.post('/', async (req, res) => {
  // Read username and password from request body

  const { username, password } = req.body as User;
  try {
    const accessToken = await getToken(username, password);
    return res.json(accessToken);
  } catch (e) {
    return res.status(StatusCodes.NotFound).send(e);
  }
});

export default router;
