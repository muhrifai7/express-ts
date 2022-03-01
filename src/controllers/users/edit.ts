import { Request,Response,NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../typeorm/entities/users/User';
import { Profile } from '../../typeorm/entities/profile/Profile';
import { CustomError } from '../../utils/response/custom-error/CustomError';
import { customResult } from '../../utils/response/custom-success/customResult';
 
export const edit = async(req:Request,res:Response|any,next:NextFunction) => {
    let { id } = req.params;
    let { username,nip,roleName,isActive,dataProfile,basicSalary } = req.body;
    let { placeOfBirth,dateOfBirth,gender,religion,academic,title,address,city,country,postalCode,photo} = dataProfile;
    const userRepository = getRepository(User);
    const profileRepositoy = getRepository(Profile)
    try {
        const user = await userRepository.findOne({where : {id}});
        if(!user){
            const customError = new CustomError(404, 'General', `User with id:${id} not found.`, ['User not found.']);
            return next(customError);
        }
        const profile = await profileRepositoy.findOne({where : {user_id : user.id}})
        if(!profile){
            const customError = new CustomError(404, 'General', `User with id:${id} not found.`, ['User not found.']);
            return next(customError);
        }
        const newUser = {
            ...user,
            username,
            isActive,
            nip,
            roleName,
            basicSalary
        }
        const newProfile = {
            ...profile,
            placeOfBirth : placeOfBirth ? placeOfBirth : "",
            dateOfBirth : dateOfBirth ? dateOfBirth : "",
            gender : gender ? gender : "MALE",
            religion : religion ? religion : "ISLAM",
            academic : academic ? academic : "",
            title : title ? title : "",
            address : address ? address : "",
            city : city ? city : "",
            country : country ? country : "",
            postalCode : postalCode ? postalCode : "",
            photo : photo ? photo : ""
        }
        try {
            await userRepository.save(newUser);
            await profileRepositoy.save(newProfile)
            // res.customSuccess(200, 'User successfully saved.');
            return next(res.status(200).send((customResult(200,"User successfully updated"))));
        } catch (err) {
            const customError = new CustomError(409, 'Raw', `User '${user.email}' can't be saved.`, null, err);
            return next(customError);
        }
    } catch (error) {
        const customeError = new CustomError(400,'Raw','Error',null,error);
        return next(customeError);
    }
}