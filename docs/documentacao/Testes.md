---
id: testes
title: Testes
sidebar_label: Testes
sidebar_position: 7
---

# Resultados

Esta seção registra os resultados dos testes, métricas de qualidade e as conclusões obtidas ao longo do desenvolvimento do HIVE.

:::info Testes em andamento
Os testes de aceitação com usuários finais estão programados para a **4ª Sprint (Maio–Junho/2026)**. Esta página será atualizada com os resultados completos após a execução.
:::

---

## Plano de Testes

O HIVE adotou uma abordagem estruturada de testes, cobrindo os principais módulos da aplicação:

### Módulos Testados

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1rem', margin:'1.5rem 0'}}>

{['Component', 'Component Implement', 'Code', 'Favorite', 'File Storage', 'Notification', 'Report', 'Security', 'Stack', 'Stack Version', 'Vote', 'Tag'].map(m => (
  <div key={m} style={{background:'#f8f4ff', border:'1px solid rgba(104,48,130,0.15)', borderRadius:'10px', padding:'0.875rem 1rem', display:'flex', alignItems:'center', gap:'0.5rem'}}>
    <span style={{color:'#683082', fontWeight:700}}>✓</span>
    <span style={{fontSize:'0.87rem', color:'#3C3C3C', fontWeight:500}}>{m}</span>
  </div>
))}

</div>

### Metodologia

- **Testes unitários** por serviço e controlador
- **Análise de Cobertura de Código (Code Coverage)** via relatório automatizado
- **Swagger** para validação e documentação dos endpoints da API
- Testes de especificação, moderação e normalização de tags

---

## Cobertura de Código

O relatório de cobertura de código foi gerado ao término da 3ª Sprint, indicando a porcentagem de linhas, branches e métodos cobertos pelos testes automatizados. Os resultados completos estão disponíveis na documentação PDF.

---

## Métricas Previstas

As seguintes métricas serão coletadas ao longo da fase de validação com usuários:

| Métrica | Objetivo |
|---|---|
| Tempo médio para encontrar um componente | Redução vs. processo atual |
| Taxa de reutilização de componentes | Crescimento por sprint |
| Satisfação dos usuários (SUS Score) | ≥ 70 pontos |
| Cobertura de testes automatizados | ≥ 80% |
| Tempo de resposta da API | < 500ms em P95 |

---

## Próximas Atualizações

Após a conclusão da **4ª Sprint**, esta seção será atualizada com:

- 📊 Resultados dos testes de aceitação com aprendizes e profissionais da ETS
- 📈 Métricas de uso da plataforma em ambiente de produção
- 💬 Feedbacks coletados e melhorias identificadas
- 🏆 Avaliação final do TCC

---

:::tip Acompanhe o progresso
Para ver o estado atual dos testes e o relatório de cobertura detalhado, consulte a [documentação PDF completa](/hive_doc1.pdf).
:::
