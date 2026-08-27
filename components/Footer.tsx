import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail01Icon,
  CheckmarkCircle02Icon,
  GlobalIcon,
  PlayStoreIcon,
  ArrowRight01Icon,
  Shield01Icon,
  SecurityCheckIcon,
  AiBrain01Icon
} from "hugeicons-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=mhq.betabridge.app";

const platform = [
  { href: "/#features", label: "Core features" },
  { href: "/#screenshots", label: "App showcase" },
  { href: "/#how-it-works", label: "14-day cohorts" },
  { href: "/#pricing", label: "Credit store" },
  { href: "/#faq", label: "Developer FAQ" }
];

const legal = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/rules", label: "Tester conduct rules" },
  { href: "/ads.txt", label: "ads.txt", external: true }
];

const trust = [
  { icon: SecurityCheckIcon, label: "Physical device verification" },
  { icon: AiBrain01Icon, label: "pHash AI anti-fraud" },
  { icon: Shield01Icon, label: "Escrow-backed campaigns" }
];

export default function Footer() {
  return (
    <footer className="mt-12 text-slate-300 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(1200px 500px at 10% 0%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(900px 400px at 100% 0%, rgba(79,70,229,0.25), transparent 60%), linear-gradient(180deg, #1e1b4b 0%, #0f0c29 100%)"
        }}
      />

      <div className="container-page pt-14 pb-8">
        {/* CTA banner */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-violet-300 bg-violet-500/15 border border-violet-400/25 rounded-full px-2.5 py-0.5">
              <PlayStoreIcon size={12} />
              <span>Available on Google Play</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              Ready to pass closed testing?
            </h3>
            <p className="text-sm text-slate-300 max-w-md">
              Join an automated 12-tester squad today. 150 free credits on signup — no card required.
            </p>
          </div>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl font-semibold text-sm text-white bg-gradient-to-br from-violet-600 to-violet-800 hover:brightness-110 shadow-lg shadow-violet-900/30 transition-all"
          >
            <PlayStoreIcon size={18} />
            <span>Get on Google Play</span>
            <ArrowRight01Icon size={16} />
          </a>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-12">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="BetaBridge home">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/15">
                <Image
                  src="/assets/images/app_icon.avif"
                  alt="BetaBridge"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">BetaBridge</span>
            </Link>
            <p className="text-sm text-slate-300/90 max-w-md leading-relaxed">
              An automated peer-to-peer closed testing coordination platform built for Android developers to satisfy Google Play&apos;s 14-day 12-tester policy with zero fake accounts.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {trust.map((t) => {
                const Icon = t.icon;
                return (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-200 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                  >
                    <Icon size={12} className="text-violet-300" />
                    {t.label}
                  </span>
                );
              })}
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-400/25 mt-2">
              <CheckmarkCircle02Icon size={14} />
              <span>100% Google Play policy compliant</span>
            </div>
          </div>

          <nav className="lg:col-span-2 space-y-3" aria-label="Platform">
            <h4 className="text-xs font-semibold text-white/90 tracking-wider uppercase">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              {platform.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-300 hover:text-white hover:pl-1 transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2 space-y-3" aria-label="Legal">
            <h4 className="text-xs font-semibold text-white/90 tracking-wider uppercase">
              Legal & rules
            </h4>
            <ul className="space-y-2 text-sm">
              {legal.map((l) =>
                l.external ? (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white hover:pl-1 transition-all"
                    >
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-slate-300 hover:text-white hover:pl-1 transition-all"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white/90 tracking-wider uppercase">
              Support & app
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail01Icon size={14} className="text-violet-300" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                      Contact
                    </span>
                    <span className="text-sm">Developer support</span>
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:minhaj99mhq@gmail.com"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail01Icon size={14} className="text-violet-300" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                      Email
                    </span>
                    <span className="text-sm">minhaj99mhq@gmail.com</span>
                  </span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <GlobalIcon size={14} className="text-violet-300" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                      Package ID
                    </span>
                    <code className="text-sm font-mono text-slate-200">mhq.betabridge.app</code>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} BetaBridge. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-md">
            Independent developer platform. Not affiliated with Google LLC. Android and Google Play are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
