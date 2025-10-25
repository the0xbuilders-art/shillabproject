'use client';

import React, { useState } from 'react';

type Tone = 'hype' | 'seriozne' | 'meme' | 'bullish';

export default function ShillComposerDemo() {
  const [brief, setBrief] = useState(
    'Our token $LAB powers the community. We build real tools (anti-spam, campaign tracking) and we’re still early.'
  );
  const [tone, setTone] = useState<Tone>('hype');
  const [withTags, setWithTags] = useState(true);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function generate() {
    setLoading(true);
    setErrorMsg('');
    setOutput('Generating… 🔄');

    try {
      const res = await fetch('/.netlify/functions/generate-shill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brief,
          tone,
          withTags,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMsg('❗ Could not generate text.');
        setOutput('');
      } else {
        setOutput(data.result);
      }
    } catch (err) {
      setErrorMsg('❗ Server not reachable.');
      setOutput('');
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard() {
    if (!output) return;
    navigator.clipboard.writeText(output);
  }

  return (
    <section className="bg-[#0a0a0f] border border-white/10 rounded-xl p-6 text-neutral-200 shadow-[0_0_40px_rgba(250,204,21,.08)] w-full">
      <div className="text-sm font-medium text-[#facc15] flex items-center gap-2">
        <span>✨</span>
        <span>AI Shill Composer (live demo / MVP)</span>
      </div>

      <p className="text-neutral-400 text-[13px] leading-relaxed mt-2">
        Tell the tool what you want to hype, pick a tone and click Generate.
        Public demo mode will call our serverless function. If an AI key is set
        on the backend, you get AI output. If not, you get a clean fallback
        script you can still post.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* LEFT SIDE = INPUTS */}
        <div className="space-y-4">

          {/* Brief / prompt */}
          <div className="flex flex-col">
            <label className="text-[12px] font-medium text-neutral-300 mb-1">
              Brief / prompt
            </label>
            <textarea
              className="bg-[#0f0f16] border border-white/10 rounded-md text-[13px] leading-relaxed text-neutral-200 p-3 min-h-[96px] outline-none focus:ring-2 focus:ring-[#facc15]/40 focus:border-[#facc15]/40"
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              placeholder="Describe the token/project, why it matters, what you’re trying to hype…"
            />
          </div>

          {/* Tone / style */}
          <div className="flex flex-col">
            <label className="text-[12px] font-medium text-neutral-300 mb-1">
              Tone / style
            </label>
            <select
              className="bg-[#0f0f16] border border-white/10 rounded-md text-[13px] text-neutral-200 p-2 outline-none focus:ring-2 focus:ring-[#facc15]/40 focus:border-[#facc15]/40"
              value={tone}
              onChange={(e) => setTone(e.target.value as Tone)}
            >
              <option value="hype">🔥 high-energy hype</option>
              <option value="bullish">📈 confident / bullish</option>
              <option value="seriozne">📌 informative / serious</option>
              <option value="meme">🤣 meme / playful</option>
            </select>
          </div>

          {/* Hashtags */}
          <div className="flex items-start gap-2">
            <input
              id="withTags"
              type="checkbox"
              checked={withTags}
              onChange={(e) => setWithTags(e.target.checked)}
              className="mt-[3px] h-[14px] w-[14px] rounded border-white/20 bg-[#0f0f16] text-[#facc15] focus:ring-[#facc15]"
            />
            <label
              htmlFor="withTags"
              className="text-[13px] text-neutral-300 leading-snug select-none cursor-pointer"
            >
              Add hashtags at the end
            </label>
          </div>

          {/* Button */}
          <button
            onClick={generate}
            disabled={loading}
            className="inline-flex items-center justify-center rounded-md bg-[#facc15] text-black font-medium text-[13px] px-4 py-2 hover:bg-[#eab308] disabled:opacity-50 disabled:cursor-not-allowed transition w-full md:w-auto"
          >
            {loading ? 'Generating… 🔄' : '⚡ Generate post'}
          </button>
        </div>

        {/* RIGHT SIDE = OUTPUT */}
        <div className="flex flex-col">
          <label className="text-[12px] font-medium text-neutral-300 mb-1 flex items-center gap-2">
            <span>Output</span>
            {output && (
              <button
                onClick={copyToClipboard}
                className="text-[11px] text-[#facc15] hover:text-[#fde047] transition"
              >
                Copy
              </button>
            )}
          </label>

          <div className="bg-[#0f0f16] border border-white/10 rounded-md text-[13px] text-neutral-200 p-3 min-h-[144px] whitespace-pre-line break-words">
            {output
              ? output
              : <span className="text-neutral-500 italic">Your ready-to-post shill text will appear here…</span>}
          </div>

          {errorMsg && (
            <div className="text-[12px] text-red-400 mt-2">
              {errorMsg}
            </div>
          )}

          <p className="text-[11px] text-neutral-500 italic mt-2 leading-relaxed">
            This MVP protects you from obvious scammy wording (guaranteed
            profits, insider claims, etc). Paid / private access adds deeper
            safety filters, multi-post threads, and reply scripts for FUD.
          </p>
        </div>
      </div>
    </section>
  );
}
