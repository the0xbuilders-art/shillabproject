import ShillComposerDemo from './ShillComposerDemo';

export default function Page() {
  return (
    <main className="flex flex-col w-full">

      {/* HERO SEKCIA */}
      <section className="relative overflow-hidden bg-[#0a0a0f]">
        {/* pozadie s obrazkom a jemným svetlom hore */}
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('/brand/hero-title-dark.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0a0a0f]/80 to-[#0a0a0f] pointer-events-none" />
        
        {/* obsah */}
        <div className="relative max-w-screen-xl mx-auto px-4 pt-24 pb-16 text-center text-neutral-200">
          <div className="text-sm tracking-wide text-neutral-400 mb-2">
            The Lab for Shillers
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-100 leading-snug">
            <span className="text-[#facc15] font-semibold">SHILLAB</span>{' '}
            — nástroje, ktoré robia shilling{' '}
            <em className="italic text-neutral-300">ľahším a zábavnejším</em>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-relaxed text-neutral-400">
            The professional shilling ecosystem. Budujeme nástroje, ktoré robia
            shilling jednoduchý a systematický. Od AI Composeru až po KPI
            tracking — všetko na jednom mieste pre tvoju komunitu.
          </p>

          {/* CTA tlačidlá */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="inline-flex items-center justify-center rounded-md bg-[#facc15] text-black font-medium text-sm px-4 py-2 hover:bg-[#eab308] transition"
              href="#demo"
            >
              🚀 Spustiť demo
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-white/20 text-neutral-200 text-sm font-medium px-4 py-2 hover:bg-white/5 transition"
              href="#docs"
            >
              📘 Dokumentácia
            </a>
          </div>

          {/* mini linky pod CTA */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-400 justify-center">
            <span className="flex items-center gap-2">
              <span>🛡️</span>
              <span>Anti-spam by design</span>
            </span>
            <span className="flex items-center gap-2">
              <span>👥</span>
              <span>Pre tímy &amp; komunitu</span>
            </span>
            <span className="flex items-center gap-2">
              <span>💬</span>
              <span>X / Telegram / Discord</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION: TOOLKIT / FEATURES */}
      <section className="bg-[#0d0d12] border-t border-white/10 py-16" id="demo">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-neutral-100">
            Toolkit pre shillerov
          </h2>
          <p className="mt-3 text-center text-neutral-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Vytváraj, distribuuj, sleduj. Žiadny chaos medzi nástrojmi. SHILLAB
            ti dá AI na obsah, reporting a community ops v jednom ekosystéme.
          </p>

          {/* cards / 3 stĺpce */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* AI Shill Composer */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col">
              <div className="text-[#facc15] text-lg font-semibold flex items-center gap-2">
                <span>✨</span>
                <span>AI Shill Composer</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Generuj vlákna, posty a reply do X / Telegram / Reddit s jedným
                klikom. Tone-of-voice, hashtagy a CTA vieš doladiť pred
                odoslaním.
              </p>
              <div className="mt-4 text-[11px] text-neutral-500 italic">
                “Napíš shill pre $LAB ako energický hype” → hotovo.
              </div>
            </div>

            {/* KPI / Reporting */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col">
              <div className="text-[#facc15] text-lg font-semibold flex items-center gap-2">
                <span>📊</span>
                <span>KPI &amp; výkonnosť</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Sleduj, čo reálne funguje. Dashboard kampaní, engagement,
                konverzie. Už žiadne “bral to niekto vážne?” – máš čísla.
              </p>
              <div className="mt-4 text-[11px] text-neutral-500 italic">
                Koľko tweetov → koľko klikov → koľko joinov.
              </div>
            </div>

            {/* Anti-spam / Compliance */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col">
              <div className="text-[#facc15] text-lg font-semibold flex items-center gap-2">
                <span>🛡️</span>
                <span>Anti-spam &amp; safe mode</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Tvor obsah, ktorý nespáli tvoj účet. Safe-syntax, pacing,
                warnings na shady claimy. Pomáhame ti, aby si nebol banovaný.
              </p>
              <div className="mt-4 text-[11px] text-neutral-500 italic">
                Shill smart, nie shady.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: LIVE DEMO */}
      <section className="bg-[#0a0a0f] border-t border-white/10 py-16">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-8">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100">
              Vyskúšaj si Composer
            </h2>
            <p className="mt-3 text-neutral-400 text-[15px] leading-relaxed">
              Napíš, čo chceš shillovať, vyber štýl a nechaj Composer vygenerovať
              tweet/post-ready text. Toto je lokálne demo – všetko prebieha
              v tvojom prehliadači alebo cez náš serverless backend.
            </p>
          </div>

          <ShillComposerDemo />
        </div>
      </section>

      {/* SECTION: ČO V LABÁKU NÁJDEŠ */}
      <section
        className="bg-[#0a0a0f] py-16 border-t border-white/10"
        id="docs"
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-neutral-100">
            Čo v Labáku nájdeš
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 text-[15px] leading-relaxed text-neutral-400">
            <div className="space-y-4">
              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>🧠</span>
                  <span>AI Composer</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Rýchle vlákná, krátke punchy shilly, odpovede pre komentáre.
                </p>
              </div>

              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>📈</span>
                  <span>Performance dashboard</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Ktorý shill skutočne pohnul komunitou? Sleduj to.
                </p>
              </div>

              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>🛡️</span>
                  <span>Safe mode</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Text checker, ktorý ťa upozorní, keď to znie ako scam / spam.
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
                  Viacerí shilleri, jeden workspace. Zdieľané skripty,
                  šablóny, prehľad.
                </p>
              </div>

              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>🔐</span>
                  <span>SLA / SSO / audity</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Pre väčšie tímy. Prístupovky, logy, bezpečnosť.
                </p>
              </div>

              <div>
                <div className="text-[#facc15] font-medium text-sm flex items-center gap-2">
                  <span>⚙️</span>
                  <span>Custom integrácie</span>
                </div>
                <p className="mt-1 text-neutral-400 text-sm">
                  Hooky na tvoju appku, vlastné kanály, vlastné KPI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
