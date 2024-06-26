import { UserRepository } from './user_repository';
import { BaseController } from '@express-ts/core';
import { z } from 'zod';
import { route } from './user_bootstrap';

export class UserController extends BaseController {
  constructor(protected userRepository: UserRepository) {
    super();
  }
  /**
   * Read a list of users
   */

  getAll = route.get('/').handler(async () => {
    return {
      data: await this.userRepository.getAll(),
    };
  });

  /**
   * Read a single user
   */
  get = route
    .get('/:id')
    .params(z.object({ id: z.string() }))
    .handler(async ({ params }) => {
      const data = await this.userRepository.get(params.id);
      if (!data) throw new Error('User not found');
      return {
        data,
      };
    });

  /**
   * Create a new user
   */
  create = route
    .post('/')
    .body(
      z.object({
        username: z.string(),
        password: z.string(),
        email: z.string().email(),
      })
    )
    .handler(async ({ body }) => {
      return {
        data: await this.userRepository.create(body),
      };
    });

  /**
   * Update a user
   */
  update = route
    .put('/:id')
    .params(z.object({ id: z.string() }))
    .body(
      z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .handler(async ({ params, body }) => {
      await this.userRepository.update({
        ...body,
        id: params.id,
      });
      return {
        message: 'User updated successfully',
      };
    });

  /**
   * Delete a user
   */
  delete = route
    .delete('/:id')
    .params(z.object({ id: z.string() }))
    .handler(async ({ params }) => {
      await this.userRepository.delete(params.id);
      return {
        message: 'User deleted successfully',
      };
    });
}
