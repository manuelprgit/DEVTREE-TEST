import { Request, Response } from "express";
import { User } from "../models/User";
import slug from "slug";
import bcrypt from 'bcrypt';

const registerUser = async (req: Request, res: Response) => {
    try {

        const { email, handle, password } = req.body;

        const userExist = await User.findOne({ email });
        if (!!userExist) {
            res.status(409).json({
                msg: 'Correo ya existe'
            })
            return
        }

        const handleSlug = slug(handle, '_');
        const existHandle = await User.findOne({ handle: handleSlug });
        if (!!existHandle) {
            res.status(409).json({
                msg: 'Usuario ya registrado'
            })
            return
        }

        let user = new User(req.body);

        const passwordHashed = await bcrypt.hash(password, 10);
        user.password = passwordHashed;

        user.handle = handleSlug;

        user.save();

        res.send('Usuario registrado correctamente');

    } catch (error) {
        console.log(error.message)
    }

}


export {
    registerUser
}