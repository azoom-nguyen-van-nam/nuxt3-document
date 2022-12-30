export const usePageHomeTimeline = () =>
  useState<Array<string>>('PAGEHOMETIMELINE', () => [
    'Use the following command to create a new starter project',
    'Go to your project folder',
    'Install the dependencies',
    'Now you will be able to start your Nuxt app in development mode'
  ])

export const usePageHomeCode = () =>
  useState<Array<string>>('PAGEHOMECODE', () => [
    'npx nuxi init <project-name>',
    'cd <project-name>',
    'yarn install',
    'yarn dev'
  ])

