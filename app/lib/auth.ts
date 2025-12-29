import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { prisma } from "./db"
import { User } from "../generated/prisma/client"
import { Role } from "../types"

const JWT_SECRET = process.env.JWT_SECRET!

export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, 12)
}

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword)
}

export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, JWT_SECRET, {expiresIn:"7d"})
}

export const verifyToken = (token: string): {userId:string} => {
    return jwt.verify(token, JWT_SECRET) as {userId: string}
}  
export const getCurrrentUser = async (): Promise<User | null> => {
    try{
        const cookieStore = await cookies()
        
        const token = cookieStore.get("token")?.value

        if(!token) return null

        const decode = verifyToken(token)

        const userFromDb = await prisma.user.findUnique({where:{id:parseInt(decode.userId)}})

        if(!userFromDb) return null

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {password, ...rest} = userFromDb

        return rest as User
    }
    catch(e){
        console.error(e)
    }
    return null
}

const RoleHierachy: Record<Role, number> = {
    ADMIN:3,
    MANAGER:2,
    USER:1,
    GUEST:0
} 

export const checkUserPermission = (
    user: User,
    requiredRole: Role
):boolean => {
    return RoleHierachy[user.role] >= RoleHierachy[requiredRole]
}