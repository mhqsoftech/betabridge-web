import React from "react";
import Link from "next/link";
import { Shield01Icon, ArrowLeft01Icon } from "hugeicons-react";

export const metadata = {
  title: "Privacy Policy — BetaBridge",
  description: "Privacy Policy for BetaBridge Android Application and Services."
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 pb-8 transition-colors"
        >
          <ArrowLeft01Icon size={18} />
          <span>Back to Home</span>
        </Link>

        {/* Policy Container */}
        <div className="bg-white/70 backdrop-blur p-8 sm:p-12 rounded-2xl border border-slate-200 space-y-8">
          <div className="space-y-3 border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider">
              <Shield01Icon size={16} />
              <span>Legal Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              BetaBridge — Android Test Hub (Package: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">mhq.betabridge.app</code>) • Last updated: 26 August 2026
            </p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              This Privacy Policy describes how <strong>BetaBridge</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;the app&rdquo;) collects, uses, and shares information when you use the BetaBridge Android application (package name <code>mhq.betabridge.app</code>) and related web services.
            </p>
            <p>
              By using BetaBridge you agree to this Policy. If you do not agree, please do not use the app or website.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              1. Who We Are
            </h2>
            <p>
              BetaBridge is operated by the developer listed in the Google Play store listing. For questions about this Policy, contact the support team at{" "}
              <a href="mailto:minhaj99mhq@gmail.com" className="text-violet-600 underline font-semibold">
                minhaj99mhq@gmail.com
              </a>.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              2. Information We Collect
            </h2>
            <h3 className="text-base font-bold text-slate-800">2.1 Information You Provide to Us</h3>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Account Details:</strong> When you sign in with Google, we receive your email address, display name, and profile photo URL from Google Sign-In.</li>
              <li><strong>Registered Apps:</strong> When you register your Android app on BetaBridge, we store its Google Play package name, opt-in URL, app icon URL, and description.</li>
              <li><strong>Testing Activity:</strong> Memberships in Squads, campaigns created or joined, credit transactions, tester-verification records, and disputes.</li>
              <li><strong>Referral Codes:</strong> Referral codes you generate or redeem.</li>
            </ul>

            <h3 className="text-base font-bold text-slate-800 pt-2">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Device Push Token:</strong> A Firebase Cloud Messaging (FCM) token to deliver daily test reminders, task approvals, and squad updates.</li>
              <li><strong>Installed-App Checks:</strong> To verify you have installed a squad-mate&apos;s app during a closed test, our AppChecker verifies whether a specific Play Store package name is installed on your physical device. We do not upload your full installed app list to our servers.</li>
              <li><strong>App Check Attestation:</strong> A Google Play Integrity signal used to prevent bots and abuse.</li>
              <li><strong>Purchase Receipts:</strong> When you purchase credits, Google Play sends us purchase tokens verified server-side.</li>
              <li><strong>Advertising Data:</strong> Google AdMob collects advertising identifiers and interaction data as governed by Google policies.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Matching developers into 12-member reciprocal closed testing squads.</li>
              <li>Tracking 14-day consecutive active test progress and verifying physical installations.</li>
              <li>Awarding and reconciling in-app credits and streak bonuses.</li>
              <li>Preventing fake tester accounts, fraudulent proof reuse, and policy violations.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              4. Third-Party Service Providers
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-800 font-bold">
                  <tr>
                    <th className="p-3">Provider</th>
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Data Processed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Google Firebase</td>
                    <td className="p-3">Authentication, Database, Cloud Functions</td>
                    <td className="p-3">User account, squad state, FCM token</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Google Play Billing</td>
                    <td className="p-3">Credit top-up processing</td>
                    <td className="p-3">Purchase tokens, SKU IDs</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Google AdMob</td>
                    <td className="p-3">Rewarded ads for credits</td>
                    <td className="p-3">Advertising ID, interaction data</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Google Play Integrity</td>
                    <td className="p-3">Bot prevention & anti-abuse</td>
                    <td className="p-3">Device attestation signals</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              5. Account & Data Deletion
            </h2>
            <p>
              You can request permanent account deletion at any time directly inside the app (under <strong>You › Settings › Account › Request account deletion</strong>) or by emailing{" "}
              <a href="mailto:minhaj99mhq@gmail.com" className="text-violet-600 font-semibold underline">
                minhaj99mhq@gmail.com
              </a>. Deletion removes your profile, registered apps, squad memberships, and notifications within 30 days.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              6. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please reach out to us at{" "}
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
