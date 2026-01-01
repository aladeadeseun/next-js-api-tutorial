import { NextResponse } from "next/server";

const BOOK = [
    {id:1, title:"This is a title", description:"This is a description", isbn:12345}
]

export function GET(){
    return NextResponse.json({ data:BOOK, sucess:true }, { status:200 })
}