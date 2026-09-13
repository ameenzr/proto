import Image from "next/image";

export default function ProtoLogo({ alt = "PROTO" }: { alt?: string }) {
  return <span className="proto-logo-crop"><Image src="/proto-logo-v3.png" alt={alt} width={1024} height={342} priority /></span>;
}
