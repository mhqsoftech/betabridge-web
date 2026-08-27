"use client";

import React, { useState } from "react";
import { Coins01Icon, FlashIcon, PlayStoreIcon } from "hugeicons-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=mhq.betabridge.app";

const tiers = [
  {
    id: "credits_50",
    name: "Starter",
    credits: 50,
    priceInr: "₹190",
    priceUsd: "$2.00",
    unitInr: "≈ ₹3.80 / credit",
    unitUsd: "≈ 4.00¢ / credit",
    highlight: false,
    description: "Ideal for testing a quick single app update or small campaign."
  },
  {
    id: "credits_150",
    name: "Essential",
    credits: 150,
    priceInr: "₹480",
    priceUsd: "$5.00",
    unitInr: "≈ ₹3.20 / credit",
    unitUsd: "≈ 3.33¢ / credit",
    highlight: false,
    description: "Covers a complete 14-day testing cycle with priority queue."
  },
  {
    id: "credits_300",
    name: "Popular",
    credits: 300,
    priceInr: "₹750",
    priceUsd: "$8.00",
    unitInr: "≈ ₹2.50 / credit",
    unitUsd: "≈ 2.66¢ / credit",
    highlight: true,
    description: "Best choice for active developers launching 2+ app campaigns."
  },
  {
    id: "credits_600",
    name: "Best Value",
    credits: 600,
    priceInr: "₹1,450",
    priceUsd: "$15.00",
    unitInr: "≈ ₹2.42 / credit",
    unitUsd: "≈ 2.50¢ / credit",
    highlight: false,
    description: "Great savings for indie studios and recurring app publishers."
  },
  {
    id: "credits_1200",
    name: "Mega Saver",
    credits: 1200,
    priceInr: "₹2,400",
    priceUsd: "$25.00",
    unitInr: "≈ ₹2.00 / credit",
    unitUsd: "≈ 2.08¢ / credit",
    highlight: false,
    description: "Maximum volume discount. Never worry about credits again."
  }
];

export default function PricingSection() {
  const [isUsd, setIsUsd] = useState(false);

  return (
    <section id="pricing" className="section">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="eyebrow">Transparent pricing</span>
          <h2 className="h2">100% free with reciprocal testing, or top up instantly</h2>
          <p className="lede">
            Earn credits for free by testing fellow developers&apos; apps, or purchase top-ups securely through Google Play Billing in your native local currency.
          </p>

          <div className="flex items-center justify-center pt-4">
            <div className="inline-flex items-center p-1 rounded-xl bg-white/70 backdrop-blur border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setIsUsd(false)}
                className={`h-9 px-4 rounded-lg transition-colors ${
                  !isUsd ? "text-white bg-gradient-to-br from-violet-600 to-violet-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ₹ INR (India)
              </button>
              <button
                onClick={() => setIsUsd(true)}
                className={`h-9 px-4 rounded-lg transition-colors ${
                  isUsd ? "text-white bg-gradient-to-br from-violet-600 to-violet-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                $ USD (Global)
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-600 via-violet-700 to-violet-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-violet-500/40">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-violet-200 text-xs font-semibold border border-white/10">
              <FlashIcon size={12} />
              New developer welcome bonus
            </span>
            <h3 className="text-2xl font-semibold tracking-tight">Get 150 free credits instantly</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Every new developer account receives 150 free starting credits upon email verification — enough to launch your first 14-day closed testing squad at zero cost.
            </p>
          </div>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn shrink-0 bg-white text-violet-700 hover:bg-violet-50"
          >
            <PlayStoreIcon size={16} />
            <span>Claim free credits</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-10 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.id}
              className={`rounded-2xl p-6 flex flex-col justify-between h-full transition-colors ${
                t.highlight
                  ? "bg-white/80 backdrop-blur border-2 border-violet-600"
                  : "bg-white/70 backdrop-blur border border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
                    {t.highlight ? "Most Popular" : t.name}
                  </span>
                  <Coins01Icon size={18} className="text-amber-500" />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-slate-900">{t.name}</h4>
                  <div className="text-3xl font-bold text-slate-900 pt-2">
                    {t.credits}
                    <span className="text-sm font-medium text-slate-500 ml-1">credits</span>
                  </div>
                  <div className="text-xl font-bold text-violet-600 pt-1">
                    {isUsd ? t.priceUsd : t.priceInr}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {isUsd ? t.unitUsd : t.unitInr}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-10 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors ${
                    t.highlight
                      ? "text-white bg-gradient-to-br from-violet-600 to-violet-600 hover:brightness-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span>Buy in app</span>
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
