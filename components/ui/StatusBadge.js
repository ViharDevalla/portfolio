const STATUS_CONFIG = {
  OPERATIONAL: { color: 'text-sre-green', dot: 'bg-sre-green', border: 'border-sre-green/30' },
  DEGRADED:    { color: 'text-sre-amber', dot: 'bg-sre-amber', border: 'border-sre-amber/30' },
  INCIDENT:    { color: 'text-sre-danger', dot: 'bg-sre-danger', border: 'border-sre-danger/30' },
};

export default function StatusBadge({ status = 'OPERATIONAL', size = 'sm' }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.OPERATIONAL;
  const textSize = size === 'xs' ? 'text-xs' : 'text-xs';

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border ${cfg.border} ${cfg.color} font-mono ${textSize} bg-sre-surface2`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} animate-pulse`} />
      {status}
    </span>
  );
}
