import { Request,Response,NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Salaries } from '../../typeorm/entities/salaries/Salaries';
import { CustomError } from '../../utils/response/custom-error/CustomError';

export const create = async(req:Request,res:Response,next:NextFunction) => {
    const salariesRepository = getRepository(Salaries);
    try {
        const salaries = await salariesRepository.create(req.body);
        await salariesRepository.save(salaries);
        // return res.customSuccess(200, 'User successfully saved.');
        return res.status(200).json({status: 200,message :"Salaries successfully created." });
    } catch (error) {
        const customeError = new CustomError(400,'Raw','Error',null,error);
        return next(customeError);
    }
}