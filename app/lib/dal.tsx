import { setTimeout } from "timers"

export async function verifySession(): Promise<{role:string, user:{name:string}} | null>{
    //return Promise.resolve(false)
    //return Promise.resolve(null)
    return Promise.resolve({role:"user", user:{name:"Olu Ola"}})
}

export function sleep(timeInMs:number){
    return new Promise(function(resolve){
        setTimeout(resolve, timeInMs)
    })
}