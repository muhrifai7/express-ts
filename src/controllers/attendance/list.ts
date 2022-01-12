import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Department } from '../../typeorm/entities/department/Department';
import { CustomError } from '../../utils/response/custom-error/CustomError';
import { customResult } from '../../utils/response/custom-success/customResult';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const departmentRepository = getRepository(Department);
  try {
    const department = await departmentRepository.find({
      select: ['id', 'name', 'description'],
      skip: 5,
      take: 10,
      cache: true
    });
    return next(res.status(200).send((customResult(200,"success",department))));
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of users.`, null, err);
    return next(customError);
  }
};
