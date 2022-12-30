import { DocsSidebar, DocsGuide, RenderingDocs } from '~~/types/docs'

export const useDocsSidebar = () =>
  useState<Array<DocsSidebar>>('DocsSidebar', () => [
    {
      title: 'Breaking Changes',
      icon: 'iconfont icon-document',
      router: '/docs/breaking-changes'
    }
  ])

export const useDocsGuide = () =>
  useState<Array<DocsGuide>>('DocsGuide', () => [
    {
      title: 'components',
      children: [
        {
          title: 'Component naming',
          router: '/docs/directory-structure/components/names'
        },
        {
          title: 'Global component',
          router: '/docs/directory-structure/components/global'
        },
        {
          title: 'Rendering mode',
          router: '/docs/directory-structure/components/render-mode'
        }
      ]
    },
    {
      title: 'composables',
      children: [
        {
          title: 'Auto-import',
          router: '/docs/directory-structure/composables/auto-import'
        },
      ]
    },
    {
      title: 'plugins',
      children: [
        {
          title: 'Auto-import',
          router: '/docs/directory-structure/plugins/auto-import'
        },
        {
          title: 'Naming',
          router: '/docs/directory-structure/plugins/naming'
        },
        {
          title: 'Inject',
          router: '/docs/directory-structure/plugins/inject'
        }
      ]
    },
    {
      title: 'middleware',
      children: [
        {
          title: 'Naming',
          router: '/docs/directory-structure/middleware/naming'
        },
        {
          title: 'Migration',
          router: '/docs/directory-structure/middleware/migrate'
        }
      ]
    },
    {
      title: 'pages',
      children: [
        {
          title: 'Dynamic routes',
          router: '/docs/directory-structure/pages/dynamic-routes'
        },
        {
          title: 'Catch-all',
          router: '/docs/directory-structure/pages/catch-all'
        },
        {
          title: 'Head tag',
          router: '/docs/directory-structure/pages/seo-and-meta'
        }
      ]
    }
  ])

export const useRenderingDocs = () =>
  useState<Array<RenderingDocs>>('RenderingDocs', () => [
    {
      title: 'Client Side Rendering (SPA)',
      router: '/docs/spa'
    },
    // {
    //   title: 'Server Side Rendering (SSR)',
    //   router: '/docs/spa'
    // },
    {
      title: 'Universal Rendering (SSR + Hydration)',
      router: '/docs/spa'
    },
    // {
    //   title: 'Static Rendering (SSG)',
    //   router: '/docs/spa'
    // },
    {
      title: 'Hybrid Rendering',
      router: '/docs/spa'
    },
  ])
