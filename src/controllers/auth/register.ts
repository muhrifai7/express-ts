import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../typeorm/entities/users/User';
import { Profile } from '../../typeorm/entities/profile/Profile';
import { CustomError } from '../../utils/response/custom-error/CustomError';
import { profile } from 'console';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password,role_name } = req.body;

  const userRepository = getRepository(User);
  const profileRepository = getRepository(Profile)
  try {
    const user = await userRepository.findOne({ where: { email } });

    if (user) {
      const customError = new CustomError(400, 'General', 'User already exists', [
        `Email '${user.email}' already exists`,
      ]);
      return next(customError);
    }

    try {
      const newUser = new User();
      newUser.email = email;
      newUser.role_name = role_name;
      newUser.role_name = role_name;
      newUser.password = password;
      newUser.hashPassword();
      const dataUser = await userRepository.save(newUser);
      await profileRepository.save({
        user_id : dataUser.id
      })

      // res.customSuccess(200, 'User successfully created.');
      return res.status(200).json({status: 200,message :"User successfully created."});
    } catch (err) {
      const customError = new CustomError(400, 'Raw', `User '${email}' can't be created`, null, err);
      return next(customError);
    }
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
