import type { NextFunction, Request, Response } from 'express';
import { BmiInput } from './bmi';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    //* Invalid Input ==> BMiInput not numbers
    const { body } = req;
    try {
        const data = (body);
        return res.json({ message: 'Success', data });
        next();
    } catch (e) {
        const error = e as Error;
        return res.status(422).json({ errors: error});
    }
};
