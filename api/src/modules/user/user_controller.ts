import type { Request, Response } from 'express';
import { UserRespository } from './user_repository';

export class UserController {
  constructor(public userRepository: UserRespository) {}

  async getAll(req: Request, res: Response) {
    return res.json(await this.userRepository.getAll());
  }
}
