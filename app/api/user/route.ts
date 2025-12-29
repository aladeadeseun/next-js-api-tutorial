import { Prisma, Role } from "@/app/generated/prisma/client";
import { getCurrrentUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    try{
        const user = await getCurrrentUser()

        if(!user){
            return NextResponse.json({
                error:"You are not authorized to access user information"
            }, {status:400})
        }
        const searchParams = request.nextUrl.searchParams

        const teamId = searchParams.get("teamId")
        const role = searchParams.get("role")

        const where: Prisma.UserWhereInput = {}

        if(user.role === "ADMIN"){

        }
        else if(user.role === "MANAGER"){
            where.OR = [ { teamId: user.teamId }, { role : "USER"} ]
        }else{
            where.teamId = user.teamId
            where.role = { not: Role.ADMIN }
        }

        if(teamId) where.teamId = parseInt(teamId)
        
        if(role) where.role = role as Role

        const users = await prisma.user.findMany({
            select:{
                email:true,
                name:true,
                role:true,
                team:{
                    select:{
                        id:true,
                        name:true
                    }
                }
            }
        })

        return NextResponse.json({ users }, {})
    }
    catch(e){
        console.log(e)
        return NextResponse.json({
            status:"error", message:"Something went wrong!"
        }, { status:500 })
    }
    
}