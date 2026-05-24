import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.logoWrapper}>
          <img
            src="/img/logo.png"
            alt="HIVE Logo"
            className={styles.heroLogo}
          />
          <span className={styles.heroTitle}>HIVE</span>
        </div>
        <p className={styles.heroSlogan}>
          A sua ponte entre design e código.<br/>
          <span>Colabore. Padronize. Desenvolva melhor.</span>
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs/introducao">
            Saiba Mais
          </Link>
          <Link className={styles.btnOutline} to="/docs/documentacao">
            Acessar a Documentação
          </Link>
        </div>
      </div>
      <div className={styles.heroOrbs}>
        <div className={styles.orb1}/>
        <div className={styles.orb2}/>
        <div className={styles.orb3}/>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: '🧩',
      title: 'Biblioteca Colaborativa',
      desc: 'Componentes criados e compartilhados por toda a equipe em um único ambiente centralizado e organizado.',
    },
    {
      icon: '🔗',
      title: 'Componentes Funcionais',
      desc: 'Integração direta com o Figma via plugin proprietário: exporte e importe componentes com um clique.',
    },
    {
      icon: '⚡',
      title: 'Multi-framework',
      desc: 'Suporte a React, Angular, Vue e mais. Reutilize componentes em diferentes projetos e stacks.',
    },
    {
      icon: '🏷️',
      title: 'Tags & Filtros',
      desc: 'Encontre rapidamente o que precisa com sistema avançado de tags, filtros e busca por nome.',
    },
    {
      icon: '🛡️',
      title: 'Controle de Acesso',
      desc: 'Perfis de usuário (comum e administrador) com permissões granulares para maior segurança.',
    },
    {
      icon: '📋',
      title: 'Sistema de Reports',
      desc: 'Reporte inconsistências em colaborações e acompanhe o ciclo completo de resolução.',
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <p className={styles.featuresTagline}>
          Uma plataforma para equipes que constroem interfaces com consistência, colaboração e agilidade.
        </p>
        <div className={styles.cardsGrid}>
          {features.map((f, i) => (
            <div className={styles.featureCard} key={i}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { n: '01', title: 'Crie no Figma', text: 'Projete seu componente no Figma seguindo o Brand Guide da ETS.' },
    { n: '02', title: 'Exporte via Plugin', text: 'Use o plugin HIVE para exportar o componente como JSON estruturado.' },
    { n: '03', title: 'Publique na Plataforma', text: 'O componente é cadastrado com metadados, tags e preview automático.' },
    { n: '04', title: 'Adicione Código', text: 'Colaboradores adicionam implementações em React, Angular, Vue e mais.' },
    { n: '05', title: 'Reutilize', text: 'Qualquer membro da equipe acessa, copia ou importa de volta ao Figma.' },
  ];

  return (
    <section className={styles.howSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Como funciona</h2>
        <div className={styles.stepsGrid}>
          {steps.map((s, i) => (
            <div className={styles.stepCard} key={i}>
              <span className={styles.stepNumber}>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Acesse a documentação completa</h2>
          <p>
            Descubra todos os detalhes técnicos, arquiteturais e decisões de design
            que tornaram o HIVE uma solução inovadora para o setor da ETS.
          </p>
          <Link
            className={styles.btnPrimary}
            to="/hive_doc1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar Documentação Completa (PDF)
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Início" description="HIVE - Biblioteca colaborativa de componentes UI">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
    </Layout>
  );
}
