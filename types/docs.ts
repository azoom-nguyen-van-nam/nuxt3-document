export interface DocsSidebar {
  title: string
  icon?: string
  router: string
}

export interface DocsGuide {
  title: string
  children: [] | Array<DocsSidebar>
}
