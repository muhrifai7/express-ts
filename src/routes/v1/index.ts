import { Router } from 'express';

import auth from './auth';
import users from './users';
import profiles from './profiles';
import role from './role'
const router = Router();

router.use('/auth', auth);
router.use('/user', users);
router.use('/profile', profiles);
router.use('/role', role);

export default router;
