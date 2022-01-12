import jwt from 'jsonwebtoken';

export const decryptToken = (payload: any): any => {
    let jwtPayload: { [key: string]: any };
    let token = payload;
    jwtPayload = jwt.verify(token, process.env.JWT_SECRET as string) as { [key: string]: any };
    return jwtPayload;
};  
