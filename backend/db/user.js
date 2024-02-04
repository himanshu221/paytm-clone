import mongoose, { Schema } from 'mongoose'

mongoose.connect('mongodb://localhost:27017/paytm')

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 3,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 3,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        maxLength: 50,
        minLength: 3,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        trim: true
    }
})

export const User = mongoose.model('user', userSchema)
