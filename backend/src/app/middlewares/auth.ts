import { NextFunction, Request, Response } from "express";
import ApiError from "../../errors/apiError";
import { JwtHelper } from "../../helpers/jwtHelper";
import config from "../../config";
import { Secret } from "jsonwebtoken";

export const auth = (...rules: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
<<<<<<< HEAD
        console.log(req.headers);

        console.log(token);
=======
>>>>>>> 1ec088e47a2c63255e950fbafe538465ebfb07b6
        if (!token) {
            throw new ApiError(404, "Token is not Found !!")
        }
        let verifiedUser;
        try {
            verifiedUser = await JwtHelper.verifyToken(token, config.jwt.secret as Secret);
        } catch (error) {
            throw new ApiError(403, "User is not Found !!")
        }
        req.user = verifiedUser;

        if (rules.length && !rules.includes(verifiedUser.role)) {
            throw new ApiError(403, "You are not Authorised !!")
        }
        next();
    } catch (error) {
        next(error)
    }
}