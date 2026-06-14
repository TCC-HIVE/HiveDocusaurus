---
id: tecnologias
title: Tecnologias e Ferramentas
sidebar_label: Tecnologias e Ferramentas
sidebar_position: 6
---

# Tecnologias e Ferramentas

O HIVE foi desenvolvido com uma stack moderna, escolhida para garantir robustez, escalabilidade e facilidade de manutenção.

<br/>

## Backend

<div className="technology-card-grid">
  <article className="technology-card technology-card--purple-700">
    <div className="technology-card__icon"><img src="/img/spring.svg" alt="" /></div>
    <h3>Spring Boot</h3>
    <p>Framework usado no desenvolvimento da API REST. Fornece estrutura robusta para criação de endpoints, gerenciamento de dependências e configuração da aplicação.</p>
  </article>

  <article className="technology-card technology-card--purple-500">
    <div className="technology-card__icon"><img src="/img/security.svg" alt="" /></div>
    <h3>Spring Security</h3>
    <p>Gerenciamento de autenticação e autorização com controle de acesso baseado em roles.</p>
  </article>

  <article className="technology-card technology-card--purple-400">
    <div className="technology-card__icon"><img src="/img/oauth.svg" alt="" /></div>
    <h3>OAuth2</h3>
    <p>Validação e processamento de tokens JWT emitidos por serviços externos de autenticação.</p>
  </article>

  <article className="technology-card technology-card--purple-700">
    <div className="technology-card__icon"><img src="/img/rabbit.svg" alt="" /></div>
    <h3>RabbitMQ</h3>
    <p>Message broker para processamento assíncrono de notificações e reports. Desacopla o envio de alertas do ciclo de vida da requisição principal.</p>
  </article>

  <article className="technology-card technology-card--purple-600">
    <div className="technology-card__icon technology-card__icon--large"><img src="/img/tika.svg" alt="" /></div>
    <h3>Apache Tika</h3>
    <p>Detecta o MIME Type real em uploads de código e previne o envio de arquivos maliciosos disfarçados de texto.</p>
  </article>

  <article className="technology-card technology-card--purple-300">
    <div className="technology-card__icon"><img src="/img/flyway.svg" alt="" /></div>
    <h3>Flyway</h3>
    <p>Versionamento e migração do banco de dados. Garante evolução estruturada e rastreável do esquema durante o desenvolvimento.</p>
  </article>

  <article className="technology-card technology-card--purple-700">
    <div className="technology-card__icon technology-card__icon--large"><img src="/img/jacoco.svg" alt="" /></div>
    <h3>JaCoCo</h3>
    <p>Analisa a cobertura dos testes automatizados, permitindo medir a porcentagem de código validada pelos testes unitários.</p>
  </article>

  <article className="technology-card technology-card--purple-500">
    <div className="technology-card__icon"><img src="/img/mockito.svg" alt="" /></div>
    <h3>Mockito</h3>
    <p>Cria mocks (objetos simulados) durante os testes para proporcionar maior controle sobre cada cenário validado.</p>
  </article>

  <article className="technology-card technology-card--purple-400">
    <div className="technology-card__icon"><img src="/img/junit.svg" alt="" /></div>
    <h3>JUnit</h3>
    <p>Executa testes unitários e valida automaticamente as regras de negócio, garantindo maior confiabilidade ao sistema.</p>
  </article>

  <article className="technology-card technology-card--purple-400">
    <div className="technology-card__icon"><img src="/img/docker.svg" alt="" /></div>
    <h3>Docker</h3>
    <p>Containeriza o RabbitMQ, padronizando o ambiente da equipe e simplificando a execução dos serviços utilizados pela aplicação.</p>
  </article>

  <article className="technology-card technology-card--purple-600">
    <div className="technology-card__icon"><img src="/img/mysql.svg" alt="" /></div>
    <h3>MySQL</h3>
    <p>Banco de dados do projeto. Oferece armazenamento estruturado, boa performance e ampla compatibilidade com aplicações web.</p>
  </article>

  <article className="technology-card technology-card--purple-300">
    <div className="technology-card__icon"><img src="/img/swager.svg" alt="" /></div>
    <h3>Swagger UI</h3>
    <p>Documenta os endpoints da API e permite visualizar, testar e validar as rotas disponíveis no sistema.</p>
  </article>
