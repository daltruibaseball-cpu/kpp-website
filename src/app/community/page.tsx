'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Community() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if popup was already shown this session
    const seenKey = 'kpp_popup_seen';
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(seenKey)) {
        setShowPopup(true);
        sessionStorage.setItem(seenKey, 'true');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPopup(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Road to 90+ Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
        >
          <div className="w-full max-w-[560px] bg-white rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold m-0">Get &quot;Road to 90+&quot; FREE</h2>
                <span className="inline-block mt-2 px-3 py-1.5 bg-gray-100 rounded-full font-bold text-sm">
                  $199.99 value • Instant access
                </span>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-2xl leading-none px-2 py-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="mt-4 mb-4 text-gray-800 leading-relaxed">
              Drop your <b>name</b>, <b>email</b>, and <b>number</b> and I&apos;ll send you the Road to 90+ guide for free.
              (Training, mechanics, workload, mentality — everything you need to climb.)
            </p>

            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re In!</h3>
                <p className="text-gray-600 mb-4">Check your email for the Road to 90+ guide.</p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                className="grid gap-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setError('');
                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    offer: 'Road to 90+ Free ($199.99 value)',
                  };
                  try {
                    const res = await fetch('/api/lead', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });
                    if (res.ok) {
                      setIsSuccess(true);
                    } else {
                      setError('Something went wrong. Please try again.');
                    }
                  } catch {
                    setError('Something went wrong. Please try again.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <input
                  className="w-full px-3 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
                  name="name"
                  placeholder="Name"
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    className="w-full px-3 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="w-full px-3 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black"
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gray-900 text-white font-extrabold rounded-xl hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send me the FREE guide'}
                </button>
                <p className="text-xs text-gray-500 mt-1">No spam. Just pitching resources + updates.</p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="max-w-[980px] mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
          Join the Pitching Community (350+ members)
        </h1>

        <p className="text-lg text-gray-900 leading-relaxed mb-6">
          If you want consistent velo gains, healthier arms, better command, and a stronger mindset—
          you need the right environment. Inside the Skool community, you&apos;ll get pitching education,
          real talk, and updates that actually help you improve week to week.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div className="border border-gray-200 rounded-2xl p-4">
            <h3 className="font-black mb-1">Pitching Advice + Mechanics</h3>
            <p className="text-gray-700 leading-snug">Simple, actionable breakdowns you can apply right away.</p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-4">
            <h3 className="font-black mb-1">PRs, Updates, & Wins</h3>
            <p className="text-gray-700 leading-snug">See what&apos;s working for other guys + stay motivated.</p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-4">
            <h3 className="font-black mb-1">Mentality + Routine</h3>
            <p className="text-gray-700 leading-snug">Confidence, discipline, and how to stay consistent under pressure.</p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-4">
            <h3 className="font-black mb-1">Ask Questions</h3>
            <p className="text-gray-700 leading-snug">Get clarity when you&apos;re stuck instead of guessing for months.</p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap mt-6">
          <a
            href="https://www.skool.com/kirkspitchingperformance-free-9507/about?ref=e7ce2a7ce9fb48cda46ebce8a3faf36f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-5 py-3.5 rounded-xl font-black hover:bg-black transition-colors"
          >
            Join the Skool
          </a>

          <Link
            href="/"
            className="inline-block bg-gray-100 text-gray-900 px-5 py-3.5 rounded-xl font-black hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
