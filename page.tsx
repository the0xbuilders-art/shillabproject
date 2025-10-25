import ShillComposerDemo from './ShillComposerDemo';

export default function Page() {
  return (
    <main className="flex flex-col w-full">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0a0a0f]">
        {/* background image and subtle top glow */}
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('/brand/hero-title-dark.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0a0a0f]/80 to-[#0a0a0f] pointer-events-none" />

        {/* content */}
        <div className="relative max-w-screen-xl mx-auto px-4 pt-24 pb-16 text-center text-neutral-200">
          <div className="text-sm tracking-wide text-neutral-400 mb-2">
            The Lab for Shillers
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-100 leading-snug">
            <span className="text-[#facc15] font-semibold">SHILLAB</span>{' '}
            — generate hype without getting banned
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-relaxed text-neutral-400">
            We build tools for people who promote tokens, products and
            communities. AI copy generator, safety filter, campaign tracking and
            team coordination — in one place. Stop copy/pasting chaos in group
            chats. Start running actual campaigns.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="inline-flex items-center justify-center rounded-md bg-[#facc15] text-black font-medium text-sm px-4 py-2 hover:bg-[#eab308] transition"
              href="#demo"
            >
              🚀 Launch live demo
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-white/20 text-neutral-200 text-sm font-medium px-4 py-2 hover:bg-white/5 transition"
              href="#docs"
            >
              📘 Vision & roadmap
            </a>
          </div>

          {/* support bullets under CTA */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-400 justify-center">
            <span className="flex items-center gap-2">
              <span>🛡️</span>
              <span>Anti-spam by design</span>
            </span>
            <span className="flex items-center gap-2">
              <span>👥</span>
              <span>For teams & communities</span>
            </span>
            <span className="flex items-center gap-2">
              <span>💬</span>
              <span>Ship everywhere: X / Telegram / Discord</span>
            </span>
          </div>
        </div>
      </section>

      {/* TOOLKIT / FEATURE GRID */}
      <section className="bg-[#0d0d12] border-t border-white/10 py-16" id="demo">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-neutral-100">
            Toolkit for shillers & community leads
          </h2>
          <p className="mt-3 text-center text-neutral-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Create, distribute, track. Zero spreadsheets. SHILLAB gives you AI
            content, performance insights and community ops in one ecosystem.
          </p>

          {/* 3 cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* AI Shill Composer */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col">
              <div className="text-[#facc15] text-lg font-semibold flex items-center gap-2">
                <span>✨</span>
                <span>AI Shill Composer</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Generate threads, hype posts and replies for X / Telegram /
                Reddit in one click. Pick tone, hashtags, CTA. Get something
                that sounds human — not generic AI noise.
              </p>
              <div className="mt-4 text-[11px] text-neutral-500 italic">
                “Write a high-energy shill for $LAB talking about utility and
                community momentum.”
              </div>
            </div>

            {/* KPI / Reporting */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col">
              <div className="text-[#facc15] text-lg font-semibold flex items-center gap-2">
                <span>📊</span>
                <span>Performance & KPIs</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                See what actually moved the needle. Campaign dashboard,
                engagement, conversions. “Did that shill do anything?” now has a
                real answer.
              </p>
              <div className="mt-4 text-[11px] text-neutral-500 italic">
                Posts → clicks → joins → growth.
              </div>
            </div>

            {/* Anti-spam / Compliance */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col">
              <div className="text-[#facc15] text-lg font-semibold flex items-center gap-2">
                <span>🛡️</span>
                <span>Anti-spam / Safe mode</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Post loud, don’t get nuked. We warn you about scammy phrases,
                overpromises (“100x guaranteed”), crazy timelines and stuff
                that’ll get you flagged.
              </p>
              <div className="mt-4 text-[11px] text-neutral-500 italic">
                Shill smart, not shady.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO SECTION */}
      <section className="bg-[#0a0a0f] border-t border-white/10 py-16">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-8">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100">
              Try the Composer
            </h2>
            <p className="mt-3 text-neutral-400 text-[15px] leading-relaxed">
              Tell the tool what you want to hype. Pick tone. Click Generate.
              You’ll get a social-ready post you can copy into X / Telegram /
              Discord. This is the same engine we’re building for teams.
            </p>
            <p className="mt-2 text-neutral-500 text-[12px] leading-relaxed italic">
              In public demo mode we either call our serverless function or
              fall back to a local generator. Private access = full AI with
              safety guardrails.
            </p>
          </div>

          <ShillComposerDemo />
        </div>
      </section>

      {/* ROADMAP / WHAT'S IN THE LAB */}
      <section
        className="bg-[#0a0a0f] py-16 border-t border-white/10"
        id="docs"
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-neutral-100">
            What we’re building next
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 text-[15px] leading-relaxed text-neutral-400">
            <div className="space-y-4">
              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>🧠</span>
                  <span>AI Composer for teams</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Fast threads, snappy replies, “answer this FUD in 1 line”
                  responses for comments.
                </p>
              </div>

              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>📈</span>
                  <span>Performance dashboard</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Which shill actually moved the community? Now you’ll know.
                </p>
              </div>

              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>🛡️</span>
                  <span>Safe mode</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Risk checker that flags spammy claims before you post.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>🤝</span>
                  <span>Team workspaces</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Multiple shillers, one shared workspace. Scripts, templates,
                  reporting in one view.
                </p>
              </div>

              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>🔐</span>
                  <span>Access & audit</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  For bigger teams: roles, access control, who posted what.
                </p>
              </div>

              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>⚙️</span>
                  <span>Custom integrations</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Hooks to your bot, your campaign tracker, your KPIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
