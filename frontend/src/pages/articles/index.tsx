import { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { ArticleCard } from '../../components/ArticleCard'
import { Article } from '../../types/Article'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'
import { ArticlesHeader } from '../../components/ArticlesHeader'

export default function Articles({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<PageContainer>
			<Meta title="Articles" />
			<ArticlesHeader />
			<div className="grid gap-16 pt-6 md:pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</PageContainer>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(apiUrl('articles'))

	const articles: Article[] = await res.json()

	return {
		props: {
			articles,
		},
	}
}
