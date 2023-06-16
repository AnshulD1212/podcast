import express from 'express';
import { handleErrors } from '../helpers/handleErrors';
import { getUsersController } from './users.controllers';

export const router = express.Router();

router.get('/', handleErrors(getUsersController));

export const usersRoutes = router;
