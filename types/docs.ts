export interface DocsSidebar {
  title: string
  icon?: string
  router: string
}

export interface DocsGuide {
  title: string
  children: [] | Array<DocsSidebar>
}

export interface RenderingDocs {
  title: string
  icon?: string
  router: string
}

export interface StateManagementDoc {
  title: string
  router: string
}