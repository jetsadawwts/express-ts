//import express from 'express';
import { userController } from './user_bootstrap';
import { Router } from '@express-ts/core';

const router = new Router();

export default router.registerClassRoutes(userController).instance;
