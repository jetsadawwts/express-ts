import { Database } from '@express-ts/core';
import { UserModel } from './user_model';

export class UserRespository {
  constructor(protected db: Database<UserModel>) {}

  async getAll() {
    return this.db.readAll();
  }
}
