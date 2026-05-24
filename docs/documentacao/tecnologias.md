---
id: tecnologias
title: Tecnologias e Ferramentas
sidebar_label: Tecnologias e Ferramentas
sidebar_position: 6
---

# Tecnologias e Ferramentas

O HIVE foi desenvolvido com uma stack moderna, escolhida para garantir robustez, escalabilidade e facilidade de manutenção.

---

## Backend

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1rem', margin:'1.5rem 0'}}>

<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.12)', borderRadius:'14px', padding:'1.25rem'}}>
  <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem'}}>
    <span style={{fontSize:'1.75rem'}}>☕</span>
    <h4 style={{margin:0, color:'#461F68'}}>Java + Spring Boot</h4>
  </div>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Framework principal para desenvolvimento da API REST. Fornece estrutura robusta para criação de endpoints, gerenciamento de dependências e configuração da aplicação.</p>
</div>

<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.12)', borderRadius:'14px', padding:'1.25rem'}}>
  <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem'}}>
    <span style={{fontSize:'1.75rem'}}>🔐</span>
    <h4 style={{margin:0, color:'#461F68'}}>Spring Security + OAuth2</h4>
  </div>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Gerenciamento de autenticação e autorização com controle de acesso baseado em roles, proteção de rotas e validação de tokens JWT emitidos por serviços externos.</p>
</div>

<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.12)', borderRadius:'14px', padding:'1.25rem'}}>
  <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem'}}>
    <span style={{fontSize:'1.75rem'}}>🐰</span>
    <h4 style={{margin:0, color:'#461F68'}}>RabbitMQ</h4>
  </div>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Message broker para processamento assíncrono de notificações e reports. Desacopla o envio de alertas do ciclo de vida da requisição principal.</p>
</div>

<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.12)', borderRadius:'14px', padding:'1.25rem'}}>
  <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem'}}>
    <span style={{fontSize:'1.75rem'}}>📄</span>
    <h4 style={{margin:0, color:'#461F68'}}>Apache Tika</h4>
  </div>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Detecção de MIME Type real em uploads de código. Previne envio de arquivos maliciosos disfarçados de texto, reforçando a segurança da plataforma.</p>
</div>

<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.12)', borderRadius:'14px', padding:'1.25rem'}}>
  <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem'}}>
    <span style={{fontSize:'1.75rem'}}>🗄️</span>
    <h4 style={{margin:0, color:'#461F68'}}>Flyway</h4>
  </div>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Controle de versionamento e migração do banco de dados relacional. Garante evolução estruturada e rastreável do esquema durante o ciclo de desenvolvimento.</p>
</div>

</div>

---

## Frontend

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1rem', margin:'1.5rem 0'}}>

<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.12)', borderRadius:'14px', padding:'1.25rem'}}>
  <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem'}}>
    <span style={{fontSize:'1.75rem'}}>⚛️</span>
    <h4 style={{margin:0, color:'#461F68'}}>React + TypeScript</h4>
  </div>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Base do frontend da plataforma web e do módulo Renderer. TypeScript garante tipagem estática e maior segurança no desenvolvimento.</p>
</div>

<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.12)', borderRadius:'14px', padding:'1.25rem'}}>
  <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem'}}>
    <span style={{fontSize:'1.75rem'}}>🐙</span>
    <h4 style={{margin:0, color:'#461F68'}}>Preact + TypeScript</h4>
  </div>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Framework leve escolhido para o plugin Figma. A leveza do Preact é ideal para o contexto de plugins, que exigem inicialização rápida e baixo consumo de recursos.</p>
</div>

</div>

---

## Design e Prototipação

| Ferramenta | Uso |
|---|---|
| **Figma** | Prototipação das interfaces e desenvolvimento do plugin integrado |
| **Bosch Sans** | Tipografia oficial, recomendada pelo Brand Guide da ETS |

---

## Gestão e Documentação

| Ferramenta | Uso |
|---|---|
| **Jira** | Organização e acompanhamento do desenvolvimento via metodologia Kanban |
| **Docusaurus** | Criação desta documentação web estruturada e navegável |
| **Microsoft Word** | Elaboração da documentação técnica oficial do projeto |
| **GitHub** | Controle de versão e colaboração no código-fonte |

---

## Diagrama da Stack

```
┌──────────────────────────────────────────────────────────┐
│                    HIVE - Stack Completo                 │
├─────────────────┬──────────────────┬─────────────────────┤
│   Plugin Figma  │  Plataforma Web  │     Backend API     │
│                 │                  │                     │
│  Preact + TS    │  React + TS      │   Java Spring Boot  │
│  Plugin API     │  Renderer Module │   Spring Security   │
│  Figma SDK      │                  │   OAuth2 / JWT      │
│                 │                  │   Apache Tika       │
│                 │                  │   RabbitMQ          │
│                 │                  │   Flyway + BD Rel.  │
└─────────────────┴──────────────────┴─────────────────────┘
```
