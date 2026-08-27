"use client";

import React, { useState } from "react";
import { ArrowDown01Icon } from "hugeicons-react";

const faqs = [
  {
    q: "What is Google Play's 14-day 12-tester requirement?",
    a: "Google Play requires all personal developer accounts created after November 13, 2023 to run a closed test with at least 12–20 opted-in testers for a minimum of 14 consecutive days before applying for production access. BetaBridge organizes reciprocal developer squads to fulfil this requirement automatically."
  },
  {
    q: "How does reciprocal testing work on BetaBridge?",
    a: "When you join a 12-member squad on BetaBridge, you install and test the apps of 11 fellow developers daily, while all 11 fellow developers install and test your app daily for the 14-day commitment window. Mutual accountability is enforced by automated device tracking."
  },
  {
    q: "How does BetaBridge prevent fake testers or uninstalls?",
    a: "BetaBridge integrates an automated AppCheckerService that verifies actual package installation on physical Android devices. If a tester uninstalls an app or fails daily tasks, they receive an automated violation strike. After 3 strikes, inactive users are permanently removed from squads."
  },
  {
    q: "What is anti-duplicate perceptual hash (pHash) AI?",
    a: "Our pHash verification algorithm analyses the visual structure of submitted test screenshots. It prevents testers from reusing old screenshots, submitting cropped copies, or sharing proof from other apps, guaranteeing authentic test submissions."
  },
  {
    q: "Is BetaBridge free to use?",
    a: "Yes. BetaBridge operates on a reciprocal proof-of-work credit economy. You earn credits by testing other apps, completing 7-day streaks, and claiming daily passes. New developers also receive 150 free starting credits upon email verification. If you want to launch multiple campaigns without testing back, you can purchase credit top-ups in your local currency."
  },
  {
    q: "How do I set up my closed testing track on Google Play Console?",
    a: "In your Play Console, go to Testing → Closed testing, select 'Google Groups', and add our community email: closed-testers-group@googlegroups.com. Ensure 'All countries and regions' are selected so squad members worldwide can install your build without geo-restrictions."
  },
  {
    q: "Does BetaBridge guarantee that Google Play will approve my app?",
    a: "BetaBridge guarantees that you will fulfil the required tester count and 14-day consecutive active testing criteria with verified device activity. Production approval also depends on your app complying with Google Play Developer Program Policies (e.g. content guidelines, stability, privacy policy)."
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 pb-12">
          <span className="eyebrow">Got questions?</span>
          <h2 className="h2">Frequently asked questions</h2>
          <p className="lede">
            Everything you need to know about Google Play closed testing and BetaBridge squads.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur overflow-hidden transition-colors hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`h-9 w-9 shrink-0 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-violet-600 border-violet-200 bg-violet-50" : "bg-white"
                    }`}
                    aria-hidden
                  >
                    <ArrowDown01Icon size={16} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
