import { verifySession } from "@/app/lib/dal"
import { forbidden, unauthorized } from "next/navigation"

export default async function AdminPage() {
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