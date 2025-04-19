export interface HomeConfig {
  name: string
  fullName: string
  location: string
  beian: string
  email: string
  tag: string[]
  url: string
  contacts: {
    type: string
    icon: string
    url: string
    hoverColor: string
  }[]
  typedDescriptions: string[]
  skillsList: {
    name: string
    color: string
    icon: string
    border?: boolean
  }[]
  siteLinks: {
    title: string
    url: string
    desc: string
    icon?: string
    main?: boolean
  }[]
  timeLine: {
    time: string
    title: string
  }[]
}
