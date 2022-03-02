import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../typeorm/entities/users/User';
import { CustomError } from '../../utils/response/custom-error/CustomError';
import { customResult } from '../../utils/response/custom-success/customResult';

export const show = async (req: Request, res: Response|any, next: NextFunction) => {
  const {id} = req.jwtPayload;
  console.log('result  =>',req.jwtPayload)
  const userRepository = getRepository(User);
  try {
    const user = await userRepository.findOne(id, {
      select : ["email","nip","role_name","username","isActive"],
      relations : ["profile","role","department","module","emailBlast","salaries"]
    });
    // res.customSuccess(200, 'User found', user);
    return next(res.status(200).send((customResult(200,"success",user))));
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
