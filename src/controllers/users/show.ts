import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../typeorm/entities/users/User';
import { Role } from '../../typeorm/entities/roles/Role';
import { CustomError } from '../../utils/response/custom-error/CustomError';
import { customResult } from '../../utils/response/custom-success/customResult';

export const show = async (req: Request, res: Response|any, next: NextFunction) => {
  const id = req.params.id;

  const userRepository = getRepository(User);
  const roleRepository = getRepository(Role);
  try {
    const user = await userRepository.findOne(id, {
      relations : ["profile","department","module","emailBlast"]
    });

    const role = await roleRepository.findOne({
      name : user?.role_name
    },{
      select : ["id","name","description"],
      relations : ["permission"]
    });

    console.log(user)

    const newUser = {
      ...user,
      role
    }

    if (!newUser) {
      const customError = new CustomError(404, 'General', `User with id:${id} not found.`, ['User not found.']);
      return next(customError);
    }
    // res.customSuccess(200, 'User found', user);
    return next(res.status(200).send((customResult(200,"success",newUser))));
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
