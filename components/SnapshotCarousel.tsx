"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize01Icon, Cancel01Icon } from "hugeicons-react";

type Snapshot = {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
};

const snapshots: Snapshot[] = [
  {
    id: "01",
    title: "12-tester reciprocal squads",
    badge: "Squads Hub",
    description: "Automated cohorts of 12 developers testing each other's apps daily for 14–16 days.",
    image: "/assets/images/01_Squads_Command_Center.avif"
  },
  {
    id: "02",
    title: "Real-time package & device check",
    badge: "Anti-Cheat",
    description: "AppChecker verifies physical device package installation.",
    image: "/assets/images/02_Device_Package_Verification.avif"
  },
  {
    id: "03",
    title: "AI proof verification & disputes",
    badge: "Fraud Prevention",
    description: "Perceptual hash blocks fake screenshots and automates dispute resubmission.",
    image: "/assets/images/03_AI_Verified_Proof.avif"
  },
  {
    id: "04",
    title: "1-tap Google Group opt-in",
    badge: "Easy Setup",
    description: "Direct links for Google Group joining, closed track enrollment, and promo codes.",
    image: "/assets/images/04_Google_Group_OptIn.avif"
  },
  {
    id: "05",
    title: "Custom campaigns & escrow",
    badge: "Campaigns",
    description: "Step-by-step instructions, tester bounties, and escrow-backed rewards.",
    image: "/assets/images/05_Bug_Reports_Device_Triage.avif"
  },
  {
    id: "06",
    title: "Actionable bug reports & feedback",
    badge: "Feedback Triage",
    description: "Tester reviews with hardware metadata (OS, model, SDK) attached to your inbox.",
    image: "/assets/images/06_Dynamic_Credit_Economy.avif"
  },
  {
    id: "07",
    title: "Full audit ledger & local IAP",
    badge: "Credit Store",
    description: "Earn credits via daily tasks or top up with Google Play Billing in native currency.",
    image: "/assets/images/07_Transparent_Ledger_IAP.avif"
  },
  {
    id: "08",
    title: "Multi-app dashboard & history",
    badge: "Developer Hub",
    description: "Manage multiple apps simultaneously and track 14-day production readiness.",
    image: "/assets/images/08_Developer_Campaign_Tracker.avif"
  }
];

export default function SnapshotCarousel() {
  const [zoomImage, setZoomImage] = useState<Snapshot | null>(null);

  return (
    <section id="screenshots" className="section">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
          <span className="eyebrow">Visual showcase</span>
          <h2 className="h2">Every screen. Structured, at a glance.</h2>
          <p className="lede">
            Browse the {snapshots.length} core command centers of BetaBridge. Tap any snapshot to enlarge.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
          {snapshots.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setZoomImage(s)}
              className="group text-left rounded-2xl border border-violet-100 bg-white/70 backdrop-blur p-3 hover:border-violet-300 hover:bg-white transition-colors flex flex-col"
              aria-label={`Open snapshot ${s.id}: ${s.title}`}
            >
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-violet-100 bg-gradient-to-br from-violet-50 to-white">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-contain"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase tracking-wider text-violet-700 bg-white/90 border border-violet-200 rounded-md px-1.5 py-0.5">
                  #{s.id}
                </span>
                <span className="absolute top-2 right-2 h-7 w-7 rounded-lg bg-violet-600/90 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize01Icon size={14} />
                </span>
              </div>
              <div className="pt-3 space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-700">
                  {s.badge}
                </span>
                <h3 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                  {s.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setZoomImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={zoomImage.title}
        >
          <div
            className="relative max-w-md max-h-[90vh] w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src={zoomImage.image}
                alt={zoomImage.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="text-center text-white space-y-1 px-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                {zoomImage.badge} • #{zoomImage.id}
              </span>
              <h3 className="text-lg font-semibold">{zoomImage.title}</h3>
              <p className="text-sm text-slate-300">{zoomImage.description}</p>
            </div>
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-2 right-2 h-10 w-10 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
              aria-label="Close"
            >
              <Cancel01Icon size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
