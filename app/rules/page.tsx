import React from "react";
import Link from "next/link";
import { Shield01Icon, ArrowLeft01Icon, CheckmarkCircle02Icon, Bug01Icon, SecurityCheckIcon } from "hugeicons-react";

export const metadata = {
  title: "Tester Conduct & Rules — BetaBridge",
  description: "Tester Conduct, 14-Day Commitment, and Anti-Cheat Rules on BetaBridge."
};

export default function RulesPage() {
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <SecurityCheckIcon size={16} />
              <span>Community Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Tester Conduct & 14-Day Squad Rules
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Ironclad accountability rules to ensure every developer passes Google Play Closed Testing on their first attempt.
            </p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl font-bold text-slate-900">
              1. The 14-Day Consecutive Commitment
            </h2>
            <p>
              When you join a 12-member squad on BetaBridge, you make a binding reciprocal commitment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Install All 11 Squad Apps:</strong> You must install every squad-mate&apos;s app from the official Google Play closed testing track within 24 hours of joining.</li>
              <li><strong>Daily App Engagement:</strong> Open and test each squad app daily for at least 14 consecutive days.</li>
              <li><strong>Do Not Uninstall:</strong> Never uninstall any squad app before your squad completes its 14-day cycle. AppChecker automatically tracks package existence.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              2. Google Group & Closed Track Requirements
            </h2>
            <p>
              To ensure all squad members can install your app without issues:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Add our Google Group email (<code>closed-testers-group@googlegroups.com</code>) to your Closed Testing track in Play Console.</li>
              <li>Enable <strong>All countries and regions</strong> (170+ territories) so developers worldwide can download your build without geo-blocking.</li>
              <li>Click <strong>&ldquo;Send for review&rdquo;</strong> in Publishing Overview to ensure Google approves your track and tester list.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              3. Anti-Cheat & Perceptual Hash (pHash) Verification
            </h2>
            <p>
              To eliminate fake testers and bots:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>No Recycled Screenshots:</strong> Our pHash AI hashes every uploaded test screenshot. Duplicate submissions are auto-rejected.</li>
              <li><strong>Physical Device Checks:</strong> Our background service checks the Android package manager for actual app installation.</li>
              <li><strong>No Emulators:</strong> App Check attestation requires genuine physical Android hardware.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              4. Automated 3-Strikes Violation Policy
            </h2>
            <p>
              Failure to test squad apps or attempting to cheat the credit system triggers our automated penalty system:
            </p>
            <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200 text-rose-900 space-y-2 text-sm">
              <p><strong>Strike 1:</strong> Warning notification + temporary credit hold.</p>
              <p><strong>Strike 2:</strong> 50 credit penalty + removal from active squad.</p>
              <p><strong>Strike 3:</strong> Permanent ban from BetaBridge network cohorts.</p>
            </div>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              5. Dispute & Appeal Process
            </h2>
            <p>
              If a test submission is disputed, testers have 12 hours to re-test and submit fresh verified proof. If you believe a strike was issued in error, contact support at{" "}
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
