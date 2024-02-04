import zod from 'zod'

export const userSignupSchema = zod.object({
    firstname: zod.string().min(3).max(50),
    lastname: zod.string().min(3).max(50),
    username: zod.string().email(),
    password: zod.string()
}).strict()

export const userSignInSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
}).strict()

export const userUpdateSchema = zod.object({
    firstname: zod.string().optional(),
    password: zod.string().optional(),
    lastname: zod.string().optional()
}).strict()