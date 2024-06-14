"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        <input
          className="border-black border my-4 p-1 rounded"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
        />
      </div>
      <div className="my-3">
        {navLink.map((link) => {
          let isActive = pathname.startsWith(link.href);
          return (
            <Link
              className={`p-3 bg-yellow-500 ${
                isActive ? "font-bold text-black " : "text-blue-800 font-normal"
              }`}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}


// template.tsx don't preserve the states and new instant of component is created when user nevigated between routes it recreates the dom
