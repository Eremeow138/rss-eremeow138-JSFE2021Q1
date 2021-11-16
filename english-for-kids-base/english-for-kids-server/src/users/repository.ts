import jwt from 'jsonwebtoken';
import { User } from './user';

const users: User[] = [
  {
    username: 'admin',
    password: 'admin',
    role: 'admin',
  },
];
const accessTokenSecret = 'pleaseGiveMeAJobOffer';
export function getToken(username: string, password: string): Promise<string> {
  // Filter user from the users array by username and password
  const user = users.find(u => {
    return u.username === username && u.password === password;
  });

  if (!user) {
    return Promise.reject(new Error(`Username or password incorrect`));
  }
  // Generate an access token
  const accessToken = jwt.sign(
    { username: user.username, role: user.role },
    accessTokenSecret,
  );
  return Promise.resolve<string>(accessToken);
}
