import { Response, Request } from "express";
import slug from 'slug';

import { User } from '../models/User';
import { hashPassword } from "../utils/auth";

const createAccount = async (req: Request, res: Response) => {
    try {

        const { email, handle, password } = req.body;

        const userExist = await User.findOne({ email });
        if (!!userExist) {
            res.status(409).json({
                msg: 'Usuario ya registrado'
            })
            return
        }

        //validar que el handle no exista (instalar slug)
        const handleSlug = slug(handle, '');
        const existHandle = await User.findOne({ handle: handleSlug });
        if (!!existHandle) {
            res.status(409).json({
                msg: 'Usuario ya registrado'
            })
            return
        }

        //Crear una nueva instancia de User
        let user = new User(req.body);

        user.password = await hashPassword(password);

        user.handle = handleSlug;

        user.save();

        res.send('Usuario registrado correctamente');

    } catch (error) {
        console.log(error.message)
    }
}

// const getAccountById = async(req:Request, res:Response) => {
//     const users = User.findById(req.user.id)
// }

export {
    createAccount
}