import Link from "next/link";

export function Header() {
    return(
        <header className="w-full h-20 fixed top-0 left-0 mb-20 bg-slate-600 flex justify-center items-center">
            <nav className="flex gap-4 text-white">
                <Link className="hover:text-blue-950 cursor-pointer text-lg" href="/">Home</Link>
                <Link className="hover:text-blue-950 cursor-pointer text-lg" href="/items">Items</Link>
            </nav>
        </header>
    )
}