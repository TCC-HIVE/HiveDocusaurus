import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HIVE',
  tagline: 'Biblioteca colaborativa de componentes UI',
  favicon: 'img/logo.png',

  url: 'https://hive-docs.github.io',
  baseUrl: '/',

  organizationName: 'hive-project',
  projectName: 'hive-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      logo: {
        alt: 'HIVE Logo',
        src: 'img/hive_logo.png',
        srcDark: 'img/hive_logo_white.png',
      },
      items: [
        {
          to: '/',
          label: 'Início',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          to: '/docs/introducao',
          label: 'Introdução',
          position: 'left',
          activeBaseRegex: '^/docs/introducao',
        },
        {
          to: '/docs/documentacao',
          label: 'Documentação',
          position: 'left',
          activeBaseRegex: '^/docs/documentacao',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'HIVE',
        src: 'img/logo.png',
        width: 48,
      },
      links: [
        {
          title: 'Documentação',
          items: [
            { label: 'Introdução', to: '/docs/introducao' },
            { label: 'Objetivos', to: '/docs/documentacao/objetivos' },
            { label: 'Requisitos', to: '/docs/documentacao/requisitos' },
            { label: 'Arquiteturas', to: '/docs/documentacao/arquiteturas' },
            { label: 'Identidade Visual', to: '/docs/documentacao/identidade-visual' },
            { label: 'Tecnologias', to: '/docs/documentacao/tecnologias' },
            { label: 'Testes', to: '/docs/documentacao/testes' },
          ],
        },
        {
          title: 'Parceiros',
          items: [
            {
              label: 'Bosch Brasil',
              href: 'https://www.bosch.com.br',
            },
            {
              label: 'SENAI Roberto Mange',
              href: 'https://www.sp.senai.br/',
            },
          ],
        },
      ],
      copyright: `© 2026 HIVE — Desenvolvido por alunas do SENAI e aprendizes na Bosch. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'java', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;