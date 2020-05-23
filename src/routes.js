import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Julio Marvim',
    email: 'juliomarvim@yahoo.com.br',
    password_hash: '1235689900',
  });

  return res.json(user);
});

export default routes;
