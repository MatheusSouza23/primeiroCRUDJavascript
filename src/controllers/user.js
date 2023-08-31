import { Router } from 'express'

import { listUsers, createUsers, deleteUsers, updateUsers } from '../services/user'

const router = Router()

router.get('/', async (req, res) => {
    const userList = await listUsers()
    res.send(userList)
})

router.post('/', async (req, res) => {
    try {
        const user = await createUsers(req.body)
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.delete('/:userId', async (req, res) => {
    await deleteUsers(req.params.userId)
    res.send()
})

router.put('/:userId', async (req, res) => {
    await updateUsers(req.params.userId, req.body)
    res.send()
})

export default router