"use client";

import { useState } from "react";

export default function MissionNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <p className="text-sm text-[#6B6560] mb-5">
        Or stay updated - join our newsletter.
      </p>
      {submitted ? (
        <p className="text-sm font-medium text-[#2D5016]">
          ✓ You&apos;re in the movement. Thank you.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 bg-[#FAF9F6] border border-[#E5DDD3] text-sm text-[#1A1A1A] placeholder-[#6B6560] focus:outline-none focus:border-[#2D5016] transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#2D5016] text-[#FAF9F6] text-sm font-semibold hover:bg-[#1A1A1A] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
