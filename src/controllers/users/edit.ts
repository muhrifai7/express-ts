import { User } from 'typeorm/entities/users/User';
import { Request,Response,NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { CustomError } from '../../utils/response/custom-error/CustomError';

export const edit = async(req:Request,res:Response,next:NextFunction) => {
    const {id} = req.params;
    const { username, name } = req.body;
    const userRepository = getRepository(User);
    try {
        const user = await userRepository.findOne({where : {id}});
        if(!user){
            const customError = new CustomError(404, 'General', `User with id:${id} not found.`, ['User not found.']);
            return next(customError);
        }
        user.username = username;
        user.name = name;
        try {
            await userRepository.save(user);
            res.customSuccess(200, 'User successfully saved.');
        } catch (err) {
            const customError = new CustomError(409, 'Raw', `User '${user.email}' can't be saved.`, null, err);
            return next(customError);
        }
    } catch (error) {
        const customeError = new CustomError(400,'Raw','Error',null,error);
        return next(customeError);
    }
}