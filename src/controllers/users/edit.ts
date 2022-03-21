import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { TU_USER } from "../../typeorm/entities/users/User";
import { Profile } from "../../typeorm/entities/profile/Profile";
import { CustomError } from "../../utils/response/custom-error/CustomError";
import { customResult } from "../../utils/response/custom-success/customResult";
import { Salaries } from "../../typeorm/entities/salaries/Salaries";

// edit by id
export const edit = async (
  req: Request,
  res: Response | any,
  next: NextFunction
) => {
  let { id } = req.params;
  let {
    username,
    nip,
    roleName,
    isActive,
    basicSalary,
    departmentId,
    dataProfile,
    salaries,
  } = req.body;
  let {
    placeOfBirth,
    dateOfBirth,
    gender,
    religion,
    academic,
    title,
    address,
    city,
    country,
    postalCode,
    photo,
  } = dataProfile;
  const userRepository = getRepository(TU_USER);
  const profileRepositoy = getRepository(Profile);
  const salariesRepository = getRepository(Salaries);
  try {
    let user = await userRepository.findOne({ where: { id } });
    if (!user) {
      const customError = new CustomError(
        404,
        "General",
        `User with id:${id} not found.`,
        ["User not found."]
      );
      return next(customError);
    }

    // optional;
    const newSalaries = {
      ...(salaries.overTimePay && { overtime_pay: salaries.overTimePay }),
      ...(salaries.allowance && { allowance: salaries.allowance }),
      ...(salaries.additional && { additional: salaries.additional }),
      ...(id && { user_id: id }),
    };
    const newProfile = {
      ...(placeOfBirth && {
        placeOfBirth: placeOfBirth,
      }),
      ...(dateOfBirth && { dateOfBirth: dateOfBirth }),
      ...(gender && { gender: gender }),
      ...(religion && { religion: religion }),
      ...(academic && { academic: academic }),
      ...(title && { title: title }),
      ...(address && { address: address }),
      ...(city && { city: city }),
      ...(country && { country: country }),
      ...(postalCode && {
        postalCode: postalCode,
      }),
      ...(photo && { photo: photo }),
    };
    try {
      await userRepository.update(id, {
        ...(username && { username: username }),
        ...(nip && !user.nip && { nip: nip }),
        ...(isActive && { isActive: isActive }),
        ...(roleName && { role_name: roleName }),
        ...(basicSalary && { basicSalary: basicSalary }),
        ...(departmentId && { department_id: departmentId }),
      });
      await profileRepositoy.update(id, newProfile);
      await salariesRepository.update(id, newSalaries);
      // res.customSuccess(200, 'User successfully saved.');
      return next(
        res.status(200).send(customResult(200, "User successfully updated"))
      );
    } catch (err) {
      const customError = new CustomError(
        409,
        "Raw",
        `User '${user.email}' can't be saved.`,
        null,
        err
      );
      return next(customError);
    }
  } catch (error) {
    const customeError = new CustomError(400, "Raw", "Error", null, error);
    return next(customeError);
  }
};
