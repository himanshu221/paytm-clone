import mongoose from "mongoose";
import { Schema } from "mongoose";

const accountSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

export const Account = mongoose.model('account', accountSchema)