import Link from "next/link";
export default function Logo() {
    return (
        <Link href='/'>
            <img src="/images/yap-high-resolution-logo-grayscale-transparent.png" alt="logo" className="h-10"/>
        </Link>
    );
}