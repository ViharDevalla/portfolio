const OBS_STACK = [
  {
    tool: 'Datadog',
    role: 'Primary APM & Infra Monitoring',
    desc: 'Metrics, traces, and dashboards for platform services. Alerting on golden signals: latency, traffic, errors, saturation.',
    tags: ['APM', 'Metrics', 'Alerting', 'Dashboards'],
    color: 'border-sre-amber/40 text-sre-amber',
  },
  {
    tool: 'ELK Stack',
    role: 'Log Aggregation & Search',
    desc: 'Elasticsearch + Logstash + Kibana for structured log ingestion, search, and anomaly detection across platform services.',
    tags: ['Elasticsearch', 'Logstash', 'Kibana', 'Log Analysis'],
    color: 'border-sre-cyan/40 text-sre-cyan',
  },
  {
    tool: 'Grafana',
    role: 'Visualization & SLO Dashboards',
    desc: 'Custom dashboards for SLO/SLI tracking, capacity planning, and incident correlation. Used for release readiness reviews.',
    tags: ['Dashboards', 'SLO', 'Visualization', 'On-call'],
    color: 'border-sre-green/40 text-sre-green',
  },
  {
    tool: 'Signoz',
    role: 'Unified Observability (Metrics + Logs + Traces)',
    desc: 'Built a platform integration for Signoz at the Arcesium Season of Code 2024 — bringing metrics, logs, traces, and events into one place. Won the hackathon.',
    tags: ['OpenTelemetry', 'Traces', 'Unified Obs', '🏆 Hackathon Winner'],
    color: 'border-sre-green/40 text-sre-green',
  },
];

const RELIABILITY_AREAS = [
  { area: 'Disaster Recovery & Platform Restoration', desc: 'Leading cross-team DR efforts covering regional cloud failures and ransomware scenarios with defined RPO targets.' },
  { area: 'Reliability Risk Audit', desc: 'Firm-wide scoring system to assess observability posture and reliability risk — gates new releases across all application teams.' },
  { area: 'Incident Automation', desc: 'Automation tooling that surfaces root causes faster and reduces manual toil during incidents.' },
  { area: 'SLO-Driven On-call', desc: 'On-call operations grounded in SLIs and error budgets, not ad-hoc alerting.' },
];

export default function StatusPage() {
  return (
    <section id="status" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          {'$ kubectl get observability-stack --all-namespaces'}
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">observability stack</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
      </div>

      {/* Observability tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {OBS_STACK.map((item) => (
          <div key={item.tool} className={`bg-sre-surface border rounded-lg overflow-hidden hover:bg-sre-surface2 transition-colors ${item.color}`}>
            <div className="flex items-center justify-between px-4 py-3 bg-sre-surface2 border-b border-sre-border">
              <span className={`font-mono text-sm font-bold ${item.color.split(' ')[1]}`}>{item.tool}</span>
              <span className="font-mono text-xs text-sre-muted">{item.role}</span>
            </div>
            <div className="p-4">
              <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded border border-sre-border text-sre-muted bg-sre-surface">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reliability focus areas */}
      <div>
        <p className="font-mono text-xs text-sre-muted uppercase tracking-widest mb-6">reliability focus areas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RELIABILITY_AREAS.map((item, i) => (
            <div key={i} className="flex gap-4 bg-sre-surface border border-sre-border rounded p-4 hover:border-sre-muted/40 transition-colors">
              <span className="font-mono text-sre-green mt-0.5">▸</span>
              <div>
                <div className="font-mono text-xs font-bold text-white mb-1">{item.area}</div>
                <div className="font-mono text-xs text-sre-muted leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
