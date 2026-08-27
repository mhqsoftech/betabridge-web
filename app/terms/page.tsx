import React from "react";
import Link from "next/link";
import { Shield01Icon, ArrowLeft01Icon } from "hugeicons-react";

export const metadata = {
  title: "Terms of Service — BetaBridge",
  description: "Terms of Service and legal disclaimer for BetaBridge."
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 pb-8 transition-colors"
        >
          <ArrowLeft01Icon size={18} />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white/70 backdrop-blur p-8 sm:p-12 rounded-2xl border border-slate-200 space-y-8">
          <div className="space-y-3 border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider">
              <Shield01Icon size={16} />
              <span>Legal Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              BetaBridge — Android Test Hub (Package: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">mhq.betabridge.app</code>) • Last updated: 26 August 2026
            </p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              These Terms govern your use of the BetaBridge Android application (<code>mhq.betabridge.app</code>) and related services. By using BetaBridge you accept these Terms. If you do not accept them, do not use the app.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              1. What BetaBridge Is
            </h2>
            <p>
              BetaBridge coordinates reciprocal groups of Android developers (&ldquo;Squads&rdquo;) who opt into each other&apos;s Google Play closed tests to satisfy Play Console&apos;s minimum-tester requirements. BetaBridge is not affiliated with Google or Google Play. We do not host or distribute your app binary — all testing happens strictly on Google Play.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              2. Developer Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Provide accurate information about apps you register (real Play package name, working Google Group opt-in URL).</li>
              <li>Actually install, open, and test the apps of squad-mates daily during their 14-to-16 day closed-test window.</li>
              <li>Not upload, register, or promote apps containing malware, spam, misleading functionality, or policy violations.</li>
              <li>Not attempt to falsify test completions, use emulators/bots, or bypass device tracking.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              3. Credits & Purchases
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Credits are an in-app utility currency used to launch campaigns or prioritize testers.</li>
              <li>Credits have no cash value, are non-transferable, and are non-refundable except as required by law or Google Play refund policies.</li>
              <li>Purchased credits are processed via Google Play Billing in your native currency.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              4. Squad Conduct & 3-Strikes Penalty Policy
            </h2>
            <p>
              Squads rely on reciprocal accountability. Leaving a Squad early, uninstalling apps before the 14-day mark, or submitting fraudulent test proofs results in an automated violation strike. After 3 strikes, the account is permanently suspended from squads.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              5. Disclaimers & Limitation of Liability
            </h2>
            <p>
              BetaBridge is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We guarantee peer tester coordination and device tracking, but Google Play production approval remains subject to Google&apos;s independent app review and policies.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              6. Contact Information
            </h2>
            <p>
              For legal inquiries or dispute escalations, email{" "}
              <a href="mailto:minhaj99mhq@gmail.com" className="text-violet-600 font-bold underline">
                minhaj99mhq@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
