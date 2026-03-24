import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 px-6 py-0 flex items-center bg-surface-container-highest/60 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/PROTO.svg"
          alt="PROTO Logo"
          width={187}
          height={28}
          className="w-[187px] h-[28px] object-contain"
          priority
        />
      </Link>

      {/* Spacer for potential right-side nav items */}
      <div className="flex-1" />
    </nav>
  );
}
