type NavList = {
  name: string
  path: string
  target: string
}

export const useAppName = () =>
  useState<string>('WEBSITENAME', () => 'Get started with Nuxt quickly')

export const useAppContent = () =>
  useState<string>('WEBSITECONTENT', () => 'Hi')

export const useTheHeaderNavList = () =>
  useState<Array<NavList>>('HEADERNAVLIST', () => [
    { name: 'Home', path: '/', target: '' },
    { name: 'Docs', path: '/docs/breaking-changes', target: '' },
    {
      name: 'Example',
      path: useNuxtApp().$config.public.EXAMPLE_NUXT_URL,
      target: '_blank'
    }
  ])

export const useTheHeaderGithubPath = () =>
  useState<string>(
    'HEADERGITHUBPATH',
    () => 'https://github.com/azoom-nguyen-van-nam'
  )
