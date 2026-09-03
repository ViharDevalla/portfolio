const PROJECTS = [
  {
    id: 'reliability-risk-audit',
    name: 'Reliability Risk Audit Scoring System',
    subtitle: 'Firm-Wide Platform Engineering',
    desc: 'Template-based framework in Go that pulls risk auditing metrics from various sources across the firm. Includes a web dashboard to visualize data. Used firm-wide to approve and gate new releases, and to help application teams adopt reliability as part of the SDLC cycle.',
    tags: ['Go', 'Kubernetes', 'Grafana', 'Web Dashboard', 'SLO'],
    impact: 'Gates all firm-wide releases',
    status: 'production',
    github: null,
    link: null,
  },
  {
    id: 'k8s-slack-debugger',
    name: 'Kubernetes Debugging Tool for Slack',
    subtitle: 'Developer Productivity',
    desc: 'Slack bot using the Slack-Bolt Framework that retrieves Kubernetes resource health and surfaces logs, metrics, and network paths directly via Slack. Enables faster diagnostics without kubectl access, improving developer productivity and incident response speed.',
    tags: ['Python', 'Slack-Bolt', 'Kubernetes API', 'K8s', 'DevEx'],
    impact: 'Faster diagnostics for 100+ devs',
    status: 'production',
    github: null,
    link: null,
  },
  {
    id: 'mfa-portal',
    name: 'Multi-Factor Authentication Portal (IAM)',
    subtitle: 'Security & Identity',
    desc: 'Secure, scalable MFA self-service portal using Ping Identity APIs and clustered deployments to manage enterprise MFA device workflows. Built for high-availability with zero trust principles.',
    tags: ['Ping Identity', 'IAM', 'MFA', 'Security', 'Clustered Deployment'],
    impact: 'Enterprise-grade MFA self-service',
    status: 'production',
    github: null,
    link: null,
  },
  {
    id: 'signoz-hackathon',
    name: 'Unified Observability Platform — Signoz',
    subtitle: 'Arcesium Season of Code 2024 🏆',
    desc: 'Won the Arcesium Season of Code Hackathon 2024 by building a platform integration for Signoz — bringing metrics, logs, traces, and events into one singular place. Demonstrated the value of unified observability vs. fragmented tooling.',
    tags: ['Signoz', 'OpenTelemetry', 'Metrics', 'Logs', 'Traces', 'Go'],
    impact: '1st place — internal hackathon',
    status: 'award',
    github: null,
    link: null,
  },
];

const STATUS_STYLE = {
  production: { label: 'production',  cls: 'text-sre-green border-sre-green/40' },
  award:      { label: '🏆 award',    cls: 'text-sre-amber border-sre-amber/40' },
  'open-source': { label: 'open-source', cls: 'text-sre-cyan border-sre-cyan/40' },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          vihar@side-effects:~$ ls -la projects/ --show-hidden-impact
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">projects</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {PROJECTS.map((project) => {
          const st = STATUS_STYLE[project.status] || STATUS_STYLE.production;
          return (
            <div key={project.id} className="bg-sre-surface border border-sre-border rounded-lg overflow-hidden hover:border-sre-muted/40 transition-colors flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 bg-sre-surface2 border-b border-sre-border">
                <span className="font-mono text-xs text-sre-muted">{project.subtitle}</span>
                <span className={`font-mono text-xs px-2 py-0.5 rounded border ${st.cls}`}>
                  {st.label}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-mono text-base font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

                <div className="font-mono text-xs text-sre-green mb-4">
                  impact: {project.impact}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded border border-sre-border text-sre-muted bg-sre-surface2">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-xs text-sre-cyan hover:text-sre-green transition-colors">
                      → github
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-xs text-sre-cyan hover:text-sre-green transition-colors">
                      → link
                    </a>
                  )}
                  {!project.github && !project.link && (
                    <span className="font-mono text-xs text-sre-muted">internal / proprietary</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <a href="https://github.com/ViharDevalla" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border border-sre-cyan/40 text-sre-cyan hover:border-sre-cyan hover:bg-sre-surface2 transition-colors">
          <span>→</span> more on github
        </a>
      </div>
    </section>
  );
}
