import express from 'express'
import { authMiddleware } from '../middlewares/auth.js'
import { Account } from '../db/account.js'
import mongoose from 'mongoose'

const accountRouter = express.Router()

accountRouter.get('/balance', authMiddleware, async (req, resp) => {
    let userAccount
    try{
        userAccount = await Account.findOne({
            userId: req.userId
        })
    }catch(e){
        return resp.status(415).json({
            messagge: e.message
        })
    }

    return resp.status(200).json({
        balance: userAccount.balance
    })
})

accountRouter.post('/transfer', authMiddleware, async (req, resp) => {
    const session = await mongoose.startSession()

    session.startTransaction()
    const toAccount = await Account.findOne({
        userId: req.body.to
    }).session(session)

    if(!toAccount){
        await session.abortTransaction()
        return resp.status(400).json({
            message: "Inavalid account provided"
        })
    }
    const fromAccount = await Account.findOne({
        userId: req.userId
    }).session(session)

    if(!fromAccount || fromAccount.balance < req.amount){
        await session.abortTransaction()
        return resp.status(400).json({
            message: "Insufficient funds"
        })
    }

    await Account.updateOne({
        userId: fromAccount.userId
    }, {
        $inc: {
            balance: -req.body.amount
        }
    }).session(session)

    await Account.updateOne({
        userId: toAccount.userId
    }, {
        $inc: {
            balance: +req.body.amount
        }
    }).session(session)

    await session.commitTransaction()
    resp.json({
        message: "Transfer successfull"
    })

})

export default accountRouter