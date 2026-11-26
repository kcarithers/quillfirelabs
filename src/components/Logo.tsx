import Image from "next/image";
import logo from "@/assets/quillfire-logo.svg";

/** Full Quillfire Labs logo (vector, designed for dark backgrounds). */
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return <Image src={logo} alt="Quillfire Labs" priority={priority} unoptimized className={className} />;
}
