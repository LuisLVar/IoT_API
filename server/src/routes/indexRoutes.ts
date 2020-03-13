import { Router } from 'express';
import {indexController} from '../controllers/indexController';


class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', indexController.index);
        this.router.get('/inicio', indexController.index);
        this.router.get('/graficas', indexController.graficas);
        this.router.get('/relaciones', indexController.relation);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;