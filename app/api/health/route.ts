import { checkDtabaseConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const isConnected = await checkDtabaseConnection()

    if(isConnected){
        return NextResponse.json({
            status:"ok",
            message:"Database connected sucessful.",
        }, { status:200 })
    }
    return NextResponse.json({
        status:"error",
        message:"Database connected failed",
    }, {status:503})
}