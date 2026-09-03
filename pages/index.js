import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import StatusPage from '../components/StatusPage';
import PostMortems from '../components/PostMortems';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-sre-bg min-h-screen">
      <Head>
        <title>Vihar Devalla — SRE II</title>
        <meta name="description" content="Vihar Devalla — SRE II at Arcesium. CKA + CKS certified. Kubernetes, observability, platform engineering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="kar9ghuvj0MNC5pufN064nDuwPcVlBLXl0jVkBHoH4o" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vihar Devalla — SRE II" />
        <meta property="og:description" content="SRE II at Arcesium. CKA + CKS certified. Kubernetes, observability, platform engineering." />
        <meta property="og:image" content="https://vihar.vercel.app/img/vd.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vihar Devalla — SRE II" />
        <meta name="twitter:description" content="SRE II at Arcesium. CKA + CKS certified. Kubernetes, observability, platform engineering." />
        <meta name="twitter:image" content="https://vihar.vercel.app/img/vd.jpg" />
        <link rel="canonical" href="https://vihar.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vihar Devalla',
              jobTitle: 'SRE II',
              worksFor: {
                '@type': 'Organization',
                name: 'Arcesium',
              },
              url: 'https://vihar.vercel.app/',
              image: 'https://vihar.vercel.app/img/vd.jpg',
              sameAs: [
                'https://www.linkedin.com/in/vihardevalla/',
                'https://github.com/ViharDevalla',
              ],
              knowsAbout: ['Kubernetes', 'Site Reliability Engineering', 'Observability', 'Platform Engineering', 'Cloud Security'],
            }),
          }}
        />
      </Head>

      <Navbar />

      <main>
        <Hero />

        <div className="border-t border-sre-border" />
        <AboutMe />

        <div className="border-t border-sre-border bg-sre-surface/40">
          <Experience />
        </div>

        <div className="border-t border-sre-border" />
        <Skills />

        <div className="border-t border-sre-border bg-sre-surface/40">
          <Achievements />
        </div>

        <div className="border-t border-sre-border" />
        <StatusPage />

        <div className="border-t border-sre-border bg-sre-surface/40">
          <PostMortems />
        </div>

        <div className="border-t border-sre-border" />
        <Projects />

        <div className="border-t border-sre-border bg-sre-surface/40">
          <Publications />
        </div>

        <div className="border-t border-sre-border" />
        <Contact />
      </main>
    </div>
  );
}
