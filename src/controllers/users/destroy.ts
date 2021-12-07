import { User } from 'typeorm/entities/users/User';
import { Request,Response,NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { CustomError } from '../../utils/response/custom-error/CustomError';

export const destroy = async(req : Request,res:Response,next:NextFunction)=> {
    const {id} = req.params
    const userRepository = getRepository(User);
    try {
        const user = await userRepository.findOne({where : {id}});
        if(!user){
            const customError = new CustomError(404, 'General', 'Not Found', [`User with id:${id} doesn't exists.`]);
            return next(customError);
        }
         userRepository.delete(id);
        // res.customSuccess(200, 'User successfully deleted.', { id: user.id, name: user.name, email: user.email });
    } catch (error) {
        const customeError = new CustomError(400,'Raw','Error',null,error);
        return next(customeError);
    }
}
