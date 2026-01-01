import { ReactNode } from "react";

export default function Layout({children}:{children: ReactNode}){
    return (
        <div>
            <h1>This is the main Layout</h1>
            {children}
        </div>
    )
}