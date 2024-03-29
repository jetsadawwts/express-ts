import { Database } from '@express-ts/core';
import { UserController } from './user_controller';
import { UserRespository } from './user_repository';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from './user_model';

const db = new Database<UserModel>('users', {
  defaultData: [
    {
      id: uuidv4(),
      username: 'firstuser',
      password: 'password',
      email: 'first@email.com',
    },
  ],
});
const userRespository = new UserRespository(db);
export const userController = new UserController(userRespository);
