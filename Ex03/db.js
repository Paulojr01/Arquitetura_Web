import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


connection.connect(
    function(err){
        if(err){
            console.log("!!! erro de conexão")
            throw err;
        }
        else{
            console.log("conexão feita ")
        }
    }
)