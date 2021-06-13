import { Article } from '../types/Article'
import NextLink from 'next/link'
import { SectionHeader } from './SectionHeader'
import { CategoryBadge } from './CategoryBadge'

export const ArticleHeader: React.VFC<{ article: Article }> = (props) => {
	const {
		article: { id, category, title, author },
	} = props

	const ArticleAuthor = () => (
		<>
			By{' '}
			<NextLink href={`/authors/${author.id}`} passHref>
				<a className="hover:underline">
					<span>{author.name}</span>
				</a>
			</NextLink>
		</>
	)

	return (
		<SectionHeader
			titleLayoutId={`article-title-${id}`}
			title={title}
			taglineLayoutId={`author-name-${id}`}
			tagline={<ArticleAuthor />}
			rightContent={<CategoryBadge layoutId={`article-category-${id}`} category={category} />}
			backLink="/articles"
		/>
	)
}
