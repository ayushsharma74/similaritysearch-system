import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-6 flex justify-center">
            <h1>Built with ❤️ by <Link href={"https://x.com/ayshtwt"} className="font-bold underline hover:no-underline"> Ayush </Link></h1>
        </footer>
    )
}
