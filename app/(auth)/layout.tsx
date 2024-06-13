"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      {navLink.map((link) => {

        let isActive = pathname.startsWith(link.href)
        return (
          <Link
            className= {`p-3 ${isActive? "fw-bold text-blue-400 underline":"text-black-400"}`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
