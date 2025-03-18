import { Router, Response, Request } from "express";
import { User } from "./models/User";

const router = Router();

router.post('/api/auth/register', (req: Request,res :Response)=>{
    
    //validar que el email no exita

    //validar que el handle no exista (instalar slug)

    //Crear una nueva instancia de User

    //hasher el password (descargar la libreria as popular para hashear la contrasenia)

    //a la instancia del usuario tenemos que asignarla la contrasenia hasheada y el handle slugseado
    

})

export default router;