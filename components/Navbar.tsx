"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlayStoreIcon, Menu01Icon, Cancel01Icon } from "hugeicons-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=mhq.betabridge.app";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#screenshots", label: "Screenshots" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5" aria-label="BetaBridge home">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-slate-200">
              <Image
                src="/assets/images/app_icon.avif"
                alt="BetaBridge logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              BetaBridge
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-slate-900 transition-colors">
                {n.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <PlayStoreIcon size={16} />
              <span>Get on Google Play</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <Cancel01Icon size={22} /> : <Menu01Icon size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-200 glass-panel px-4 py-4 space-y-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              {n.label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <PlayStoreIcon size={16} />
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
