export const metadata = {
  title: 'SHILLAB — The Lab for Shillers',
  description:
    'Tools for community shillers. AI post generator, anti-spam safety, performance tracking, and team workflows — in one place.',
  ...
};

<html lang="en">
  <body className="antialiased bg-[#0a0a0f] text-neutral-200 min-h-screen flex flex-col">
    {children}
    <footer className="...">
      <div>© {new Date().getFullYear()} SHILLAB. All rights reserved.</div>
      <div className="...">
        <span>Anti-spam by design</span>
        <span>Built for teams & communities</span>
        <span>X / Telegram / Discord</span>
      </div>
    </footer>
  </body>
</html>
