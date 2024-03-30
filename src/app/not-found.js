import Image from "next/image"
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"


export default function NotFound() {
    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
            <h2>404 Not Found</h2>
            <Image className="py-12" src="/sad-cubone.png" width="200" height="200" alt="sad Cubone pokemon" />
            <Link href="/" className={buttonVariants({ variant: "outline" })}>Return Home</Link>
        </div>
    )
}