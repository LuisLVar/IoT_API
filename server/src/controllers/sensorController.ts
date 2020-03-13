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

      //insert into PESO VALUES(10.5, '2020-03-09 21:10:50', 10, 15);
      var d = new Date();
      var year = d.getFullYear();
      var month = d.getMonth() +1;
      var dia = d.getDate();
      var hour = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();

      var fecha = year+"-"+month+"-"+dia+" "+hour+":"+minutes+":"+seconds;

      await pool.query('INSERT INTO PESO VALUES(?, ?, ?, ?)', [req.body.peso, fecha, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO INCLINACION VALUES(?, ?, ?, ?)', [req.body.inclinacion, fecha, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO AGUA VALUES(?, ?, ?, ?)', [req.body.agua, fecha, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO LUZ VALUES(?, ?, ?, ?)', [req.body.luz, fecha, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO SONIDO VALUES(?, ?, ?, ?)', [req.body.sonido, fecha, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO ALARMA VALUES(?, ?, ?, ?)', [req.body.alarma, fecha, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO ANTIRROBOS VALUES(?, ?, ?, ?)', [req.body.antirrobos, fecha, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO CONTADOR_PASOS VALUES(?, ?, ?, ?)', [req.body.contador_pasos, fecha, req.body.longitud, req.body.latitud]);
      await pool.query('INSERT INTO RITMO_CARDIACO VALUES(?, ?, ?, ?)', [req.body.ritmo_cardiaco, fecha, req.body.longitud, req.body.latitud]);
      
      res.json({result: true});
   } 

   public async listPeso(req:Request, res:Response) {
      const pesos = await pool.query("SELECT PESOKG, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM PESO");
        res.json(pesos);
   }
   
   public async listDayPeso(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT PESOKG, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM PESO where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 

   public async listInclinacion(req:Request, res:Response) {
      const pesos = await pool.query("SELECT INCLINACION, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM INCLINACION");
        res.json(pesos);
   }
   
   public async listDayInclinacion(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT INCLINACION, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM INCLINACION where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 


   public async listAgua(req:Request, res:Response) {
      const pesos = await pool.query("SELECT AGUA, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM AGUA");
        res.json(pesos);
   }
   
   public async listDayAgua(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT AGUA, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM AGUA where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 


   public async listLuz(req:Request, res:Response) {
      const pesos = await pool.query("SELECT LUZ, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM LUZ");
        res.json(pesos);
   }
   
   public async listDayLuz(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT LUZ, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM LUZ where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 


   public async listSonido(req:Request, res:Response) {
      const pesos = await pool.query("SELECT SONIDO, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM SONIDO");
        res.json(pesos);
   }
   
   public async listDaySonido(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT SONIDO, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM SONIDO where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 


   public async listAlarma(req:Request, res:Response) {
      const pesos = await pool.query("SELECT ESTADO, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM ALARMA");
        res.json(pesos);
   }
   
   public async listDayAlarma(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT ESTADO, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM ALARMA where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 


   public async listAntirrobos(req:Request, res:Response) {
      const pesos = await pool.query("SELECT ESTADO, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM ANTIRROBOS");
        res.json(pesos);
   }
   
   public async listDayAntirrobos(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT ESTADO, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM ANTIRROBOS where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 


   public async listPasos(req:Request, res:Response) {
      const pesos = await pool.query("SELECT PASOS, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM CONTADOR_PASOS");
        res.json(pesos);
   }
   
   public async listDayPasos(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT PASOS, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM CONTADOR_PASOS where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 

   public async listRitmo(req:Request, res:Response) {
      const pesos = await pool.query("SELECT RITMO, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM RITMO_CARDIACO");
        res.json(pesos);
   }
   
   public async listDayRitmo(req:Request, res:Response) {
      const {date} = req.params;
      const datos = await pool.query("SELECT RITMO, date_format(FECHA, '%d-%m-%Y %H:%i:%s') as FECHA, LONGITUD, LATITUD FROM RITMO_CARDIACO where date_format(FECHA, \'%d-%m-%Y\') = ?", [date]);
      res.json(datos);
   } 
}

export const sensorController = new SensorController();