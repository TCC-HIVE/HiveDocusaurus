---
id: visao-geral
title: Visão Geral
sidebar_label: Visão Geral
sidebar_position: 3
---

# Visão Geral

Esta seção descreve o principal desafio identificado no processo de criação de projetos e na adaptação de novos aprendizes ao Brand Guide da ETS, bem como a forma estratégica e tecnológica com que o HIVE foi desenvolvido para solucioná-lo.

---

## Desafio Identificado

No contexto atual do desenvolvimento de interfaces, é comum que equipes de design e desenvolvimento trabalhem de forma **descentralizada**, o que frequentemente resulta em:

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1rem', margin:'1.5rem 0'}}>
  <div style={{background:'#fff5f5', border:'1px solid #fed7d7', borderRadius:'12px', padding:'1.25rem'}}>
    <span style={{fontSize:'1.5rem'}}>🔄</span>
    <h4 style={{color:'#c53030', margin:'0.5rem 0 0.25rem'}}>Retrabalho constante</h4>
    <p style={{fontSize:'0.87rem', color:'#555', margin:0}}>Recriação de componentes já existentes em outros projetos, desperdiçando tempo e esforço da equipe.</p>
  </div>
  <div style={{background:'#fff5f5', border:'1px solid #fed7d7', borderRadius:'12px', padding:'1.25rem'}}>
    <span style={{fontSize:'1.5rem'}}>🎨</span>
    <h4 style={{color:'#c53030', margin:'0.5rem 0 0.25rem'}}>Inconsistência visual</h4>
    <p style={{fontSize:'0.87rem', color:'#555', margin:0}}>Falta de padronização entre projetos, comprometendo a identidade visual e a experiência do usuário.</p>
  </div>
  <div style={{background:'#fff5f5', border:'1px solid #fed7d7', borderRadius:'12px', padding:'1.25rem'}}>
    <span style={{fontSize:'1.5rem'}}>🚧</span>
    <h4 style={{color:'#c53030', margin:'0.5rem 0 0.25rem'}}>Curva de aprendizado</h4>
    <p style={{fontSize:'0.87rem', color:'#555', margin:0}}>Novos aprendizes têm dificuldade em localizar os recursos padrão do Brand Guide da ETS.</p>
  </div>
  <div style={{background:'#fff5f5', border:'1px solid #fed7d7', borderRadius:'12px', padding:'1.25rem'}}>
    <span style={{fontSize:'1.5rem'}}>🔗</span>
    <h4 style={{color:'#c53030', margin:'0.5rem 0 0.25rem'}}>Lacuna design-código</h4>
    <p style={{fontSize:'0.87rem', color:'#555', margin:0}}>Ausência de uma ferramenta que integre prototipação no Figma com a implementação em código.</p>
  </div>
</div>

---

## Solução: HIVE

Diante desse cenário, o HIVE se posiciona como uma solução que **centraliza, padroniza e facilita** o acesso a componentes de interface, integrando design e desenvolvimento em uma única plataforma colaborativa.

> *"Ao integrar design e código em uma mesma solução, o projeto contribui para a padronização, reduz o retrabalho e otimiza o fluxo de desenvolvimento."*

---

## Componentes do Projeto

O HIVE é composto por **três módulos** que trabalham de forma integrada:

| Módulo | Tecnologia | Responsabilidade |
|---|---|---|
| **Plataforma Web** | React + TypeScript | Interface principal: listagem, cadastro e gerenciamento de componentes |
| **Plugin Figma** | Preact + TypeScript | Exportação e importação de componentes entre Figma e a plataforma |
| **Módulo Renderer** | React + TypeScript | Interpretação do JSON e renderização visual dos componentes |

---

## Benefícios Estratégicos

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1.25rem', margin:'1.5rem 0'}}>
  <div style={{background:'linear-gradient(145deg, #f8f4ff, #fff)', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'16px', padding:'1.5rem'}}>
    <div style={{fontSize:'2rem', marginBottom:'0.75rem'}}>📈</div>
    <h4 style={{color:'#461F68', margin:'0 0 0.5rem'}}>Produtividade</h4>
    <p style={{fontSize:'0.88rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Acesso rápido a componentes prontos reduz significativamente o tempo de desenvolvimento de novas interfaces.</p>
  </div>
  <div style={{background:'linear-gradient(145deg, #f8f4ff, #fff)', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'16px', padding:'1.5rem'}}>
    <div style={{fontSize:'2rem', marginBottom:'0.75rem'}}>🎯</div>
    <h4 style={{color:'#461F68', margin:'0 0 0.5rem'}}>Padronização</h4>
    <p style={{fontSize:'0.88rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Todos os projetos do setor utilizam os mesmos componentes validados, garantindo consistência visual e funcional.</p>
  </div>
  <div style={{background:'linear-gradient(145deg, #f8f4ff, #fff)', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'16px', padding:'1.5rem'}}>
    <div style={{fontSize:'2rem', marginBottom:'0.75rem'}}>🤝</div>
    <h4 style={{color:'#461F68', margin:'0 0 0.5rem'}}>Colaboração</h4>
    <p style={{fontSize:'0.88rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Qualquer membro da equipe pode contribuir com implementações em diferentes frameworks e versões.</p>
  </div>
  <div style={{background:'linear-gradient(145deg, #f8f4ff, #fff)', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'16px', padding:'1.5rem'}}>
    <div style={{fontSize:'2rem', marginBottom:'0.75rem'}}>🎓</div>
    <h4 style={{color:'#461F68', margin:'0 0 0.5rem'}}>Onboarding</h4>
    <p style={{fontSize:'0.88rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Novos aprendizes encontram rapidamente os recursos padrão do Brand Guide já prontos para uso.</p>
  </div>
</div>
