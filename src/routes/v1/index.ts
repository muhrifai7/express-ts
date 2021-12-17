import { Router } from 'express';

import auth from './auth';
import users from './users';
import role from './role';
import department from './department'
const router = Router();

router.use('/auth', auth);
router.use('/user', users);
router.use('/role', role);
router.use('/department', department);

export default router;
