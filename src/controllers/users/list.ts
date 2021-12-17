import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../typeorm/entities/users/User';
import { CustomError } from '../../utils/response/custom-error/CustomError';
import { customResult } from '../../utils/response/custom-success/customResult';

export const list = async (req: Request, res: Response|any, next: NextFunction) => {
  const userRepository = getRepository(User);
  try {
    const user = await userRepository.find({
      select : ["email","nip","role_name","username"],
      relations : ["profile","role","role.permission","department","module","emailBlast"]
    });
    // res.customSuccess(200, 'User found', user);
    return next(res.status(200).send((customResult(200,"success",user))));
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
