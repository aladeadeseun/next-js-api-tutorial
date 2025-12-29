import { PrismaClient } from "../generated/prisma/client"

export const prisma = new PrismaClient()

export async function checkDtabaseConnection(): Promise<boolean> {
    try{
        await prisma.$queryRaw`Select 1`
        return true
    }
    catch(e){
        console.error(`Database connection failed :${e}`)
        return false
    }
}