import { verifySession } from '@/app/lib/dal'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
  const session = await verifySession()
 
  if (!session) {
    unauthorized()
    //return redirect()
  }
 
  return <div>Dashboard</div>
}