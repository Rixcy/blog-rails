import { SectionHeader } from './SectionHeader'

export type ArticlesHeaderProps = {
  articlesCount?: number
}

export const ArticlesHeader: React.VFC<ArticlesHeaderProps> = (props) => {
  const { articlesCount } = props

  const taglineCount = articlesCount ? `${articlesCount}` : 'the most recent'

  return (
    <SectionHeader
      title="Articles"
      tagline={`View ${taglineCount} articles right here in your browser!`}
    />
  )
}
