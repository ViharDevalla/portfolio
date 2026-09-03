import TerminalWindow from './ui/TerminalWindow';

const PHILOSOPHY = [
  {
    file: 'reliability_philosophy.md',
    icon: '📊',
    title: 'Error Budgets Over Uptime Theater',
    body: 'Reliability is not about achieving 100% uptime — it is about defining, measuring, and defending a promise. I work in error budgets, not vanity metrics.',
  },
  {
    file: 'incident_command.md',
    icon: '⚡',
    title: 'On-call Is a Feedback Loop',
    body: 'Every page is a signal. Incidents are not failures to be ashamed of — they are the most honest data about system behavior. I treat them as learning opportunities.',
  },
  {
    file: 'toil_reduction.md',
    icon: '⚙️',
    title: 'Every Runbook Is Future Automation',
    body: 'If I am doing the same thing twice, I am doing it wrong the second time. Toil reduction is not laziness — it is engineering discipline.',
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          vihar@five-nines:~$ cat about.md
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">about</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
      </div>

      <div className="md:grid md:grid-cols-5 gap-12 items-start">
        {/* Identity statement */}
        <div className="md:col-span-2 mb-10 md:mb-0">
          <TerminalWindow title="about.md">
            <div className="space-y-4 text-sm leading-relaxed">
              <p className="text-white font-semibold">
                I build systems that stay up.
              </p>
              <p className="text-gray-300">
                I own the reliability of financial infrastructure that processes billions in daily transactions. My job is to make the platform invisible — the kind of reliable where nobody notices it.
              </p>
              <p className="text-gray-300">
                I came up through cybersecurity and systems research before moving into SRE. That background means I approach production systems as an adversary would: asking where they break before they do.
              </p>
              <p className="text-sre-muted text-xs mt-4 border-t border-sre-border pt-4">
                <span className="text-sre-cyan">location:</span> Bengaluru, India<br />
                <span className="text-sre-cyan">certs:</span> <span className="text-sre-green">CKA</span> + <span className="text-sre-cyan">CKS</span> (Linux Foundation)<br />
                <span className="text-sre-cyan">focus:</span> Kubernetes, Observability, Platform Engineering<br />
                <span className="text-sre-cyan">open_to:</span> Senior SRE / Staff SRE / Platform Eng roles
              </p>
            </div>
          </TerminalWindow>
        </div>

        {/* Philosophy cards */}
        <div className="md:col-span-3 space-y-4">
          {PHILOSOPHY.map((item) => (
            <div key={item.file} className="bg-sre-surface border border-sre-border rounded-lg p-5 hover:border-sre-muted/40 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-sre-cyan">{item.file}</span>
              </div>
              <h3 className="font-mono text-sm font-bold text-sre-green mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
