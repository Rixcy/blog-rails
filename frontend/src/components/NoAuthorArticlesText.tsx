import NextLink from 'next/link'

export type NoAuthorArticlesTextProps = {
  authorId: number
}

export const NoAuthorArticlesText: React.VFC<NoAuthorArticlesTextProps> = (
  props
) => {
  const { authorId } = props

  return (
    <p data-testid="no-author-articles-text">
      This author has no articles yet.{' '}
      <NextLink href={`/articles/new?authorId=${authorId}`} passHref>
        <a className="hover:underline">Create one?</a>
      </NextLink>
    </p>
  )
}
