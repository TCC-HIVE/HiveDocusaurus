---
id: visao-geral
title: Visão Geral
sidebar_label: Visão Geral
sidebar_position: 3
---

# Visão Geral

Esta seção descreve o principal desafio identificado no processo de criação de projetos e na adaptação de novos aprendizes ao Brand Guide da ETS, bem como a forma estratégica e tecnológica com que o HIVE foi desenvolvido para solucioná-lo.

<br/>

## Desafio Identificado

No contexto atual do desenvolvimento de interfaces, é comum que equipes de design e desenvolvimento trabalhem de forma descentralizada, o que frequentemente resulta em:

<div className="challenge-card-grid">
  <div className="challenge-card">
    <div className="challenge-card__header">
      <h4>Retrabalho constante</h4>
    </div>
    <div className="challenge-card__body">
      <p>Recriação de componentes já existentes em outros projetos, desperdiçando tempo e esforço da equipe.</p>
    </div>
  </div>
  <div className="challenge-card">
    <div className="challenge-card__header">
      <h4>Inconsistência visual</h4>
    </div>
    <div className="challenge-card__body">
      <p>Falta de padronização entre projetos, comprometendo a identidade visual e a experiência do usuário.</p>
    </div>
  </div>
  <div className="challenge-card">
    <div className="challenge-card__header">
      <h4>Curva de aprendizado</h4>
    </div>
    <div className="challenge-card__body">
      <p>Novos aprendizes têm dificuldade em localizar os recursos padrão do setor.</p>
    </div>
  </div>
  <div className="challenge-card">
    <div className="challenge-card__header">
      <h4>Lacuna design-código</h4>
    </div>
    <div className="challenge-card__body">
      <p>Ausência de uma ferramenta que integre prototipação no Figma com a implementação em código.</p>
    </div>
  </div>
</div>

<br/>

## Solução: HIVE

Diante desse cenário, o HIVE se aoresenta como uma solução que **centraliza, padroniza e facilita** o acesso a componentes de interface, integrando design e código em uma única plataforma colaborativa.

> *Ao integrar design e código em uma mesma solução, o projeto contribui para a padronização, reduz o retrabalho e otimiza o fluxo de desenvolvimento.*

<br/>

## Componentes do Projeto

O HIVE é composto por **quatro módulos** que trabalham de forma integrada:

| Módulo | Tecnologia | Responsabilidade |
|---|---|---|
| **Plataforma Web** | React + TypeScript | Interface principal: listagem, cadastro e gerenciamento de componentes |
| **API Backend** | Spring Boot | Regras de negócio, segurança, armazenamento e fornecimento dos dados para os demais módulos |
| **Plugin Figma** | Preact + TypeScript | Exportação e importação de componentes entre Figma e a plataforma |
| **Módulo Renderer** | React + TypeScript | Interpretação do JSON e renderização visual dos componentes |

<br/>

---