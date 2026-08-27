import React from "react";
import Link from "next/link";
import { Mail01Icon, ArrowLeft01Icon, HelpCircleIcon, Clock01Icon } from "hugeicons-react";

export const metadata = {
  title: "Contact — BetaBridge Developer Support",
  description:
    "Reach BetaBridge developer support directly by email for questions about squads, campaigns, and Google Play closed testing."
};

const SUPPORT_EMAIL = "minhaj99mhq@gmail.com";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 pb-8 transition-colors"
        >
          <ArrowLeft01Icon size={16} />
          <span>Back to home</span>
        </Link>

        <div className="bg-white/70 backdrop-blur rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-8">
          <div className="flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <HelpCircleIcon size={14} />
              <span>Developer support</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Get in touch
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-md">
              Questions about squads, campaigns, escrow, or Google Play closed testing? Email our developer support team directly — we&apos;re happy to help.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
              <Mail01Icon size={26} className="text-slate-900" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Support email
              </span>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="block text-lg sm:text-xl font-semibold text-slate-900 hover:text-violet-600 transition-colors"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>

            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                "[BetaBridge Support] Inquiry"
              )}`}
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-violet-600 transition-colors active:scale-[0.98]"
            >
              <Mail01Icon size={16} />
              <span>Email us</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <Clock01Icon size={14} className="text-emerald-600" />
            <span>We typically reply within 12–24 hours on business days.</span>
          </div>

          <div className="text-xs text-slate-500">
            App package ID:{" "}
            <code className="font-mono bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
              mhq.betabridge.app
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
