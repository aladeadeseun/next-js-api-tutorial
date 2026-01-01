import Link from "next/link"

export default async function UserDetailPage({params}:{params:Promise<{userId: string}>}){
    const {userId} = await params
    return (
        <div>
            <p>User Detail for #{userId}</p>
            <p><Link href="/users">Go Back</Link></p>
        </div>
        
    )
}