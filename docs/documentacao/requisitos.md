---
id: requisitos
title: Requisitos
sidebar_label: Requisitos
sidebar_position: 3
---

# Requisitos do Sistema

Os requisitos do HIVE foram levantados a partir da análise das necessidades do setor ETS e organizados em funcionais (o que o sistema faz) e não funcionais (como o sistema se comporta).

---

## Requisitos Funcionais

### RF01 — Acesso e Autenticação
- Login de usuário via integração com o sistema Nexus
- Definição automática de perfil (comum ou administrador)
- Logout

### RF02 — Gerenciamento de Usuários
- Listagem de componentes criados ou colaborados pelo usuário
- Favoritar e visualizar componentes favoritados

### RF03 — Gerenciamento de Componentes

| ID | Funcionalidade |
|---|---|
| RF03.1 | Cadastro de novo componente |
| RF03.2 | Edição de metadados (nome, descrição, tags) |
| RF03.3 | Visualização de detalhes |
| RF03.4 | Desativação de componente |
| RF03.5 | Reativação (restrito ao administrador) |
| RF03.6 | Listagem completa da biblioteca |
| RF03.7 | Adição de colaborações de código |
| RF03.8–9 | Visualização e filtro de colaborações por stack e versão |
| RF03.10–11 | Edição de código e download/cópia |
| RF03.12–15 | Gestão e filtro por tags |
| RF03.16–21 | Filtros por stack, versão, usuário, nome e ordenação |

### RF04 — Interações e Engajamento
- Curtir componentes e visualizar recomendações
- Componentes sugeridos na visualização detalhada
- Reportar colaborações com inconsistências

### RF05 — Sistema de Report
- Histórico de reports com status acompanhável
- Envio de réplicas e conclusão pelo administrador

### RF06 — Integração com o Figma
- Exportar componente do Figma para a plataforma via JSON
- Importar componente JSON para renderização na plataforma
- Utilizar JSON de componente cadastrado de volta no Figma

### RF07 — Suporte
- Página de tutoriais de uso da plataforma e do plugin
- Página "Sobre" com informações do projeto
- Vídeos explicativos em etapas estratégicas

---

## Requisitos Não Funcionais

### RNF01 — Controle de Acesso

<div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', margin:'1rem 0'}}>
<div style={{background:'#f8f4ff', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'12px', padding:'1rem'}}>
  <h4 style={{color:'#683082', margin:'0 0 0.5rem', fontSize:'0.9rem'}}>👤 Usuário Comum</h4>
  <ul style={{fontSize:'0.85rem', color:'#3C3C3C', margin:0, paddingLeft:'1.25rem'}}>
    <li>Acesso restrito às funcionalidades definidas</li>
    <li>Não acessa área administrativa</li>
    <li>Não pode reativar componentes</li>
  </ul>
</div>
<div style={{background:'#f8f4ff', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'12px', padding:'1rem'}}>
  <h4 style={{color:'#683082', margin:'0 0 0.5rem', fontSize:'0.9rem'}}>👑 Administrador</h4>
  <ul style={{fontSize:'0.85rem', color:'#3C3C3C', margin:0, paddingLeft:'1.25rem'}}>
    <li>Acesso total à plataforma</li>
    <li>Gerencia tags, stacks e reports</li>
    <li>Reativa componentes desativados</li>
  </ul>
</div>
</div>

### RNF02 — Segurança
- Autenticação via sistema externo com tokens JWT
- Controle de acesso por roles por rota e funcionalidade
- Usuários não acessam URLs sem autenticação prévia
- Detecção de MIME Type via Apache Tika para prevenir upload de arquivos maliciosos

### RNF03 — Desempenho
- Tempo de resposta adequado para operações de listagem e filtro
- Processamento assíncrono de notificações via RabbitMQ para não impactar a requisição principal

### RNF04 — Tecnologias
- Backend desenvolvido em Java com Spring Boot
- Frontend em React com TypeScript
- Plugin em Preact + TypeScript
- Banco de dados relacional com versionamento via Flyway

---

:::info Documentação completa dos requisitos
O Product Backlog completo e os diagramas de caso de uso detalhados estão disponíveis na [documentação PDF completa](/hive_doc1.pdf).
:::
