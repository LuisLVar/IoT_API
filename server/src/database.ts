import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection().
    then(connection=> { //.then es una promesa de js
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;