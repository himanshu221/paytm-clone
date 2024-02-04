import express from 'express'
import { userSignupSchema, userSignInSchema, userUpdateSchema } from '../validation/user.js'
import { User } from '../db/user.js'
import jwt from 'jsonwebtoken'
import { JWT_SECRTET } from '../config.js'
import { authMiddleware } from '../middlewares/auth.js'
import { Account } from '../db/account.js'

const userRouter = express.Router()

userRouter.post('/signup', async (req, resp) => {
    const userValidation = userSignupSchema.safeParse(req.body)
    if(!userValidation.success){
        return resp.status(415).json({
            message: "Invalid inputs provided"
        })
    }

    const userFound = await User.findOne({
            username: req.body.username
        })
    if(userFound) {
        return resp.status(411).json({
            message: "Username already exists"
        })
    }
    let userCreated
    try{
        userCreated = await User.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password
        })
    }catch(e) {
        return resp.status(411).json({
            message: e.message
        })
    }
    const userId = userCreated._id
    try{
        await Account.create({
            userId: userId,
            balance: Math.ceil(Math.random()*10000)
        })
    }catch(e){
        return resp.status(411).json({
            message: e.message
        })
    }
    const token = jwt.sign({
        userId
    },JWT_SECRTET)

    resp.status(200).json({
        message: "User created successfully",
        token: token
    })
})

userRouter.post('/signin', async (req, resp) => {
    const userValidation = userSignInSchema.safeParse(req.body)

    if(!userValidation.success){
        return resp.status(415).json({
            message: "Invalid input provided"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(!user){
        return resp.status(411).json({
           message: "User not found! Please sign up" 
        })
    }

    const userId = user._id
    const token = jwt.sign({
       userId 
    }, JWT_SECRTET)

    resp.status(200).json({
        token : token
    })
})

userRouter.put('/', authMiddleware, async (req, resp) => {
    const body = req.body

    if(Object.keys(body).length === 0 || !userUpdateSchema.safeParse(body).success){
        return resp.status(415).json({
            message: "Invalid input"
        })
    }

    try{
        await User.updateOne({
            _id : req.userId
        },body, { runValidators: true })
    }catch(e) {
       return resp.status(411).json({
            message: e.message
        })
    }

    return resp.status(200).json({
        message: "Updated user successfully"
    })
    
})

userRouter.get('/bulk', authMiddleware, async (req, resp) => {
    const filter = req.query.filter || ""
    const user =  await User.findOne({
            _id: req.userId
        })
    if(!user){
        return resp.status(400).json({
            message: "User who sent the request does not exists"
        })
    }
    const userList = await User.find({
        $or: [
            { firstname : { $regex : filter, $options: 'i'}},
            { lastname: { $regex: filter, $options: 'i'} }
        ]
    })
    resp.json(userList.map(user => ({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        _id: user._id
    })))
})


export default userRouter