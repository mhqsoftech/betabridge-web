import React from "react";
import {
  UserGroupIcon,
  SmartPhone01Icon,
  AiBrain01Icon,
  Rocket01Icon,
  Bug01Icon,
  Coins01Icon
} from "hugeicons-react";

const usps = [
  {
    icon: UserGroupIcon,
    iconColor: "text-violet-600",
    badge: "Automated Cohorts",
    title: "12-tester reciprocal squads",
    description:
      "Join automated 12-developer squads where mutual testing is tracked daily. A strict 3-strike policy removes inactive testers so you never get stuck."
  },
  {
    icon: SmartPhone01Icon,
    iconColor: "text-purple-600",
    badge: "Device Check",
    title: "Real-time package tracking",
    description:
      "AppCheckerService verifies actual package installation on physical Android devices — eliminating fake opt-ins and emulator abuse."
  },
  {
    icon: AiBrain01Icon,
    iconColor: "text-emerald-600",
    badge: "Fraud Prevention",
    title: "Anti-duplicate pHash AI",
    description:
      "Perceptual hashing analyses submitted screenshots so testers cannot recycle, crop or share proof from other apps."
  },
  {
    icon: Rocket01Icon,
    iconColor: "text-violet-600",
    badge: "Zero Friction",
    title: "1-tap Google Group opt-in",
    description:
      "Direct links for Google Group joining and Play Store closed track enrollment with 1-click promo code copying."
  },
  {
    icon: Bug01Icon,
    iconColor: "text-rose-600",
    badge: "Actionable Reports",
    title: "Structured crash & bug triage",
    description:
      "Bug reports arrive with real device hardware specs (Android OS, model, screen resolution, SDK) attached to your developer inbox."
  },
  {
    icon: Coins01Icon,
    iconColor: "text-amber-600",
    badge: "Proof-of-Work",
    title: "Dynamic credit economy",
    description:
      "Earn credits via daily test tasks, 7-day streaks, and rewarded ad passes, or top up in your native Google Play currency."
  }
];

export default function UspSection() {
  return (
    <section id="features" className="section">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="eyebrow">Why BetaBridge</span>
          <h2 className="h2">Engineered for guaranteed Google Play compliance</h2>
          <p className="lede">
            Unlike unvetted forums or tester exchange groups that fail Google Play reviews, BetaBridge provides automated verification and real developer accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div key={idx} className="card hover:border-slate-300 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200">
                    <Icon size={24} className={usp.iconColor} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                    {usp.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                  {usp.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
