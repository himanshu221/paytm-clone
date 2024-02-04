import { JWT_SECRTET } from "../config.js"
import jwt from 'jsonwebtoken' 

export const authMiddleware = (req, resp, next) => {
    const auth = req.headers.authorization

    if(!auth || !auth.startsWith('Bearer ') ){
        return resp.status(415).json({
            message: "Authorization token not provided or provided incorrectly in header"
        })
    }
    const token = auth.split(" ")[1]
    let decodedToken
    try{
        decodedToken = jwt.verify(token, JWT_SECRTET)
    }catch(e){
        return resp.status(403).json({
            message: "Invalid token"
        })
    }
    req.userId = decodedToken.userId
    next()
}