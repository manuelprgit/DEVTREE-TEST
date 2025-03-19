import { Router, Response, Request } from "express";
import { User } from "./models/User";
import slug from 'slug';
import bcrypt from 'bcrypt';

const router = Router();

router.post('/api/auth/register', async (req: Request, res: Response) => {

    const { email, handle, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!!userExist) {
        res.status(409).json({
            msg: 'Usuario ya registrado'
        })
        return
    }

    //validar que el handle no exista (instalar slug)
    const handleSlug = slug(handle, '_');
    const existHandle = await User.findOne({ handle: handleSlug });
    if (!!existHandle) {
        res.status(409).json({
            msg: 'Usuario ya registrado'
        })
        return
    }

    //Crear una nueva instancia de User
    let user = new User(req.body);

    const passwordHashed = await bcrypt.hash(password, 10);
    user.password = passwordHashed;

    user.handle = handleSlug;

    user.save();

    res.send('Usuario registrado correctamente');

})

export default router;