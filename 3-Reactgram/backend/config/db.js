const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

// Connection

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@reactgram.mhc7v2y.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Connected to database!")

        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn