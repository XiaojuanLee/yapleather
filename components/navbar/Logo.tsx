import Link from "next/link";
export default function Logo() {
    return (
        <Link href='/'>
            <img src="/images/logo2.png" alt="logo" className="h-10 px-4"/>
        </Link>
    );
}