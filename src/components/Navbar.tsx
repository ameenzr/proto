import Image from "next/image";
import Link from "next/link";
import protoLogo from "../../public/proto_studio_logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 px-6 flex items-center">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={protoLogo}
          alt="PROTO Studio Logo"
          className="h-7 w-auto object-contain"
          priority
        />
      </Link>

      {/* Spacer for potential right-side nav items */}
      <div className="flex-1" />
    </nav>
  );
}
