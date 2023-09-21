const dotenv= require("dotenv")
dotenv.config()

module.exports={
    DB_USER,
    DB_PASSWORD,
    DB_HOST
}= process.env