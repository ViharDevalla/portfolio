import StatusBadge from './ui/StatusBadge';

const ARCESIUM_SENIOR = {
  role: 'SRE II',
  team: 'Platform Site Reliability Engineering',
  company: 'Arcesium',
  period: '2023-06 → present',
  location: 'Bengaluru, India',
  initiatives: [
    {
      id: 'INIT_001',
      title: 'Platform Restoration',
      status: 'ACTIVE',
      desc: 'Disaster recovery across regional cloud failures and ransomware scenarios — coordinating cross-functional teams with a clear targeted RPO.',
      priority: 'CRITICAL',
    },
    {
      id: 'INIT_002',
      title: 'Reliability Risk Audit System',
      status: 'COMPLETE',
      desc: 'Designed and built a firm-wide scoring system enabling stakeholders to assess observability posture and application risk across the platform.',
      priority: 'HIGH',
    },
    {
      id: 'INIT_003',
      title: 'Observability Tooling',
      status: 'COMPLETE',
      desc: 'Optimized platform observability and built automation tools that accelerate root cause identification and faster incident resolution.',
      priority: 'MEDIUM',
    },
  ],
  tech: ['Kubernetes', 'AWS', 'GCP', 'Datadog', 'ELK Stack', 'Grafana', 'Go', 'Python', 'Docker', 'Linux'],
};

const PREVIOUS = [
  {
    company: 'Basel Practitioners Private Limited',
    role: 'Technical Intern',
    period: '2021-06 → 2022-07',
    note: 'Led development of BPPL RAMS — a Risk Management Application for Banks. Created the first PoC, managed a team of interns, overseeing frontend, backend, and Docker/AWS deployment.',
  },
];

const PRIORITY_STYLE = {
  CRITICAL: 'text-sre-danger border-sre-danger/50',
  HIGH:     'text-sre-amber border-sre-amber/50',
  MEDIUM:   'text-sre-cyan border-sre-cyan/50',
};

const STATUS_STYLE = {
  ACTIVE:   { cls: 'text-sre-green border-sre-green/40', icon: '▶' },
  COMPLETE: { cls: 'text-sre-muted border-sre-muted/30', icon: '✓' },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          vihar@career.log:~$ kubectl get jobs --sort-by=.status.startTime
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">experience</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
      </div>

      {/* Featured: SRE II */}
      <div className="relative mb-12 border border-sre-green/40 rounded-lg overflow-hidden bg-sre-surface">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sre-green to-sre-cyan" />

        <div className="p-6 md:p-8 pl-8 md:pl-10">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <StatusBadge status="OPERATIONAL" />
                <span className="font-mono text-xs text-sre-muted">[{ARCESIUM_SENIOR.period}]</span>
              </div>
              <h3 className="font-mono text-2xl font-bold text-sre-green">{ARCESIUM_SENIOR.role}</h3>
              <p className="font-mono text-sre-cyan mt-0.5 text-sm">{ARCESIUM_SENIOR.team}</p>
              <p className="font-mono text-sre-cyan text-lg mt-1">@ {ARCESIUM_SENIOR.company}</p>
              <p className="font-mono text-sre-muted text-xs mt-1">{ARCESIUM_SENIOR.location}</p>
            </div>
          </div>

          {/* Key initiatives */}
          <div className="mb-6">
            <p className="font-mono text-xs text-sre-muted uppercase tracking-widest mb-3">
              ▸ key initiatives
            </p>
            <div className="space-y-3">
              {ARCESIUM_SENIOR.initiatives.map((q) => {
                const st = STATUS_STYLE[q.status];
                const pr = PRIORITY_STYLE[q.priority];
                return (
                  <div key={q.id} className={`border rounded p-3 bg-sre-surface2 ${q.status === 'ACTIVE' ? 'border-sre-green/20' : 'border-sre-border'}`}>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs ${st.cls}`}>{st.icon}</span>
                        <span className="font-mono text-xs font-bold text-white">{q.title}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`font-mono text-xs px-1.5 py-0.5 rounded border ${pr}`}>{q.priority}</span>
                        <span className={`font-mono text-xs ${st.cls}`}>[{q.status}]</span>
                      </div>
                    </div>
                    <p className="font-mono text-xs text-sre-muted ml-4">{q.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {ARCESIUM_SENIOR.tech.map((t) => (
              <span key={t} className="font-mono text-xs px-2 py-1 rounded border border-sre-border text-sre-muted bg-sre-surface2 hover:border-sre-green/50 hover:text-sre-green transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Previous roles */}
      <div>
        <p className="font-mono text-sre-muted text-xs mb-6 uppercase tracking-widest">— previous roles —</p>
        <div className="relative pl-6 border-l border-sre-border space-y-6">
          {PREVIOUS.map((role, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full border border-sre-border bg-sre-surface2" />
              <div className="bg-sre-surface2 border border-sre-border rounded p-4 hover:border-sre-muted/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <span className="font-mono text-sm text-white">{role.role}</span>
                  <span className="font-mono text-xs text-sre-muted">[{role.period}]</span>
                </div>
                <div className="font-mono text-xs text-sre-cyan mb-2">@ {role.company}</div>
                <div className="text-xs text-sre-muted">{role.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
