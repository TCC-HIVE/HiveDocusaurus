---
id: arquiteturas
title: Arquiteturas
sidebar_label: Arquiteturas
sidebar_position: 4
---

# Arquiteturas

O HIVE é composto por três módulos principais que se comunicam de forma integrada. Esta seção apresenta uma visão técnica e sucinta da organização arquitetural de cada um deles.

---

## Backend (API REST)

O backend do HIVE foi desenvolvido sob o paradigma **RESTful**, utilizando **Java com Spring Boot** como base tecnológica.

### Padrões de Comunicação e Segurança

- **Protocolo e formato:** Todas as trocas de dados ocorrem via `application/json`, com exceção de rotas de upload (`multipart/form-data`) e download (`application/zip`)
- **Autenticação JWT:** Acesso a recursos protegidos exige um token JWT no cabeçalho das requisições. O componente `CustomJwtConverter` processa as claims do token para definir permissões (Roles)
- **Tratamento de erros:** Manipulador global padroniza erros, garantindo que falhas de segurança (`ForbiddenException`) ou de negócio (`BusinessException`) retornem mensagens claras com códigos HTTP semânticos

### Infraestrutura de Suporte

<div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', margin:'1rem 0'}}>
<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'14px', padding:'1.25rem', borderLeft:'4px solid #007BC1'}}>
  <h4 style={{color:'#461F68', margin:'0 0 0.5rem'}}>🔍 Apache Tika</h4>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>Nas rotas de envio de código, o sistema utiliza o Apache Tika para detecção do MIME Type real do conteúdo. Impede que scripts maliciosos sejam enviados disfarçados de arquivos de texto.</p>
</div>
<div style={{background:'#fff', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'14px', padding:'1.25rem', borderLeft:'4px solid #683082'}}>
  <h4 style={{color:'#461F68', margin:'0 0 0.5rem'}}>📨 RabbitMQ</h4>
  <p style={{fontSize:'0.87rem', color:'#3C3C3C', margin:0, lineHeight:1.6}}>O fluxo de notificações é desacoplado via RabbitMQ. Quando um componente é reportado, o sistema publica eventos em exchanges específicas para processamento assíncrono sem onerar a resposta principal.</p>
</div>
</div>

### Principais Grupos de Rotas

| Grupo | Controladores |
|---|---|
| Componentes | `ComponentController`, `ComponentImplementController`, `CodeController` |
| Moderação | `ReportController`, `AdmReportController` |
| Taxonomia | `TagController`, `StackController`, `NormalizationController` |
| Engajamento | `VoteController`, `FavoriteController` |
| Integração | `PluginController` |

---

## Plugin Figma

O plugin é uma extensão para o Figma responsável por realizar a ponte entre o **canvas de design** e a **plataforma web** do HIVE.

### Arquitetura em Duas Camadas

A solução é composta por duas camadas independentes que se comunicam via `postMessage`:

```
┌─────────────────────────────────────────────┐
│              Plugin Figma                    │
│                                             │
│  ┌──────────────────┐  postMessage  ┌──────────────────┐  │
│  │  Interface (src/) │ ◄──────────► │   Lógica (lib/)  │  │
│  │  SPA em Preact   │              │  TypeScript      │  │
│  │  (iframe do UI) │              │  (Plugin API)   │  │
│  └──────────────────┘              └──────────────────┘  │
└─────────────────────────────────────────────┘
```

- **Interface (`src/`):** SPA construída em Preact, renderizada dentro do iframe do plugin. Responsável pela interação com o usuário
- **Lógica do plugin (`lib/`):** TypeScript executado no contexto do Figma, com acesso à Plugin API. Responsável pela manipulação do canvas

### Fluxo de Exportação

1. Usuário acessa o plugin no Figma
2. Seleciona o componente desejado no canvas
3. Plugin serializa a estrutura visual em um **JSON proprietário do HIVE** (contendo layout, estilos, filhos e variantes)
4. JSON é enviado à plataforma via API autenticada
5. Componente é cadastrado com preview automático gerado pelo Renderer

### Fluxo de Importação

1. Usuário busca um componente na plataforma via plugin
2. Plugin recebe o JSON do componente da API
3. A função `createComponentStructure` reconstrói recursivamente o componente no canvas do Figma
4. Estilos, variantes e propriedades são restaurados com fidelidade

---

## Módulo Renderer

O Renderer é um interpretador dinâmico de metadados integrado ao frontend, desenvolvido em **React + TypeScript**.

### Responsabilidade

Em vez de armazenar código-fonte compilado ou imagens rasterizadas, a plataforma persiste apenas a **árvore lógica de nós gráficos** em JSON. O Renderer converte essa estrutura em elementos semânticos do DOM estilizados via CSS em tempo de execução.

### Componentes Principais

| Arquivo | Responsabilidade |
|---|---|
| `FigmaDynamicPage.tsx` | Intercepta o parâmetro de rota e gerencia o ciclo de vida da tela (loading, erro, sucesso) |
| `FigmaComponent.tsx` | Recebe o nó raiz e inicia a varredura recursiva da árvore via `FigmaNodeRenderer` |
| `FigmaNodeRenderer.tsx` | Motor de renderização recursiva: mapeia cada tipo de nó (FRAME, TEXT, VECTOR, INSTANCE) para elementos DOM correspondentes |
| `FigmaService.ts` | Camada de abstração de rede: centraliza chamadas à API REST com autenticação |
| `AuthTokenService.ts` | Controle da sessão e segurança do token de acesso |

### Fluxo de Renderização

```
JSON da API → FigmaDynamicPage → FigmaComponent → FigmaNodeRenderer (recursivo) → DOM + CSS
```

O processamento recursivo garante que componentes com estruturas complexas de aninhamento (frames, grupos, instâncias e variantes) sejam renderizados com fidelidade visual em qualquer tela da plataforma.

---

:::info Detalhamento completo
Diagramas de classes, DER, modelo lógico do banco e documentação completa das rotas da API estão disponíveis na [documentação PDF completa](/hive_doc1.pdf).
:::
