---
id: requisitos
title: Requisitos
sidebar_label: Requisitos
sidebar_position: 3
---

# Requisitos do Sistema

Os requisitos do HIVE foram levantados a partir da análise das necessidades do setor da ETS e organizados em funcionais (o que o sistema faz) e não funcionais (como o sistema se comporta).

<br/>

## Requisitos Funcionais

### RF01 — Acesso e Autenticação
- Login de usuário via integração com o sistema Nexus
- Definição automática de perfil (comum ou administrador)
- Logout

### RF02 — Gerenciamento de Usuários
- Listagem de componentes criados ou colaborados pelo usuário
- Favoritar e visualizar componentes favoritados

### RF03 — Gerenciamento de Componentes
- Cadastro de novo componente
- Edição de metadados (nome, descrição, tags) 
- Visualização de detalhes 
- Desativação de componente 
- Reativação (restrito ao administrador)
- Listagem completa da biblioteca
- Adição de colaborações de código
- Visualização e filtro de colaborações por stack e versão
- Edição de código
- Download/cópia de código
- Cadastro e gestão de tags e stacks
- Filtros por stack, versão, tags, usuário, nome, ordenação e paginação

### RF04 — Interações e Engajamento
- Curtir componentes e visualizar recomendações de componentes mais curtidos
- Sugestões de componentes na visualização detalhada
- Reportar colaborações com inconsistências

### RF05 — Sistema de Report
- Histórico de reports com status acompanhável
- Envio de réplicas e conclusão de reports pelo administrador

### RF06 — Integração com o Figma
- Exportar componente do Figma para a plataforma via JSON
- Importar componente JSON para renderização na plataforma
- Utilizar JSON de componente cadastrado de volta no Figma

### RF07 — Suporte
- Página de tutoriais de uso da plataforma e do plugin
- Página "Sobre" com informações do projeto
- Vídeos explicativos em etapas estratégicas

<br/>

## Requisitos Não Funcionais

### RNF01 — Controle de Acesso

<div className="access-profile-grid">
  <article className="access-profile-card">
    <span className="access-profile-card__icon" aria-hidden="true">&#128100;</span>
    <h4>Usuário Comum</h4>
    <ul>
      <li>Acesso restrito às funcionalidades definidas</li>
      <li>Não acessa área administrativa</li>
      <li>Não pode reativar componentes</li>
    </ul>
  </article>

  <article className="access-profile-card">
    <span className="access-profile-card__icon" aria-hidden="true">&#9881;&#65039;</span>
    <h4>Administrador</h4>
    <ul>
      <li>Acesso total à plataforma</li>
      <li>Gerencia tags, stacks e reports</li>
      <li>Reativa componentes desativados</li>
    </ul>
  </article>
</div>

### RNF02 — Segurança
- Autenticação via sistema externo com token JWT
- Controle de acesso a rotas e funcionalidades por roles 
- Usuários não acessam URLs sem autenticação prévia
- Detecção de MIME Type via Apache Tika para prevenir upload de arquivos maliciosos

### RNF03 — Usabilidade
- O sistema é de fácil aprendizado e intuitivo ao usuário
- Conformidade com o padrão do Brand Guide da ETS e do projeto Nexus, facilitando a familiaridade à plataforma
- Exibição de mensagens de erros e feedbacks para direcionar o usuário 

### RNF04 — Desempenho
- Tempo de resposta adequado para operações de listagem e filtro
- Renderização de componentes sem travamentos perceptíveis
- Processamento assíncrono de notificações via RabbitMQ, que não impacta a requisição principal e retorna respostas ao usuário mais rapidamente

---

<div className="partners-info">
  :::info Documentação completa dos requisitos
  O Product Backlog completo e os diagramas de caso de uso detalhados estão disponíveis na [documentação PDF completa](/hive_doc1.pdf).
  :::
</div>