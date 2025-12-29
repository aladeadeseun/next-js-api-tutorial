export type Role = "ADMIN" | "GUEST" | "USER" | "MANAGER"

export type User = {
    id: number,
    name:string,
    email:string    
    teamId?:number,
    team: Team,
    createdAt: Date
    updatedAt: Date
}

export type Team = {
    id: number,
    name: string,
    description?: string | null
    code: string
    members: User[]
    createdAt: Date,
    updatedAt: Date,
}