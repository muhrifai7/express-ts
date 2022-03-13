import { User } from "../../typeorm/entities/users/User";
import { Profile } from "../../typeorm/entities/profile/Profile";
import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { CustomError } from "../../utils/response/custom-error/CustomError";

export const destroy = async (
  req: Request,
  res: Response | any,
  next: NextFunction
) => {
  const { id } = req.params;
  const userRepository = getRepository(User);
  const profileRepository = getRepository(Profile);
  try {
    // delete relation
    const profile = await profileRepository.findOne({
      where: {
        user_id: id,
      },
    });
    const user = await userRepository.findOne({
      where: { id },
      relations: ["profile"],
    });
    if (!user) {
      const customError = new CustomError(404, "General", "Not Found", [
        `User with id:${id} doesn't exists.`,
      ]);
      return next(customError);
    }
    await profileRepository.delete(id);
    await userRepository.delete(id);
    // res.customSuccess(200, 'User successfully deleted.', { id: user.id, name: user.name, email: user.email });
    return res.status(200).json({
      status: 200,
      message: "User successfully deleted.",
      responseData: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    const customeError = new CustomError(400, "Raw", "Error", null, error);
    return next(customeError);
  }
};
