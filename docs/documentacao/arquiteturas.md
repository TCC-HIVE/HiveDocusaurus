---
id: arquiteturas
title: Arquiteturas
sidebar_label: Arquiteturas
sidebar_position: 4
---

# Arquiteturas

O HIVE é composto por três módulos principais que se comunicam de forma integrada. Esta seção apresenta uma visão técnica e sucinta da organização arquitetural de cada um deles.

<br/>

## Visão Geral

Os três módulos do HIVE - **Plugin Figma**, **Backend (API REST)** e **Frontend Web** (que inclui o Renderer) - operam de forma desacoplada e se integram via contratos de dados bem definidos. O JSON proprietário do HIVE é o recurso central que transita entre todos eles: é produzido pelo Plugin, persistido e gerenciado pelo Backend, e interpretado pelo Renderer no Frontend - além de copiado da plataforma para reimport do componente no Figma. 

### Fluxo de Comunicação

| Origem | Destino | Canal | Formato |
|---|---|---|---|
| Backend | Plugin Figma | HTTP (shareToken) | `application/json` |
| Frontend | Backend | HTTP/REST | `application/json` |
| Frontend | Backend | HTTP/REST (POST de componente) | `multipart/form-data` (JSON data + jsonFile) | 
| Backend | Frontend | HTTP/REST | `application/json` |
| Backend | MySQL | Spring Data JPA | SQL |
| Backend | RabbitMQ | AMQP | Eventos assíncronos |

### Diagrama da arquitetura geral
![Diagrama da arquitetura geral do HIVE](/img/arquitetura.svg)

<br/>

## Backend (API REST)

O backend do HIVE foi desenvolvido sob o padrão **RESTful**, utilizando **Java com Spring Boot** como base tecnológica.

### Padrões de Comunicação e Segurança

- **Protocolo e formato:** Todas as trocas de dados ocorrem via `application/json`, com exceção de rotas de upload (`multipart/form-data`) e download (`application/zip`);
- **Autenticação JWT:** Acesso a recursos protegidos exige um token JWT no cabeçalho das requisições. O Spring Security processa as claims do token para definir permissões (roles), enquanto o componente `CurrentUserService` disponibiliza informações do usuário autenticado (como identificador, nome e permissões) para uso nas regras de negócio;
- **Tratamento de erros:** Um manipulador global padroniza erros, garantindo que falhas de segurança (`ForbiddenException`) ou de negócio (`BusinessException`) retornem mensagens claras com códigos HTTP semânticos.

### Controllers e Recursos

O backend expõe grupos de endpoints organizados por domínio. Cada controller responde às operações de seu recurso, aplicando controle de acesso antes de delegar ao Service:

- **ComponentController / AdministrationController** — ciclo de vida dos componentes (criação, edição, desativação, recomendações, recentes e demais listagens);
- **CodeController / ComponentImplementController** — armazenamento físico de código e implementações colaborativas em diferentes stacks e versões;
- **ReportController / AdministrationReportController** — denúncias e moderação administrativa;
- **TagController / NormalizationController / StackController / StackVersionController** — taxonomia e gestão stacks e versões;
- **VoteController / FavoriteController** — sistema de curtidas e favoritar;
- **PluginController** — geração e validação de tokens temporários para importação de um componente no Figma.

### Infraestrutura de Suporte

<div className="support-card-grid">
  <article className="support-card">
    <h4>Apache Tika</h4>
    <div className="support-card__divider" aria-hidden="true"></div>
    <p>Nas rotas de envio de código, o sistema utiliza o Apache Tika para detecção do MIME Type real do conteúdo, impedindo que scripts maliciosos sejam enviados disfarçados de arquivos de texto.</p>
  </article>

  <article className="support-card">
    <h4>RabbitMQ</h4>
    <div className="support-card__divider" aria-hidden="true"></div>
    <p>O fluxo de notificações de reports é desacoplado via RabbitMQ. Quando um componente é reportado, o sistema publica um evento que é processado de forma assíncrona, permitindo que a resposta ao usuário seja retornada mais rapidamente.</p>
  </article>
</div>

<br/>

## Plugin Figma

O plugin é uma extensão para o Figma responsável por realizar a ponte entre o **canvas de design** e a **plataforma web** do HIVE, possibilitando dois fluxos principais: exportação de componentes do Figma para a biblioteca colaborativa e importação de componentes da plataforma de volta ao canvas.

### Arquitetura em Duas Camadas

A solução é composta por duas camadas independentes que se comunicam via `postMessage`:

- **Interface (`src/`):** SPA construída em Preact, renderizada dentro do iframe do plugin. Responsável pela interação com o usuário através das telas de Splash, Home, Export, Import;
- **Lógica do plugin (`lib/`):** TypeScript executado no contexto do Figma, com acesso à Plugin API. Responsável pela manipulação do canvas e por toda a serialização/reconstrução dos componentes.

A comunicação entre as camadas segue o padrão de **mensagens tipadas** (`msg.type`): a UI despacha ações como `EXPORT_REQUEST` e `IMPORT_REQUEST`, e o plugin responde com eventos como `PREVIEW_UPDATE` e `DOWNLOAD_FILE`.

### Arquivos-Chave da Camada Lógica

| Arquivo | Responsabilidade |
|---|---|
| `code.ts` | Ponto central de controle: recebe mensagens da UI, aciona exportação, importação, preview e notificações nativas do Figma |
| `component_schema.ts` | Define o contrato JSON proprietário do HIVE - interfaces TypeScript com layout, estilos, filhos, variantes, efeitos e interações |
| `export.ts` | Serialização recursiva do componente e geração de preview |
| `import.ts` | Reconstrói recursivamente o componente no canvas com fidelidade visual |

### Fluxo de Exportação

1. Usuário seleciona o componente no canvas do Figma
2. Plugin ativa listeners e gera preview
3. Usuário confirma a exportação
4. Plugin percorre recursivamente a estrutura e as propriedades do componente são serializadas para o **JSON proprietário do HIVE**
5. JSON é disponibilizado para download
6. Usuário realiza upload na plataforma web, onde Renderer gera o preview automático

### Fluxo de Importação

1. Usuário clica em "Copiar para o Figma" na plataforma web
2. Plataforma gera um **token temporário** (validade de 10 minutos) e copia para a área de transferência
3. Usuário cola o token no plugin do Figma
4. Plugin consulta a rota pública da API (sem autenticação)
5. API retorna o JSON;
6. Plugin gera preview e usuário confirma a importação
7. A lógica de importação é ativada e reconstrói o componente no canvas

<br/>

## Módulo Renderer

O Renderer é um interpretador dinâmico de metadados integrado ao frontend, desenvolvido em **React + TypeScript**. Em vez de armazenar imagens rasterizadas, a plataforma persiste a **árvore lógica de nós gráficos** em JSON. O Renderer converte essa estrutura em elementos semânticos do DOM estilizados via CSS em tempo de execução.

### Fluxo de Renderização

![Diagrama do Módulo Renderer](/img/renderer.svg)

O processamento recursivo garante que componentes com estruturas complexas de aninhamento (frames, grupos, instâncias e variantes) sejam renderizados com fidelidade visual em qualquer tela da plataforma.

---

<div className="partners-info">
  :::info Detalhamento completo
  Diagramas de classes, DER, modelo lógico do banco e documentação completa das rotas da API e dos módulos estão disponíveis na [documentação PDF completa](/hive_doc1.pdf).
  :::
</div>