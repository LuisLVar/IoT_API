import { Request, Response } from 'express';
import pool from '../database';
const path = require('path');


class SensorController{

   public index(req: Request, res: Response) {
      res.sendFile('cliente/inicio.html', {
         root: path.join(__dirname, '../../../')
      });
   }

   // HACER PROCEDIMIENTO ALMACENADO QUE ALMACENE TODOS LOS REGISTROS O BIEN CREAR TODAS LAS CONSULTAS.
   public async create(req:Request, res:Response): Promise<void> {
      await pool.query('INSERT INTO PESO VALUES(?, SYSDATE(), ?, ?)', [req.body.peso, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO INCLINACION VALUES(?, SYSDATE(), ?, ?)', [req.body.inclinacion, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO AGUA VALUES(?, SYSDATE(), ?, ?)', [req.body.agua, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO LUZ VALUES(?, SYSDATE(), ?, ?)', [req.body.luz, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO SONIDO VALUES(?, SYSDATE(), ?, ?)', [req.body.sonido, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO ALARMA VALUES(?, SYSDATE(), ?, ?)', [req.body.alarma, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO ANTIRROBOS VALUES(?, SYSDATE(), ?, ?)', [req.body.antirrobos, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO CONTADOR_PASOS VALUES(?, SYSDATE(), ?, ?)', [req.body.contador_pasos, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO RITMO_CARDIACO VALUES(?, SYSDATE(), ?, ?)', [req.body.ritmo_cardiaco, req.body.longitud, req.body.latitud]);
      
      res.json({result: true});
   } 

   public async listPeso(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM PESO');
        res.json(pesos);
   }
   
   public async listDayPeso(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM PESO where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 

   public async listInclinacion(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM INCLINACION');
        res.json(pesos);
   }
   
   public async listDayInclinacion(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM INCLINACION where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 


   public async listAgua(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM AGUA');
        res.json(pesos);
   }
   
   public async listDayAgua(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM AGUA where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 


   public async listLuz(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM LUZ');
        res.json(pesos);
   }
   
   public async listDayLuz(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM LUZ where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 


   public async listSonido(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM SONIDO');
        res.json(pesos);
   }
   
   public async listDaySonido(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM SONIDO where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 


   public async listAlarma(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM ALARMA');
        res.json(pesos);
   }
   
   public async listDayAlarma(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM ALARMA where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 


   public async listAntirrobos(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM ANTIRROBOS');
        res.json(pesos);
   }
   
   public async listDayAntirrobos(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM ANTIRROBOS where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 


   public async listPasos(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM CONTADOR_PASOS');
        res.json(pesos);
   }
   
   public async listDayPasos(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM CONTADOR_PASOS where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 

   public async listRitmo(req:Request, res:Response) {
      const pesos = await pool.query('SELECT * FROM RITMO_CARDIACO');
        res.json(pesos);
   }
   
   public async listDayRitmo(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query('SELECT * FROM RITMO_CARDIACO where date_format(FECHA, \'%d-%m-%Y\') = ?', [date])
      res.json(datos);
   } 
}

export const sensorController = new SensorController();