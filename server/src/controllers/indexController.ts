import { Request, Response } from 'express';
const path = require('path');



class IndexController {

   public index(req: Request, res: Response) {
      res.sendFile('cliente/inicio.html', {
         root: path.join(__dirname, '../../../')
      });
   }

   public graficas(req: Request, res: Response) {
      res.sendFile('cliente/graficas.html', {
         root: path.join(__dirname, '../../../')
      });
   }

   public relation(req: Request, res: Response) {
      res.sendFile('cliente/relaciones.html', {
         root: path.join(__dirname, '../../../')
      });
   }
}

export const indexController = new IndexController();