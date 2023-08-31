import databaseConnection from '../util/database'
import User from '../models/user'

export const listUsers = async () => {
    await databaseConnection()
    const users = await User.find()
    return users
}

export const createUsers = async (user) => {
    await databaseConnection()
    const createdUsers = await User.create(user)
    return createdUsers
}

export const deleteUsers = async (id) => {
    await databaseConnection()
    await User.findByIdAndDelete(id)
}

export const updateUsers = async (id, newBody) => {
    await databaseConnection()
    await User.findByIdAndUpdate(id, newBody)
}