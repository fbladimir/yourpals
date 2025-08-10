"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#apps", label: "Apps" },
    { href: "#how", label: "How it works" },
    { href: "#pricing", label: "Pricing" }, // placeholder
    { href: "#safety", label: "Safety" },
    { href: "#blog", label: "Blog" }, // placeholder
  ];
  return (
    <header className="sticky top-6 z-50">
      <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">YourPals</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
            ))}
            <a href="https://moneypal.yourpals.app" className="rounded-xl bg-white/10 px-3 py-1 ring-1 ring-white/10 hover:bg-white/20">Sign in</a>
            <a href="#download" className="rounded-xl bg-blueA px-3 py-1 hover:bg-blueB">Get started</a>
          </nav>
          <button onClick={()=>setOpen(!open)} className="md:hidden rounded-xl bg-white/10 px-3 py-1 ring-1 ring-white/10">Menu</button>
        </div>
        {open && (
          <div className="mt-3 grid gap-2 md:hidden text-sm text-white/80">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 hover:bg-white/10">{n.label}</a>
            ))}
            <a href="https://moneypal.yourpals.app" className="rounded-lg px-3 py-2 hover:bg-white/10">Sign in</a>
            <a href="#download" className="rounded-lg bg-blueA px-3 py-2 text-white hover:bg-blueB">Get started</a>
          </div>
        )}
      </div>
    </header>
  );
}
