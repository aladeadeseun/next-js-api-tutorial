import { NextRequest } from "next/server";

export async function PATCH(
    request: NextRequest,
    context: {params: Promise<{ userId: string }> }
){
    try{
        const { userId } = await context.params
        console.log(userId)
    }
    catch(error){
        console.error(error)
    }
}