import { SectionHeader } from './SectionHeader'
import type { Author } from '../types/Author'
import { BouncingLink } from './BouncingLink'

export type AuthorHeaderProps = {
  author: Author
}

export const AuthorHeader: React.VFC<AuthorHeaderProps> = (props) => {
  const { author } = props

  return (
    <>
      <img
        className="inline-block h-16 w-16 rounded-full mb-4 bg-gray-200"
        src={author.avatar_url}
        alt={`${author.name}'s avatar`}
      />
      <SectionHeader
        title={author.name}
        tagline={author.tagline}
        leftContent={
          <BouncingLink
            direction="left"
            link="/categories"
            linkText="All Categories"
          />
        }
        rightContent={
          <BouncingLink
            direction="right"
            link="/articles"
            linkText="All Articles"
          />
        }
      />
    </>
  )
}
