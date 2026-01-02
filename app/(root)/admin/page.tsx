import { verifySession } from "@/app/lib/dal"
import { forbidden, notFound, unauthorized } from "next/navigation"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export default async function AdminPage() {

    const response = fetch(`${BASE_URL}/api/events`)

    const data = (await response).json() as Promise<{data:string[]}>

    if(!data) return notFound()

    const session = await verifySession()
    if (!session) {
        unauthorized()
    }
    // Check if the user has the 'admin' role
    if (session.role !== 'admin') {
        forbidden()
    }
 
    // Render the admin page for authorized users
    return (
        <main>
            <h1>Admin Dashboard</h1>
            <p>Welcome, {session.user.name}!</p>
        </main>
    )
}