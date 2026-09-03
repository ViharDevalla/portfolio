const PAPERS = [
  {
    title: 'Temples Restoration using Gated Convolution and Contextual Attention in GANs',
    conference: 'ICSCCC-2023',
    publisher: 'IEEE Xplore',
    year: '2023',
    desc: 'Novel deep learning approach to digitally restore broken and eroded heritage temples and sculptures in India using Gated Convolution and Contextual Attention layers in GANs.',
    tags: ['Deep Learning', 'GANs', 'Computer Vision', 'Heritage Restoration'],
    link: null,
    publisherColor: 'text-sre-cyan',
  },
  {
    title: 'mURLi: A Tool for Detection of Malicious URLs and Injection Attacks',
    conference: 'ICDCTA 2022 — 4th International Conference',
    publisher: 'Procedia Computer Science, Elsevier',
    year: '2022',
    desc: 'Tool for detection of malicious URLs, SQL Injection, and NoSQL Injection attacks using ML and Deep Learning models.',
    tags: ['Cybersecurity', 'ML', 'SQL Injection', 'URL Detection'],
    link: 'https://www.sciencedirect.com/journal/procedia-computer-science/vol/215/suppl/C',
    publisherColor: 'text-sre-amber',
  },
  {
    title: 'Analytical Comparison of Models for Raga Identification in Carnatic Classical Audio',
    conference: 'FRSM Conference',
    publisher: 'AISC (Advances in Intelligent Systems and Computing), Springer',
    year: '2021',
    desc: 'Research on Indian Classical Music classification based on Raga using Machine Learning and Deep Learning models.',
    tags: ['ML', 'Audio Classification', 'Deep Learning', 'Research'],
    link: 'https://link.springer.com/chapter/10.1007/978-981-33-6881-1_18',
    publisherColor: 'text-sre-green',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 max-w-6xl mx-auto px-6 md:px-16">
      <div className="mb-12">
        <p className="font-mono text-sre-amber text-sm mb-2">
          vihar@published:~$ ls papers/ | wc -l && cat each
        </p>
        <h2 className="font-mono text-3xl font-bold text-white section-prompt">publications</h2>
        <div className="ascii-divider mt-4">{'═'.repeat(80)}</div>
      </div>

      <div className="space-y-4">
        {PAPERS.map((paper, i) => (
          <div key={i} className="bg-sre-surface border border-sre-border rounded-lg p-5 hover:border-sre-muted/40 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex-1">
                <h3 className="font-mono text-sm font-bold text-white mb-1">{paper.title}</h3>
                <div className="flex flex-wrap gap-3 font-mono text-xs">
                  <span className="text-sre-muted">{paper.conference}</span>
                  <span className={paper.publisherColor}>{paper.publisher} · {paper.year}</span>
                </div>
              </div>
              {paper.link && (
                <a href={paper.link} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-sre-cyan hover:text-sre-green transition-colors shrink-0">
                  → read paper
                </a>
              )}
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mb-3">{paper.desc}</p>

            <div className="flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded border border-sre-border text-sre-muted bg-sre-surface2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
