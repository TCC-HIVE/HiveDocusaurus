---
id: identidade-visual
title: Identidade Visual
sidebar_label: Identidade Visual
sidebar_position: 5
---

# Identidade Visual

A identidade visual do HIVE foi criada para refletir os valores de **colaboração, inovação e tecnologia**, diferenciando-se dentro do contexto da ETS e do Brand Guide Bosch.

---

## Nome do Projeto

**HIVE** é uma referência direta a *colmeia* — estrutura natural que simboliza colaboração eficiente, organização e trabalho coletivo. Assim como abelhas contribuem para construir algo maior, os usuários do HIVE colaboram para enriquecer uma biblioteca compartilhada de componentes.

---

## Logo

<div style={{textAlign:'center', margin:'2rem 0'}}>
<div style={{display:'inline-flex', alignItems:'center', gap:'1.25rem', background:'linear-gradient(135deg, #2F0A40, #461F68)', padding:'2rem 3rem', borderRadius:'20px'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" style={{width:'72px', height:'72px'}}>
  <defs>
    <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D4AEFF"/>
      <stop offset="50%" stopColor="#9d52ba"/>
      <stop offset="100%" stopColor="#49225B"/>
    </linearGradient>
    <linearGradient id="hg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="rgba(255,255,255,0.3)"/>
      <stop offset="100%" stopColor="rgba(255,255,255,0.05)"/>
    </linearGradient>
  </defs>
  <path d="M40 4 L72 22 L72 58 L40 76 L8 58 L8 22 Z" fill="url(#hg1)"/>
  <path d="M40 14 L62 26 L62 54 L40 66 L18 54 L18 26 Z" fill="url(#hg2)"/>
  <path d="M28 32 L28 48 M28 40 L52 40 M52 32 L52 48" stroke="white" strokeWidth="5" strokeLinecap="round"/>
</svg>
<span style={{fontSize:'3.5rem', fontWeight:900, color:'#fff', letterSpacing:'0.15em'}}>HIVE</span>
</div>
</div>

A logo é composta por um **hexágono estilizado** com aplicação de degradê em tons de roxo e efeitos visuais que remetem a profundidade e movimento.

- O **formato hexagonal** foi escolhido por sua associação direta com colmeias, reforçando o conceito de colaboração
- O **degradê** e os efeitos tridimensionais criam uma sensação de fluidez e dinamismo, representando a constante evolução da plataforma
- As **formas internas** sugerem integração e conexão, simbolizando o compartilhamento de conhecimento

---

## Paleta de Cores

### Tons de Roxo (identidade HIVE)

<div style={{display:'flex', flexWrap:'wrap', gap:'0.75rem', margin:'1rem 0'}}>
{[
  {hex:'#2F0A40', name:'Roxo 900'},
  {hex:'#49225B', name:'Roxo 800'},
  {hex:'#683082', name:'Roxo 700'},
  {hex:'#461F68', name:'Roxo 600'},
  {hex:'#63308F', name:'Roxo 500'},
  {hex:'#8848A6', name:'Roxo 400'},
  {hex:'#8048B0', name:'Roxo 300'},
  {hex:'#B17DDD', name:'Roxo 200'},
].map(c => (
  <div key={c.hex} style={{textAlign:'center'}}>
    <div style={{width:'72px', height:'72px', background:c.hex, borderRadius:'12px', marginBottom:'0.4rem', boxShadow:'0 2px 12px rgba(0,0,0,0.2)'}}/>
    <div style={{fontSize:'0.72rem', fontWeight:600, color:'#3C3C3C'}}>{c.name}</div>
    <div style={{fontSize:'0.68rem', color:'#888', fontFamily:'monospace'}}>{c.hex}</div>
  </div>
))}
</div>

### Cores de Suporte (Brand Guide ETS)

<div style={{display:'flex', flexWrap:'wrap', gap:'0.75rem', margin:'1rem 0'}}>
{[
  {hex:'#000000', name:'Preto'},
  {hex:'#3C3C3C', name:'Cinza Escuro'},
  {hex:'#EFF1F2', name:'Cinza Claro'},
  {hex:'#FFFFFF', name:'Branco', border:true},
  {hex:'#007BC1', name:'Azul Bosch'},
].map(c => (
  <div key={c.hex} style={{textAlign:'center'}}>
    <div style={{width:'72px', height:'72px', background:c.hex, borderRadius:'12px', marginBottom:'0.4rem', boxShadow:'0 2px 12px rgba(0,0,0,0.15)', border: c.border ? '1px solid #ddd' : 'none'}}/>
    <div style={{fontSize:'0.72rem', fontWeight:600, color:'#3C3C3C'}}>{c.name}</div>
    <div style={{fontSize:'0.68rem', color:'#888', fontFamily:'monospace'}}>{c.hex}</div>
  </div>
))}
</div>

As cores do projeto combinam o **Brand Guide da ETS** (azul e cinza) com tons de roxo exclusivos do HIVE, representando inovação, tecnologia e criatividade.

---

## Tipografia

A fonte utilizada no projeto é a **Bosch Sans**, recomendada pelo Brand Guide da ETS. Ela é empregada em três variações de peso:

<div style={{margin:'1.5rem 0', background:'#f8f4ff', borderRadius:'16px', padding:'2rem'}}>
  <div style={{fontWeight:300, fontSize:'1.6rem', color:'#461F68', marginBottom:'0.75rem'}}>Bosch Sans Light — 300</div>
  <div style={{fontWeight:400, fontSize:'1.6rem', color:'#461F68', marginBottom:'0.75rem'}}>Bosch Sans Regular — 400</div>
  <div style={{fontWeight:700, fontSize:'1.6rem', color:'#461F68'}}>Bosch Sans Bold — 700</div>
</div>

:::note
A Bosch Sans é uma fonte proprietária da Robert Bosch GmbH e segue as diretrizes do Brand Guide corporativo.
:::
