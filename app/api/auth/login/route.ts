import { generateToken, verifyPassword } from "@/app/lib/auth";
import { prisma } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try{
        const { email, password } = await request.json()
        //validate required fields
        if(!email || !password){
            return NextResponse.json({
                error:"Invalid login detail.",
            }, {status : 400})
        }

        const userFromDB = await prisma.user.findUnique({where:{email}, include:{team:true}})

        if(!userFromDB || !await verifyPassword(password, userFromDB.password)) 
            return NextResponse.json({status:"error", error:`Invalid login detail`}, {status:409})  

        const token = generateToken(userFromDB.id.toString())
        
        //Create response
        const response = NextResponse.json({
            user:{
                id:userFromDB.id,
                email:userFromDB.email,
                name: userFromDB.name,
                role: userFromDB.role,
                teamId: userFromDB.teamId,
                team: userFromDB.team,
                token 
            }
        }, {status:200})

        response.cookies.set("token", token, {
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"lax",
            maxAge:60 * 60 * 24 * 7
        })

        return response
    }
    catch(e){
        console.error(e)

        return NextResponse.json({status:"error", message:"Something went wrong, please try again later"}, {status:500})
    }
}