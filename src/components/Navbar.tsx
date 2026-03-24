import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-0 flex items-center bg-surface-container-highest/60 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/PROTO.svg"
          alt="PROTO Logo"
          width={80}
          height={80}
          className="w-20 h-20 object-contain"
        />
      </Link>

      {/* Spacer for potential right-side nav items */}
      <div className="flex-1" />
    </nav>
  );
}
