import { Request,Response,NextFunction } from 'express';
import { getRepository,Like} from 'typeorm';

import { CustomError } from '../../utils/response/custom-error/CustomError';
import { decryptToken } from '../../utils/decrypt_token'
import { Attendance } from './../../typeorm/entities/attendance/Attendance';

export const create_from_scan = async(req:Request,res:Response,next:NextFunction) => {
    const attendanceRepository = getRepository(Attendance);
    const { token } = req?.query;
    // desycrpt token / accestoken
    const response_decrypt_token = decryptToken(token);
    if(!response_decrypt_token){
        const customeError = new CustomError(400,'Raw','Error',null,"Token cant by encrpyted");
        return next(customeError);
    }
    try {
        const {email} = response_decrypt_token
        const attendance = await attendanceRepository
        .findOne({where : {
            created_by : email,
            created_at : Like('2022-01-12')
        }})
        console.log('result  =>',attendance);
        return;
        const newBody = new Attendance();
        newBody.created_by = email;
        newBody.timeOfEntry = new Date();
        const data_attendance = await attendanceRepository.create(req.body);
        await attendanceRepository.save(data_attendance);
        // return res.customSuccess(200, 'User successfully saved.');
        return res.status(200).json({status: 200,message :"Attendance successfully created." });
    } catch (error) {
        const customeError = new CustomError(400,'Raw','Error',null,error);
        return next(customeError);
    }
}