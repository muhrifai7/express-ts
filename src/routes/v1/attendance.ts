import { Router } from 'express';

import { list,create,show ,destroy,edit,create_from_scan} from "../../controllers/attendance";
import { checkJwt } from '../../middleware/checkJwt';
import { checkRole } from '../../middleware/checkRole';
import { validatorEdit } from '../../middleware/validation/users';

const router = Router();

router.get('/',list);
// absence scan
router.get('/_scan',create_from_scan);

router.post('/',[checkJwt, checkRole(['ADMINISTRATOR','MANAGER'], true)],create);

router.get('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true)], show);

router.patch('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true), validatorEdit], edit);

router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true)], destroy);

export default router;
