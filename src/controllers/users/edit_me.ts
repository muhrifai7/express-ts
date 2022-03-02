import { Request,Response,NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../typeorm/entities/users/User';
import { Profile } from '../../typeorm/entities/profile/Profile';
import { CustomError } from '../../utils/response/custom-error/CustomError';
import { customResult } from '../../utils/response/custom-success/customResult';
 
// edit by token for user
// only can change profile
export const edit_me = async(req:Request,res:Response|any,next:NextFunction) => {
    const {id} = req.jwtPayload;
    const {body} = req
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
        try {
            await userRepository.update(id,{...body});
            await profileRepositoy.update(id,{...body})
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