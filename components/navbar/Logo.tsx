import Link from "next/link";
import { Button } from "../ui/button";
export default function Logo() {
    return (
        <Link href='/'>
            <img src="/images/yap-high-resolution-logo-grayscale-transparent.png" alt="logo" className="h-10"/>
        </Link>
    );
}