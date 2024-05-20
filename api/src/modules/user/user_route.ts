//import express from 'express';
import { userController } from './user_bootstrap';
import { Router } from '@express-ts/core';

//const router = express.Router();

const router = new Router();

router.get('/', userController.getAll);
router.get('/:id', userController.get);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
// router.route('/').get(userController.getAll);
// router.route('/:id').get(userController.get);
// router.route('/').post(userController.create);
// router.route('/:id').put(userController.update);
// router.route('/:id').delete(userController.delete);

export default router.instance;
