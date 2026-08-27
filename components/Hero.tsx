"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayStoreIcon, SecurityCheckIcon, UserGroupIcon, CheckmarkCircle02Icon } from "hugeicons-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=mhq.betabridge.app";

export default function Hero() {
  return (
    <section className="pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="eyebrow">Google Play 14-Day Closed Testing, Solved</span>

            <h1 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 leading-[1.15]">
              Pass Google Play closed testing with{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                12 real developers.
              </span>
            </h1>

            <p className="lede max-w-2xl mx-auto lg:mx-0">
              Automated reciprocal testing squads, physical device tracking, and anti-cheat AI proof verification. Fulfill Google Play&apos;s mandatory 14-day requirement with zero bots and zero hassle.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs sm:text-sm font-medium text-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                <CheckmarkCircle02Icon size={14} className="text-emerald-600" />
                12 real developers
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                <SecurityCheckIcon size={14} className="text-purple-600" />
                Physical device tracking
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                <UserGroupIcon size={14} className="text-violet-600" />
                Automated 14-day cohorts
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <PlayStoreIcon size={18} />
                <span>Get on Google Play</span>
              </a>
              <Link href="/#how-it-works" className="btn-secondary w-full sm:w-auto">
                See how it works
              </Link>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Active testing cohorts forming daily • 100% free to get started</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[9/16] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              <Image
                src="/assets/images/01_Squads_Command_Center.avif"
                alt="BetaBridge Squads command center — 12-tester reciprocal cohort dashboard"
                fill
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-contain"
                priority
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
