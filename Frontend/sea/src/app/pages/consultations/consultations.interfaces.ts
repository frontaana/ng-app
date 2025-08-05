export type contentData = {
  title: '',
  description: '',
  completed: false,
}

export enum Titles {
  js = 'Основы JavaScript',
  ts = 'TypeScript',
  css = 'CSS',
  html = 'HTML',
  architecture = 'Архитектура и принципы разработки',
  dev_tools = 'Инструменты разработки',
  protocols = 'Протоколы',
}

export type Themes = {
  title: string,
  level: number,
  contentData: contentData[]
}
