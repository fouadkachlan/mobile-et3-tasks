import { createPool, Pool, PoolConfig, MysqlError , PoolConnection } from 'mysql';
import { DatabaseStatus } from '../Constant/Message';

export const db : PoolConfig = ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'news_reader_app',
});

export const pool : Pool = createPool(db);

export const executeQuery = async <T>(query : string , params: any[]) : Promise<T[]> => {
    return new Promise((resolve , reject) => {
        pool.query(query , params , (err,rows) => {
            if (err) {
                console.log(DatabaseStatus.Fail.queryExecutionError);
                reject(err);
            } else {
                resolve(rows as T[]);
            }
        })
    })
}



export const connectDB = async (): Promise<void> => {
    try {
      pool.getConnection((err: MysqlError, connection: PoolConnection) => {
        if (err) {
          console.error(DatabaseStatus.Fail.databaseConnectionError);
          throw err;
        }
        console.log(DatabaseStatus.Success.databaseConnectionSuccess);
        connection.release(); 
      });
    } catch (error) {
      console.error(DatabaseStatus.Fail.databaseConnectionError);
      throw error;
    }
  };
  