</div>

<br/>

## Frontend e Plugin

<div className="technology-card-grid">
  <article className="technology-card technology-card--purple-600">
    <div className="technology-card__icon"><img src="/img/react.svg" alt="" /></div>
    <h3>React</h3>
    <p>Base do frontend da plataforma. Favorece a reutilização através da componentização e uma navegação dinâmica para o usuário.</p>
  </article>

  <article className="technology-card technology-card--purple-700">
    <div className="technology-card__icon"><img src="/img/ts.svg" alt="" /></div>
    <h3>TypeScript</h3>
    <p>Utilizado no frontend, no Renderer e no plugin. Garante tipagem estática e maior segurança durante o desenvolvimento.</p>
  </article>

  <article className="technology-card technology-card--purple-500">
    <div className="technology-card__icon"><img src="/img/tailwind.svg" alt="" /></div>
    <h3>Tailwind CSS</h3>
    <p>Estiliza a plataforma web e aumenta a produtividade na criação de interfaces por meio de classes utilitárias prontas.</p>
  </article>

  <article className="technology-card technology-card--purple-400">
    <div className="technology-card__icon"><img src="/img/preact.svg" alt="" /></div>
    <h3>Preact</h3>
    <p>Framework leve escolhido para o plugin, que exige inicialização rápida e baixo consumo de recursos.</p>
  </article>

  <article className="technology-card technology-card--purple-600">
    <div className="technology-card__icon"><img src="/img/css.svg" alt="" /></div>
    <h3>CSS</h3>
    <p>Responsável pela estilização do plugin, reduzindo dependências externas e mantendo leveza e performance.</p>
  </article>

  <article className="technology-card technology-card--purple-300">
    <div className="technology-card__icon"><img src="/img/plugin.svg" alt="" /></div>
    <h3>Figma Plugin API</h3>
    <p>Biblioteca oficial para desenvolvimento de plugins que permite a comunicação entre o plugin e o canvas do Figma.</p>
  </article>
</div>

<br/>

## Design e Prototipação

<div className="technology-card-grid technology-card-grid--compact">
  <article className="technology-card technology-card--purple-500">
    <div className="technology-card__icon"><img src="/img/figma.svg" alt="" /></div>
    <h3>Figma</h3>
    <p>Utilizado para prototipação das interfaces e desenvolvimento do plugin.</p>
  </article>
</div>

<br/>

## Gestão e Documentação

<div className="technology-card-grid">
  <article className="technology-card technology-card--purple-300">
    <div className="technology-card__icon"><img src="/img/jira.svg" alt="" /></div>
    <h3>Jira</h3>
    <p>Organiza e acompanha o desenvolvimento do projeto por meio da metodologia Kanban.</p>
  </article>

  <article className="technology-card technology-card--purple-700">
    <div className="technology-card__icon"><img src="/img/word.svg" alt="" /></div>
    <h3>Microsoft Word</h3>
    <p>Utilizado na elaboração da documentação técnica oficial do projeto.</p>
  </article>

  <article className="technology-card technology-card--purple-500">
    <div className="technology-card__icon"><img src="/img/github.svg" alt="" /></div>
    <h3>GitHub</h3>
    <p>Realiza o controle de versão e viabiliza a colaboração da equipe no código-fonte.</p>
  </article>

  <article className="technology-card technology-card--purple-400">
    <div className="technology-card__icon"><img src="/img/docusaurus.svg" alt="" /></div>
    <h3>Docusaurus</h3>
    <p>Ferramenta escolhida para criar esta documentação web navegável.</p>
  </article>
</div>

---
