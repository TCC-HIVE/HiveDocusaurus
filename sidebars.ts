import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      link: { type: 'doc', id: 'introducao/index' },
      items: [
        'introducao/visao-geral',
        'introducao/equipe',
      ],
    },
    {
      type: 'category',
      label: 'Documentação',
      link: { type: 'doc', id: 'documentacao/index' },
      items: [
        'documentacao/objetivos',
        'documentacao/requisitos',
        'documentacao/arquiteturas',
        'documentacao/identidade-visual',
        'documentacao/tecnologias',
        'documentacao/resultados',
      ],
    },
  ],
};

export default sidebars;