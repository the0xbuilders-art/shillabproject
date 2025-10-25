import './globals.css';

export const metadata = {
  title: 'SHILLAB — The Lab for Shillers',
  description:
    'Tools for community shillers. AI post generator, anti-spam safety, performance tracking, and team workflows — in one place.',
  openGraph: {
    title: 'SHILLAB — The Lab for Shillers',
    description:
      'Generate hype without getting banned. AI Composer, safety checks, KPI tracking and community ops for token teams.',
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
    <html lang="en">
      <body className="antialiased bg-[#0a0a0f] text-neutral-200 min-h-screen flex flex-col">
        {children}

        <footer className="mt-auto border-t border-white/10 text-xs text-neutral-500 py-8 text-center">
          <div className="max-w-screen-xl mx-auto px-4">
            <div>© {new Date().getFullYear()} SHILLAB. All rights reserved.</div>
            <div className="mt-2 flex flex-wrap gap-4 justify-center text-[11px] text-neutral-600">
              <span>Anti-spam by design</span>
              <span>Built for teams & communities</span>
              <span>X / Telegram / Discord</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

