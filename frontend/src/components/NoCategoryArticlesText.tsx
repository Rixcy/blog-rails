import NextLink from 'next/link'

export type NoCategoryArticlesTextProps = {
  categoryId: number
}

export const NoCategoryArticlesText: React.VFC<NoCategoryArticlesTextProps> = (
  props
) => {
  const { categoryId } = props

  return (
    <p data-testid="no-category-articles-text">
      This category has no articles yet.{' '}
      <NextLink href={`/articles/new?categoryId=${categoryId}`} passHref>
        <a className="hover:underline">Create one?</a>
      </NextLink>
    </p>
  )
}
