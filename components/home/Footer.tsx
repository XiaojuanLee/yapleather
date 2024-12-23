import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

export default function Footer() {
    return (
      <footer className="bg-[#067627] text-white p-4 text-center">
        <div className="container mx-auto flex flex-col justify-between items-center">
          <img src="/images/footer.png" alt="Logo" className="mx-auto h-20 object-cover"/>
          <div className="flex gap-4 mb-4">
            <Link href="https://www.instagram.com/yapleather/?igsh=aTJiYmh3Y3dlYWh3">
            <FaInstagram></FaInstagram>
            </Link>
            <Link href="https://www.tiktok.com/@yapleather?_t=8rodOQtkgQ3&_r=1">
            <FaTiktok></FaTiktok>
            </Link>
            <Link href="https://www.facebook.com/share/1DCW18J5t1/?mibextid=LQQJ4d">
            <FaFacebook></FaFacebook>
            </Link>
            <Link href="/wechat">
            <IoLogoWechat></IoLogoWechat>
            </Link>

          </div>
          <p>Copyright © 2024 Yap Leather Studio. All rights reserved.</p>
          <p>4 Deerfield Dr, Nepean, Ottawa, Ontario</p>
          <p>yapeng@yapleather.com</p>
          <p>613-863-0315</p>
        </div>
      </footer>
    );
  }