import { useState } from 'react';
import Image from 'next/image';
import TypewriterText from './ui/TypewriterText';
import StatusBadge from './ui/StatusBadge';

const BOOT_LINES = [
  { text: 'vihar-devalla.sh — initializing...', className: 'text-sre-muted', pause: 300 },
  { text: '[  OK  ] Runtime: containerd · cni: cilium', className: 'text-sre-green', pause: 80 },
  { text: '[  OK  ] Scheduler: kube-scheduler · leader elected', className: 'text-sre-green', pause: 80 },
  { text: '[  OK  ] Nodes: Ready=6/6 · NotReady=0', className: 'text-sre-green', pause: 80 },
  { text: '[  OK  ] Workloads: Deployments=42/42 · CrashLoopBackOff=0', className: 'text-sre-green', pause: 80 },
  { text: '[  OK  ] Observability: datadog · grafana · elk · all healthy', className: 'text-sre-green', pause: 80 },
  { text: '[  OK  ] On-call rotation: ACTIVE', className: 'text-sre-green', pause: 300 },
  { text: '', className: 'text-sre-muted', pause: 100 },
  { text: '$ whoami --verbose', className: 'text-sre-cyan', pause: 400 },
  { text: 'vihar-devalla · SRE II @ Arcesium', className: 'text-white text-base', pause: 150 },
  { text: 'focus: disaster recovery · reliability risk audit · observability tooling', className: 'text-sre-muted', pause: 60 },
  { text: 'certs: CKA + CKS (Linux Foundation)', className: 'text-sre-muted', pause: 100 },
];

export default function Hero() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center topology-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-sre-green/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 py-24 md:py-0">
        <div className="md:flex items-center gap-16">

          {/* Left: Terminal */}
          <div className="md:w-3/5 order-2 md:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <StatusBadge status="OPERATIONAL" />
              <span className="font-mono text-xs text-sre-amber">
                SRE II · Platform Engineering · CKA + CKS
              </span>
            </div>

            <a
              href="/Vihar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border border-sre-green/50 text-sre-green hover:bg-sre-green/10 hover:border-sre-green transition-colors mb-6"
            >
              <span>↓</span> download resume
            </a>

            <div className="bg-sre-surface border border-sre-border rounded-lg overflow-hidden mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-sre-surface2 border-b border-sre-border">
                <span className="w-3 h-3 rounded-full bg-sre-danger opacity-80" />
                <span className="w-3 h-3 rounded-full bg-sre-amber opacity-80" />
                <span className="w-3 h-3 rounded-full bg-sre-green opacity-80" />
                <span className="ml-3 font-mono text-xs text-sre-muted">vihar@prod-cluster: ~</span>
              </div>
              <div className="p-5 min-h-[220px]">
                <TypewriterText
                  lines={BOOT_LINES}
                  speed={28}
                  startDelay={400}
                  onComplete={() => setBootComplete(true)}
                />
              </div>
            </div>

            {/* Tech tags — appear after boot, no fake numbers */}
            <div
              className={`flex flex-wrap gap-2 transition-opacity duration-700 ${bootComplete ? 'opacity-100' : 'opacity-0'}`}
            >
              {['Kubernetes','AWS','GCP','Datadog','ELK Stack','Grafana','Go','Python','Terraform','Helm','Docker'].map(t => (
                <span key={t} className="font-mono text-xs px-2 py-1 rounded border border-sre-border text-sre-muted bg-sre-surface2 hover:border-sre-green/40 hover:text-sre-green transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="md:w-2/5 order-1 md:order-2 flex justify-center mb-10 md:mb-0">
            <div className="relative">
              <div className="hex-clip w-64 h-64 md:w-72 md:h-72 p-1 bg-gradient-to-b from-sre-green to-sre-cyan animate-pulse-slow">
                <div className="hex-clip w-full h-full overflow-hidden">
                  <Image
                    src="/img/vd.jpg"
                    alt="Vihar Devalla"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-6 right-6 flex items-center gap-1.5 bg-sre-surface border border-sre-border rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-sre-green animate-pulse" />
                <span className="font-mono text-xs text-sre-green">online</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sre-muted animate-bounce">
        <span className="font-mono text-xs">scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
