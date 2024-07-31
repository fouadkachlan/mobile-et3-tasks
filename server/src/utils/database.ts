import { createPool, Pool, PoolConfig, MysqlError , PoolConnection } from 'mysql';

export const db : PoolConfig = ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'news_reader_app',
});

const pool : Pool = createPool(db);

export const executeQuery = async <T>(query : string , params: any[]) : Promise<T[]> => {
    return new Promise((resolve , reject) => {
        pool.query(query , params , (err,rows) => {
            if (err) {
                console.log(`Error executing query: ${err}`);
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
          console.error('Unable to connect to the MySQL database:', err);
          throw err;
        }
        console.log("Connected to the MySQL database");
        connection.release(); 
      });
    } catch (error) {
      console.error('Unable to connect to the MySQL database:', error);
      throw error;
    }
  };