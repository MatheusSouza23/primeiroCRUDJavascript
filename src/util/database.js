import mongoose from "mongoose"

const URI = "mongodb+srv://matheusmarquesdesouza26:mat260599@cluster0.risof0f.mongodb.net/"

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection