import { ReactNode } from "react";

export default function RootLayout({children}:{children: ReactNode}){
    return (
        <div>
            <h1>This is the root Layout</h1>
            {children}
        </div>
    )
}