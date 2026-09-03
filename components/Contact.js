const LINKS = [
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/vihardevalla/',
    cmd: 'open linkedin.com/in/vihardevalla',
    color: 'hover:text-sre-cyan hover:border-sre-cyan/40',
  },
  {
    label: 'github',
    href: 'https://github.com/ViharDevalla',
    cmd: 'open github.com/ViharDevalla',
    color: 'hover:text-sre-green hover:border-sre-green/40',
  },
  {
    label: 'email',
    href: 'mailto:vihardevalla@gmail.com',
    cmd: 'sendmail vihardevalla@gmail.com',
    color: 'hover:text-sre-amber hover:border-sre-amber/40',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          vihar@not-on-call-rn:~$ ./connect.sh
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">contact</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
      </div>

      <div className="max-w-lg mx-auto text-center">
        {/* Terminal prompt */}
        <div className="bg-sre-surface border border-sre-border rounded-lg overflow-hidden mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-sre-surface2 border-b border-sre-border">
            <span className="w-3 h-3 rounded-full bg-sre-danger opacity-80" />
            <span className="w-3 h-3 rounded-full bg-sre-amber opacity-80" />
            <span className="w-3 h-3 rounded-full bg-sre-green opacity-80" />
            <span className="ml-3 font-mono text-xs text-sre-muted">connect.sh</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <p className="text-sre-cyan mb-2">vihar@not-on-call-rn:~$ send_message --to vihar</p>
            <p className="text-sre-muted text-xs mb-4">{`// Discussing SRE, reliability, or open to new opportunities`}</p>
            <p className="text-gray-400 text-xs">
              Open to Senior SRE, Staff SRE, and Platform Engineering roles.
              Also happy to talk shop about Kubernetes, observability, or incident response.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 mb-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 bg-sre-surface border border-sre-border rounded font-mono text-sm text-sre-muted transition-colors ${link.color} group`}
            >
              <span className="text-sre-amber group-hover:text-current">$</span>
              <span className="flex-1 text-left ml-3">{link.cmd}</span>
              <span className="text-xs opacity-50 group-hover:opacity-100">→</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="font-mono text-xs text-sre-muted">
          built with Next.js · designed for reliability
        </p>
      </div>
    </section>
  );
}
