module.exports = {
    "type": "mysql",
    "host" : process.env.DB_HOST,
    "port": 3306,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "synchronize": false,
    "entities": [
        "./src/database/entities/*.ts"
    ],
    "migrations":[
        "./src/database/migrations/*.ts"
    ],
    "cli":{
        "migrationsDir":"./src/database/migrations"
    }
}