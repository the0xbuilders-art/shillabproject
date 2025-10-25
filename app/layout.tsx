import './globals.css';

export const metadata = {
  title: 'SHILLAB — The Lab for Shillers',
  description:
    'Nástroje pre shillerov a komunity. AI Composer, antispam, KPI tracking a komunitné riadenie — všetko na jednom mieste.',
  openGraph: {
    title: 'SHILLAB — The Lab for Shillers',
    description:
      'Budujeme nástroje, ktoré robia shilling ľahším a zábavnejším. Od AI Composeru až po KPI tracking.',
    images: ['/brand/hero-title-dark.jpg'],
  },
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body className="antialiased bg-[#0a0a0f] text-neutral-200 min-h-screen flex flex-col">
        {children}

        <footer className="mt-auto border-t border-white/10 text-xs text-neutral-500 py-8 text-center">
          <div className="max-w-screen-xl mx-auto px-4">
            <div>© {new Date().getFullYear()} SHILLAB. Všetky práva vyhradené.</div>
            <div className="mt-2 flex flex-wrap gap-4 justify-center text-[11px] text-neutral-600">
              <span>Anti-spam by design</span>
              <span>Pre tímy &amp; komunitu</span>
              <span>X / Telegram / Discord</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


