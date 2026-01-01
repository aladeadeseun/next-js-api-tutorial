import Link from "next/link";

export default function UserPage(){
    return (
        <ul>
            <li><Link href="/users/1">User 1</Link></li>
            <li><Link href="/users/2">User 2</Link></li>
            <li><Link href="/users/3">User 3</Link></li>
            <li><Link href="/users/4">User 4</Link></li>
            <li><Link href="/users/5">User 5</Link></li>
        </ul>
    )
}