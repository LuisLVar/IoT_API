import { Router } from 'express';
import { sensorController } from '../controllers/sensorController';
import pool from '../database';

class SensorRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', sensorController.index);
        this.router.post('/', sensorController.create);
        this.router.get('/peso/', sensorController.listPeso);
        this.router.get('/peso/:date', sensorController.listDayPeso);
        this.router.get('/inclinacion/', sensorController.listInclinacion);
        this.router.get('/inclinacion/:date', sensorController.listDayInclinacion);
        this.router.get('/agua/', sensorController.listAgua);
        this.router.get('/agua/:date', sensorController.listDayAgua);
        this.router.get('/luz/', sensorController.listLuz);
        this.router.get('/luz/:date', sensorController.listDayLuz);
        this.router.get('/sonido/', sensorController.listSonido);
        this.router.get('/sonido/:date', sensorController.listDaySonido);
        this.router.get('/alarma/', sensorController.listAlarma);
        this.router.get('/alarma/:date', sensorController.listDayAlarma);
        this.router.get('/antirrobo/', sensorController.listAntirrobos);
        this.router.get('/antirrobo/:date', sensorController.listDayAntirrobos);
        this.router.get('/contador_pasos/', sensorController.listPasos);
        this.router.get('/contador_pasos/:date', sensorController.listDayPasos);
        this.router.get('/ritmo_cardiaco/', sensorController.listRitmo);
        this.router.get('/ritmo_cardiaco/:date', sensorController.listDayRitmo);
    }

}

const sensorRoutes = new SensorRoutes();
export default sensorRoutes.router;