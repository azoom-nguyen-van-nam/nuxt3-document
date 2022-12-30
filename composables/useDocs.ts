import { DocsSidebar, DocsGuide } from '~~/types/docs'

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
        },
      ]
    }
  ])
