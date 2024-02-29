import {Router, RouterOptions} from "express";
import { authController } from "../controllers/authController";

/**
 * Clase para fucnionalidad de rutas Login
 */

class AuthRoutes{
    //objeto de tipo Router
    public router:Router
    //inicializa
    constructor(){
    this.router = Router();
    this.config();

    }
    config(){
        this.router.post('/', authController.iniciarSesion);
        

    }
}
const authRoutes= new AuthRoutes ();
export default authRoutes.router;