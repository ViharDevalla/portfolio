import StatusBadge from './ui/StatusBadge';

const PILLARS = [
  {
    id: 'container_orchestration',
    label: 'Container Orchestration',
    icon: '⎈',
    skills: [
      'Kubernetes (CKA + CKS certified)',
      'Docker / Linux Containers',
      'Helm',
      'GitOps / ArgoCD',
      'K8s API / Operators',
    ],
  },
  {
    id: 'observability',
    label: 'Observability',
    icon: '◉',
    skills: [
      'Datadog',
      'Grafana',
      'ELK Stack',
      'SLO / SLI / Error Budgets',
      'Signoz',
    ],
  },
  {
    id: 'platform_cloud',
    label: 'Platform & Cloud',
    icon: '◼',
    skills: [
      'AWS',
      'GCP',
      'Terraform / IaC',
      'CI/CD Pipelines',
      'Linux Systems',
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    icon: '⚙',
    skills: [
      'Go',
      'Python',
      'JavaScript',
      'PostgreSQL / MongoDB',
      'Bash / Automation',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          vihar@tool-shed:~$ kubectl describe skills --output=wide
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">skills</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PILLARS.map((pillar) => (
          <div key={pillar.id} className="bg-sre-surface border border-sre-border rounded-lg overflow-hidden hover:border-sre-border/80 transition-colors">
            <div className="flex items-center justify-between px-4 py-3 bg-sre-surface2 border-b border-sre-border">
              <div className="flex items-center gap-2">
                <span className="text-sre-amber font-mono">{pillar.icon}</span>
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  {pillar.label}
                </span>
              </div>
              <StatusBadge status="OPERATIONAL" size="xs" />
            </div>

            <div className="p-4 flex flex-wrap gap-2">
              {pillar.skills.map((skill) => (
                <span key={skill} className="font-mono text-xs px-2 py-1 rounded border border-sre-border text-gray-300 bg-sre-surface2 hover:border-sre-green/40 hover:text-sre-green transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
