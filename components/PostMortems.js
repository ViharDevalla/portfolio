// Real incident patterns encountered — described generically, no fabricated IDs or metrics.
const PATTERNS = [
  {
    category: 'Container Resource Management',
    icon: '⎈',
    scenarios: [
      'OOMKilled pods under bursty workload — memory limits miscalibrated, HPA not scaling fast enough',
      'Sidecar container leaks causing cascading restarts in high-throughput services',
      'CPU throttling at limits causing p99 latency spikes without triggering error-rate alerts',
    ],
    approach: 'Resource profiling with VPA recommendations, right-sizing limits, and tuning HPA thresholds based on actual usage patterns.',
  },
  {
    category: 'Cluster Operations & Upgrades',
    icon: '◼',
    scenarios: [
      'PodDisruptionBudget misconfiguration blocking rolling node upgrades silently',
      'Scheduling failures from taint/toleration drift after node pool changes',
      'etcd latency spikes during large Secret/ConfigMap churn causing API server timeouts',
    ],
    approach: 'Pre-upgrade validation in CI, PDB configuration audits, and change-window runbooks with automated rollback triggers.',
  },
  {
    category: 'Observability Gaps',
    icon: '◉',
    scenarios: [
      'Alertmanager inhibition rules silencing critical alerts during config rollouts',
      'Missing golden signal coverage on newly onboarded services',
      'Log volume spikes saturating ingest pipeline, causing delayed alert correlation',
    ],
    approach: 'Alert coverage reviews as part of service onboarding, end-to-end alert firing tests in staging, and ingest rate limits with graceful degradation.',
  },
  {
    category: 'Platform Resilience',
    icon: '⚡',
    scenarios: [
      'Regional cloud provider issues requiring platform restoration with defined RPO',
      'Dependency failures causing cascading timeouts across downstream services',
      'DNS resolution degradation causing intermittent failures across the mesh',
    ],
    approach: 'Runbook-driven DR playbooks, chaos engineering GameDays to validate failure paths, and cross-team coordination protocols.',
  },
];

export default function PostMortems() {
  return (
    <section id="postmortems" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          {'$ ls incident_patterns/ | sort -u'}
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">incident patterns</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
        <p className="text-sre-muted text-sm mt-4 font-mono">
          {`// Real failure categories encountered. No fabricated IDs or invented numbers.`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PATTERNS.map((pattern) => (
          <div key={pattern.category} className="bg-sre-surface border border-sre-border rounded-lg overflow-hidden hover:border-sre-muted/40 transition-colors">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-sre-surface2 border-b border-sre-border">
              <span className="text-sre-amber font-mono">{pattern.icon}</span>
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                {pattern.category}
              </span>
            </div>

            <div className="p-5">
              {/* Scenarios */}
              <div className="space-y-2 mb-4">
                {pattern.scenarios.map((s, i) => (
                  <div key={i} className="flex gap-2 font-mono text-xs text-gray-400">
                    <span className="text-sre-muted shrink-0 mt-0.5">–</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              {/* Approach */}
              <div className="border-t border-sre-border pt-3">
                <span className="font-mono text-xs text-sre-green">approach: </span>
                <span className="font-mono text-xs text-sre-muted">{pattern.approach}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
