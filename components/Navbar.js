import Image from 'next/image';

const NAV_LINKS = [
  { label: 'about',        href: '#about' },
  { label: 'experience',   href: '#experience' },
  { label: 'skills',       href: '#skills' },
  { label: 'achievements', href: '#achievements' },
  { label: 'status',       href: '#status' },
  { label: 'incidents',    href: '#postmortems' },
  { label: 'projects',     href: '#projects' },
  { label: 'papers',       href: '#publications' },
  { label: 'contact',      href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-sre-surface/80 backdrop-blur-md border-b border-sre-border">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <Image src="/logo_2.png" width={32} height={32} alt="logo" className="rounded" />
            <span className="font-mono text-xs text-sre-muted hidden md:block">
              vihar@five-nines:~$
            </span>
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-1 md:gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-sre-muted hover:text-sre-green transition-colors px-1 py-1 hidden md:block"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile: just a few key links */}
            {['experience', 'projects', 'contact'].map((label) => {
              const link = NAV_LINKS.find(l => l.label === label);
              return (
                <a
                  key={label}
                  href={link.href}
                  className="font-mono text-xs text-sre-muted hover:text-sre-green transition-colors px-1 py-1 md:hidden"
                >
                  {label}
                </a>
              );
            })}

            <a
              href="/Vihar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 rounded border border-sre-green/40 text-sre-green hover:bg-sre-green/10 transition-colors ml-1 md:ml-2 shrink-0"
            >
              resume ↓
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
