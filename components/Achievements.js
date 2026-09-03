const CERTS = [
  {
    name: 'CKA',
    full: 'Certified Kubernetes Administrator',
    issuer: 'The Linux Foundation',
    icon: '🎖',
    borderColor: 'border-sre-cyan/40',
    stripColor: 'bg-sre-cyan',
  },
  {
    name: 'CKS',
    full: 'Certified Kubernetes Security Specialist',
    issuer: 'The Linux Foundation',
    icon: '🏅',
    borderColor: 'border-sre-green/40',
    stripColor: 'bg-sre-green',
  },
];

const SPEAKING = [
  {
    event: 'Cloud Security Alliance Annual Summit',
    year: '2023',
    topic: 'Kubernetes Security Automation and Monitoring',
    type: 'Speaker',
  },
  {
    event: 'BSides Annual Summit',
    year: '2023',
    topic: 'Security for Applications and Cloud Platform Automations (IaC)',
    type: 'Training Speaker',
  },
  {
    event: 'CSA Bangalore Chapter',
    year: 'ongoing',
    topic: 'AI Security — monthly meetup sessions',
    type: 'Speaker',
  },
];

const WINS = [
  {
    title: 'Arcesium Season of Code 2024',
    result: '1st Place',
    desc: 'Unified Observability Platform — Signoz integration',
  },
  {
    title: 'Arcesium CTF 2023',
    result: '1st / 127 teams',
    desc: '24-hour internal CTF',
  },
  {
    title: 'ISFCR CTF — PES University',
    result: 'Runner-Up',
    desc: 'Individual category, national-level CTF',
  },
  {
    title: 'ISFCR 2.0 — National Level',
    result: '9th Place',
    desc: 'National cybersecurity CTF',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          vihar@brag-file:~$ cat achievements.yaml
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">achievements</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Certifications */}
        <div>
          <p className="font-mono text-xs text-sre-muted uppercase tracking-widest mb-4">certifications</p>
          <div className="space-y-4">
            {CERTS.map((cert) => (
              <div key={cert.name} className={`bg-sre-surface border rounded-lg p-6 ${cert.borderColor} relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${cert.stripColor}`} />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{cert.icon}</span>
                </div>
                <div className="font-mono text-2xl font-bold text-white mb-1">{cert.name}</div>
                <div className="font-mono text-sm text-gray-400 mb-3">{cert.full}</div>
                <div className="font-mono text-xs text-sre-muted border-t border-sre-border pt-3">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking */}
        <div>
          <p className="font-mono text-xs text-sre-muted uppercase tracking-widest mb-4">speaking</p>
          <div className="space-y-3">
            {SPEAKING.map((talk, i) => (
              <div key={i} className="bg-sre-surface border border-sre-border rounded-lg p-4 hover:border-sre-amber/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-sre-amber">{talk.type}</span>
                  <span className="font-mono text-xs text-sre-muted">{talk.year}</span>
                </div>
                <div className="font-mono text-xs font-bold text-white mb-1">{talk.event}</div>
                <div className="font-mono text-xs text-sre-cyan">{talk.topic}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <p className="font-mono text-xs text-sre-muted uppercase tracking-widest mb-4">awards</p>
          <div className="space-y-3">
            {WINS.map((win, i) => (
              <div key={i} className="bg-sre-surface border border-sre-border rounded-lg p-4 relative overflow-hidden hover:bg-sre-surface2 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-sre-green" />
                <div className="font-mono text-sm font-bold text-white mb-1">{win.result}</div>
                <div className="font-mono text-xs text-gray-300 mb-0.5">{win.title}</div>
                <div className="font-mono text-xs text-sre-muted">{win.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
