import { prisma } from "@/app/lib/db";
import { hashPassword } from "@/app/lib/auth";
import { Role } from "@/app/types";

async function main(){
    console.log("Starting database seeding...")
    
    const teams = await Promise.all([
        prisma.team.create({
            data: {
                name:"Engineering",
                description:"Software development team",
                code:"ENG-2024"
            }
        }),
        prisma.team.create({
            data: {
                name:"Marketing",
                description:"Marketing and sales team",
                code:"MKT-2024"
            }
        }),
        prisma.team.create({
            data: {
                name:"Operations",
                description:"Business operations team",
                code:"OPS-2024"
            }
        }),
    ])

    const sampleUsers = [
        {
            name:"John Developers",
            email:"john@company.com",
            team: teams[0],
            role:"MANAGER"
        },
        {
            name:"Jane Designer",
            email:"jane@company.com",
            team: teams[0],
            role:"USER"
        },
        {
            name:"Bob Marketer",
            email:"bob@company.com",
            team: teams[0],
            role:"USER"
        },
        {
            name:"Alice Sales",
            email:"alice@company.com",
            team: teams[1],
            role:"USER"
        }
    ]
    for(const userData of sampleUsers){
        await prisma.user.create({
            data: {
                email: userData.email,
                name: userData.name,
                password: await hashPassword("12356"),
                role:userData.role as Role,
                teamId: userData.team.id
            }
        })
    }
}

main().catch(e=>{
    console.error("Seeding failed: ", e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})