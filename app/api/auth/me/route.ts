import { getCurrrentUser } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const user = await getCurrrentUser()

        if(!user){
            return NextResponse.json({
                error:"You are not authentiated"
            }, {status:400})
        }
        return NextResponse.json({ user }, { status:200 })
    }
    catch(e){
        console.log(e)
        return NextResponse.json({
            status:"error", message:"Something went wrong!"
        }, { status:500 })
    }
    
}