import { NextResponse } from "next/server";

export async function POST(){
    try{
        //Create response
        const response = NextResponse.json({
            message:"User logged out successfully"
        }, {status:200})

        response.cookies.set("token", "", {
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"lax",
            maxAge:0
        })

        return response
    }
    catch(e){
        console.error(e)

        return NextResponse.json({status:"error", message:"Something went wrong, please try again later"}, {status:500})
    }
}