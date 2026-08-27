import React from "react";
import { UserGroupIcon, Rocket01Icon, SecurityCheckIcon, CheckmarkCircle02Icon } from "hugeicons-react";

const steps = [
  {
    step: "01",
    icon: UserGroupIcon,
    iconColor: "text-violet-600",
    title: "Join a 12-tester cohort",
    description:
      "Register your Google Play package name. You are automatically paired with 11 other active Android developers in a reciprocal closed testing squad."
  },
  {
    step: "02",
    icon: Rocket01Icon,
    iconColor: "text-purple-600",
    title: "1-tap Google Group setup",
    description:
      "Add our centralized Google Group to your closed testing track in Play Console. All 12 squad members receive instant opt-in access with 1-click promo codes."
  },
  {
    step: "03",
    icon: SecurityCheckIcon,
    iconColor: "text-emerald-600",
    title: "Daily testing & device check",
    description:
      "Squad members install and open your app daily. AppChecker confirms physical device installation and pHash AI validates proof-of-testing."
  },
  {
    step: "04",
    icon: CheckmarkCircle02Icon,
    iconColor: "text-amber-600",
    title: "Graduate to production",
    description:
      "After 14 consecutive days of verified active testing, your closed testing requirement is complete and ready for Google Play production review."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="eyebrow">Simple 4-step process</span>
          <h2 className="h2">How BetaBridge works</h2>
          <p className="lede">
            A fully automated reciprocal testing workflow designed to guarantee your Google Play 14-day compliance without stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-14">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="card hover:border-slate-300 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200">
                    <Icon size={24} className={s.iconColor} />
                  </div>
                  <span className="text-xl font-bold text-slate-300">{s.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
