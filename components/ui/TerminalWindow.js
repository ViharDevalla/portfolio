export default function TerminalWindow({ title = 'terminal', children, className = '' }) {
  return (
    <div className={`bg-sre-surface border border-sre-border rounded-lg overflow-hidden ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-sre-surface2 border-b border-sre-border">
        <span className="w-3 h-3 rounded-full bg-sre-danger opacity-80" />
        <span className="w-3 h-3 rounded-full bg-sre-amber opacity-80" />
        <span className="w-3 h-3 rounded-full bg-sre-green opacity-80" />
        <span className="ml-3 font-mono text-xs text-sre-muted">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
